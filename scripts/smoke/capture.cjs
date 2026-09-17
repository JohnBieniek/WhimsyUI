const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const sharp = require('sharp');
const measure = require('./measure.cjs');
const routes = JSON.parse(fs.readFileSync(path.join(__dirname, 'routes.json')));
const widths = [320,360,390,430,479,480,700,701,768,820,900,901,960,1001,1024,1050,1100,1101,1151,1201,1280,1366,1440,1536,1600,1601,1680,1800,1920,2560];
const height = w => w >= 1920 ? (w === 2560 ? 1440 : 1080) : w === 1440 ? 1050 : w >= 1280 ? 800 : w >= 960 ? 768 : w >= 700 ? 1024 : 844;
const root = path.resolve(process.env.SMOKE_REVIEW_ROOT || 'reports/smoke-review');
fs.mkdirSync(path.join(root, 'images'), {recursive:true});
const commit = require('child_process').execFileSync('git', ['rev-parse','HEAD'], {encoding:'utf8'}).trim();
const sourceTree = require('node:crypto').createHash('sha256').update(require('child_process').execFileSync('git', ['ls-tree','-r','HEAD','--','src','public','next.config.ts','package-lock.json'])).digest('hex');
const manifestFile = path.join(root, 'manifest.json');
const manifest = fs.existsSync(manifestFile) ? JSON.parse(fs.readFileSync(manifestFile)) : {commit, startedAt:new Date().toISOString(), browser:'Chromium', routes, captures:[]};
if (manifest.commit !== commit && manifest.sourceTree !== sourceTree) throw Error('Existing review belongs to different site source; use a new review folder');
manifest.sourceTree = sourceTree;
const captured = new Set(manifest.captures.map(c=>c.id));
manifest.version = JSON.parse(fs.readFileSync('package.json')).version;
const base = process.env.SMOKE_BASE_URL || 'http://127.0.0.1:8766';
async function capture(page, route, width, height, zoom) {
  const slug=route==='/'?'home':route.slice(1).replaceAll('/','--');
  const id=slug+'--'+width+'x'+height+'--z'+Math.round(zoom*100);
  if(captured.has(id))return;
  const errors=[];page.removeAllListeners('pageerror');page.on('pageerror',e=>errors.push(e.message));
  const response=await page.goto(base+route,{waitUntil:'load'});
  await page.evaluate(()=>document.fonts.ready);
  const displayedVersion = await page.locator('.footer-version small').textContent();
  if(displayedVersion !== 'v'+manifest.version)throw Error('Version mismatch: '+displayedVersion);
  await page.evaluate(async()=>{[...document.images].forEach(i=>i.loading='eager');await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));});
  await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
  const measured=await page.evaluate(measure);
  if(Math.abs(measured.width-width/zoom)>2 || Math.abs(measured.dpr-zoom)>.01)throw Error('Zoom mismatch: '+id);
  const file='images/'+id+'.jpg';
  if(zoom===1){
    await page.screenshot({path:path.join(root,file),fullPage:true,type:'jpeg',quality:85,animations:'disabled'});
  }else{
    // CDP clip coordinates use device-independent pixels before page zoom,
    // rather than the zoom-adjusted CSS viewport. Include the full surface.
    const session=await page.context().newCDPSession(page);
    const screenshot=await session.send('Page.captureScreenshot',{format:'jpeg',quality:85,fromSurface:true,captureBeyondViewport:true,clip:{x:0,y:0,width,height:Math.ceil(measured.pageHeight*zoom),scale:1}});
    fs.writeFileSync(path.join(root,file),Buffer.from(screenshot.data,'base64'));
    await session.detach();
  }
  const metadata=await sharp(path.join(root,file)).metadata();
  const issues=[];
  if(response.status()!==200)issues.push('HTTP '+response.status());
  if(measured.pageWidth>measured.width+1)issues.push('Horizontal overflow');
  issues.push(...measured.headings.filter(h=>h.overflow>2).map(h=>'Heading overflow: '+h.text));
  issues.push(...measured.brokenImages.map(src=>'Missing image: '+src),...errors);
  manifest.captures.push({id,route,width,height,zoom:Math.round(zoom*100),cssWidth:measured.width,cssHeight:measured.height,dpr:measured.dpr,pageHeight:measured.pageHeight,imageWidth:metadata.width,imageHeight:metadata.height,file,issues,capturedAt:new Date().toISOString()});
  captured.add(id);
  fs.writeFileSync(manifestFile,JSON.stringify(manifest,null,2));
  if(manifest.captures.length%50===0)console.log('Captured '+manifest.captures.length+'/1254');
}
async function normal(){
  const browser=await chromium.launch({headless:true});manifest.browserVersion=browser.version();
  const context=await browser.newContext({deviceScaleFactor:1,reducedMotion:'reduce'});
  const jobs=routes.flatMap(route=>widths.map(width=>({route,width})));let next=0;
  async function worker(){const page=await context.newPage();while(next<jobs.length){const {route,width}=jobs[next++];await page.setViewportSize({width,height:height(width)});await capture(page,route,width,height(width),1);}await page.close();}
  await Promise.all([worker(),worker(),worker()]);await browser.close();
}
async function zoomed(width,height){
  const extension=path.join(__dirname,'zoom-extension');
  const context=await chromium.launchPersistentContext('',{channel:'chromium',headless:true,viewport:{width,height},deviceScaleFactor:1,reducedMotion:'reduce',args:['--disable-extensions-except='+extension,'--load-extension='+extension]});
  const worker=context.serviceWorkers()[0]||await context.waitForEvent('serviceworker');
  const page=context.pages()[0];await page.goto(base+'/');
  for(const zoom of [.8,1.25,1.5,2]){
    await worker.evaluate(async value=>{const [tab]=await chrome.tabs.query({active:true});await chrome.tabs.setZoom(tab.id,value);},zoom);
    await page.waitForFunction(expected=>Math.abs(innerWidth-expected)<2,width/zoom);
    for(const route of routes)await capture(page,route,width,height,zoom);
  }
  await context.close();
}
Promise.all([normal(),zoomed(1440,1050),zoomed(1920,1080)]).then(()=>{
  manifest.completedAt=new Date().toISOString();manifest.captures.sort((a,b)=>routes.indexOf(a.route)-routes.indexOf(b.route)||a.width-b.width||a.zoom-b.zoom);
  fs.writeFileSync(manifestFile,JSON.stringify(manifest,null,2));console.log('COMPLETE '+manifest.captures.length+' captures; '+manifest.captures.filter(c=>c.issues.length).length+' flagged');
}).catch(error=>{console.error(error);process.exit(1)});
