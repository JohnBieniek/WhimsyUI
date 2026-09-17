const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const {pathToFileURL} = require('node:url');
const {chromium} = require('playwright');
const sharp = require('sharp');
const root = path.resolve(process.env.SMOKE_REVIEW_ROOT || `reports/smoke-review-${require('../../package.json').version}`);
async function main() {
  const m=JSON.parse(fs.readFileSync(path.join(root,'manifest.json'),'utf8'));
  assert(m.completedAt); assert.equal(m.captures.length,m.routes.length*38);
  assert.equal(new Set(m.captures.map(c=>c.id)).size,m.captures.length);
  for (const route of m.routes) assert.equal(m.captures.filter(c=>c.route===route).length,38,route);
  const baselineFile=path.join(root,'baseline','manifest.json');
  const baseline=fs.existsSync(baselineFile)?JSON.parse(fs.readFileSync(baselineFile,'utf8')):null;
  for (const c of m.captures) {
    const meta=await sharp(path.join(root,c.file)).metadata();
    assert.equal(meta.width,c.width,c.id); assert.equal(meta.width,c.imageWidth,c.id); assert.equal(meta.height,c.imageHeight,c.id);
    assert(Math.abs(meta.height-c.pageHeight*c.zoom/100)<=2,`Full page: ${c.id}`);
    assert(Math.abs(c.cssWidth-c.width*100/c.zoom)<2,`Zoom: ${c.id}`);
    if (baseline?.captures.some(b=>b.id===c.id)) assert(fs.existsSync(path.join(root,'baseline',c.file)),`Baseline: ${c.id}`);
  }
  const warnings=m.captures.filter(c=>c.issues.length);
  const browser=await chromium.launch();
  try {
    const context=await browser.newContext({viewport:{width:1600,height:1000},acceptDownloads:true});
    const p=await context.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));
    await p.goto(pathToFileURL(path.join(root,'index.html')).href);
    assert.equal(await p.locator('#capture option').count(),m.captures.length);
    await p.locator('#route').selectOption('/work');
    assert.equal(await p.locator('#capture option').count(),38);
    await p.locator('#width').selectOption('700'); await p.locator('#zoom').selectOption('100');
    assert.equal(await p.locator('#capture option').count(),1);
    assert.match(await p.locator('#reference').textContent(),/work--700x1024--z100/);
    await p.locator('#current').evaluate(i=>i.decode());
    if (baseline) {
      await p.locator('#before').evaluate(i=>i.decode());
      await p.locator('#current-scroll').evaluate(e=>{e.scrollTop=(e.scrollHeight-e.clientHeight)*.4;});
      await p.waitForTimeout(100);
      const ratios=await p.evaluate(()=>['before-scroll','current-scroll'].map(id=>{const e=document.getElementById(id);return e.scrollTop/(e.scrollHeight-e.clientHeight);}));
      assert(Math.abs(ratios[0]-ratios[1])<.02,'Synchronized scrolling');
      await p.locator('#mode').selectOption('difference');assert(await p.locator('#diff-pane').isVisible());
      await p.locator('#diff-current').evaluate(i=>i.decode());
    }
    await p.locator('#mode').selectOption('current'); assert(await p.locator('#current-pane').isVisible());assert(!(await p.locator('#before-pane').isVisible()));
    await p.locator('#note').fill('Dashboard test: review note');await p.locator('#decision').selectOption('approved');
    const downloadEvent=p.waitForEvent('download');await p.locator('#export').click();const download=await downloadEvent;
    const notes=JSON.parse(fs.readFileSync(await download.path(),'utf8'));
    assert.equal(notes.captures['work--700x1024--z100'].status,'approved');assert.equal(notes.captures['work--700x1024--z100'].note,'Dashboard test: review note');
    await p.reload();await p.locator('#route').selectOption('/work');await p.locator('#width').selectOption('700');await p.locator('#zoom').selectOption('100');
    assert.equal(await p.locator('#decision').inputValue(),'approved');assert.equal(await p.locator('#note').inputValue(),'Dashboard test: review note');
    notes.captures['work--700x1024--z100'].status='fixed';
    await p.locator('#import').setInputFiles({name:'notes.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(notes))});
    await p.waitForFunction(()=>document.getElementById('notice').textContent==='Review notes imported.');assert.equal(await p.locator('#decision').inputValue(),'fixed');
    await p.locator('#import').setInputFiles({name:'wrong.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify({...notes,version:'wrong'}))});
    await p.waitForFunction(()=>document.getElementById('notice').textContent.startsWith('Import failed:'));
    await p.locator('#width').selectOption('');await p.locator('#zoom').selectOption('');
    await p.locator('#queue .issue').filter({hasText:'Work cards show full artwork'}).click();
    assert.equal(await p.locator('#capture option').count(),38);
    await p.locator('#issue-decision').selectOption('approved');await p.locator('#queue-status').selectOption('approved');
    assert.equal(await p.locator('#queue .issue').count(),1);
    await p.locator('#capture-status').selectOption('approved');assert.equal(await p.locator('#capture option').count(),0);
    assert(await p.locator('#next').isDisabled());
    await p.locator('#capture-status').selectOption('');await p.locator('#width').selectOption('700');await p.locator('#mode').selectOption(baseline?'side':'current');
    await p.evaluate(()=>localStorage.clear());await p.reload();
    await p.locator('#queue .issue').filter({hasText:'Work cards show full artwork'}).click();await p.locator('#width').selectOption('700');
    await p.locator('#current').evaluate(i=>i.decode());if(baseline)await p.locator('#before').evaluate(i=>i.decode());
    await p.screenshot({path:path.join(root,'dashboard-preview.jpg'),fullPage:true,type:'jpeg',quality:85});
    await p.setViewportSize({width:390,height:844});
    assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Mobile dashboard overflow');
    assert.deepEqual(errors,[]);
    fs.writeFileSync(path.join(root,'validation.json'),JSON.stringify({checkedAt:new Date().toISOString(),captures:m.captures.length,baselinePairs:baseline?m.captures.length:0,warnings:warnings.length,dashboard:'passed',checks:['unique references','38 captures per route','full-page image dimensions','actual zoom CSS sizes','baseline files','page/width/zoom filters','synchronized scrolling','difference view','decisions and notes persist','export/import','invalid import rejection','issue decisions','empty filters','mobile dashboard'],sourceCommit:m.commit},null,2));
    console.log(`Validated ${m.captures.length} captures; ${warnings.length} warnings; dashboard interactions passed.`);
    if(warnings.length){console.error(warnings.map(c=>({id:c.id,issues:c.issues})));process.exitCode=1;}
  } finally {await browser.close();}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
