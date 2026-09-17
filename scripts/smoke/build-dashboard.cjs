const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(process.env.SMOKE_REVIEW_ROOT || `reports/smoke-review-${require('../../package.json').version}`);
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
if (!manifest.completedAt || manifest.captures.length !== manifest.routes.length * 38) throw Error('Smoke captures are incomplete');
const baselineRoot = process.env.SMOKE_BASELINE_ROOT ? path.resolve(process.env.SMOKE_BASELINE_ROOT) : path.join(root, 'baseline');
let baseline = null;
if (fs.existsSync(path.join(baselineRoot, 'manifest.json'))) {
  baseline = JSON.parse(fs.readFileSync(path.join(baselineRoot, 'manifest.json'), 'utf8'));
  const destination = path.join(root, 'baseline');
  fs.mkdirSync(path.join(destination, 'images'), {recursive:true});
  if (baselineRoot !== destination) {
    fs.copyFileSync(path.join(baselineRoot, 'manifest.json'), path.join(destination, 'manifest.json'));
    for (const c of baseline.captures) {
      const source = path.resolve(baselineRoot, c.file), target = path.resolve(destination, c.file);
      if (!source.startsWith(baselineRoot + path.sep) || !target.startsWith(destination + path.sep)) throw Error('Unsafe baseline path');
      if (!fs.existsSync(target)) { try { fs.linkSync(source, target); } catch { fs.copyFileSync(source, target); } }
    }
  }
}
const services = manifest.routes.filter(r => r.startsWith('/services/'));
const sites = ['/services/single-page-website','/services/five-page-website','/services/website-transfer'];
const groups = [
  ['home-dots','Home decorative dots','Decoration',['/'],'Check that all purple dot rows remain visible at the reported widths and zooms.'],
  ['about-headings','About headings and giving-back cards','Heading wrapping',['/about'],'Review the mobile story title, full-width headings, and centered giving-back labels when they wrap.'],
  ['navigation','Navigation fits narrow screens','Navigation',manifest.routes,'Check the navigation at 320px. Services shortens where needed and all links remain on one row.'],
  ['contact-photo','Contact portrait alignment','Image placement',['/contact'],'The portrait should be centered when it occupies its own row.'],
  ['services-collage','Services collage and pricing spacing','Spacing',['/services'],'Check vertical alignment and clearance from navigation and price cards.'],
  ['stacked-copy','Stacked introductions use full width','Text width',['/about','/contact','/services',...services],'Text should fill its column when the accompanying hero or collage stacks below.'],
  ['stacked-headings','Standalone service headings use their row','Heading wrapping',services,'Headings above cards should wrap naturally using the available width. Review the specific mobile line-count changes too.'],
  ['standard-prices','Standard prices stay on one line','Heading wrapping',services.filter(r=>!r.endsWith('/photography')),'The complete standard-price label should stay on one line, scaling only when needed.'],
  ['consultation','Consultation headings and buttons','Heading wrapping',services,'Check next-step headings and button placement, especially tablet widths and zoomed layouts.'],
  ['brand-mobile','Brand plan mobile headings','Heading wrapping',['/services/brand-advertising-plan'],'Review the title, identity, channel mix, brand guide, Google Business Profile, and website/email headings.'],
  ['cms','CMS headings and publishing step','Heading wrapping',sites,'Check Easy updates, the two-line CMS title, and the shorter publish-step wording on narrow phones.'],
  ['five-page-images','Five-page website mobile images','Image placement',['/services/five-page-website'],'Homepage screenshot should appear above the character sheet on mobile; Built for real use should fit one line.'],
  ['photography','Photography mobile headings','Heading wrapping',['/services/photography'],'Review price, tagline, coverage title, business photos, and shoot-planning label at 320px.'],
  ['transfer','Transfer hero and handoff headings','Images and headings',['/services/website-transfer'],'The full We move it artwork must remain visible. Check remaining-cost and handoff heading wraps.'],
  ['work-headings','Work titles and filter chips','Heading wrapping',['/work'],'Titles should use the available row without forced breaks; wrapped filter rows should be centered on smaller screens.'],
  ['work-images','Work cards show full artwork','Image cropping',['/work'],'All artwork should be visible, including top and bottom content. Contained images may leave space around them.'],
];
const issues = groups.map(([id,title,category,routes,detail])=>({id,title,category,routes,detail,status:'fixed'}));
for (const route of manifest.routes) {
  const flagged = manifest.captures.filter(c=>c.route===route && c.issues.length);
  if (flagged.length) issues.unshift({id:`warning-${route.replaceAll('/','-')}`,title:`Capture warnings: ${route}`,category:'Automated warning',routes:[route],detail:`${flagged.length} captures need investigation. Warnings are displayed with each capture.`,status:'pending'});
}
const baselineById = new Map((baseline?.captures || []).map(c=>[c.id,c]));
const data = {...manifest, baselineVersion:baseline?.version || 'unavailable', issues, captures:manifest.captures.map(c=>({...c,before:baselineById.has(c.id)?`baseline/${baselineById.get(c.id).file}`:null}))};
let html = fs.readFileSync(path.join(__dirname, 'dashboard.html'), 'utf8');
html = html.replace('/* STYLE */',()=>fs.readFileSync(path.join(__dirname,'dashboard.css'),'utf8'))
  .replace('/* DATA */',()=>`window.REVIEW = ${JSON.stringify(data).replaceAll('<','\\u003c')};`)
  .replace('/* SCRIPT */',()=>fs.readFileSync(path.join(__dirname,'dashboard.js'),'utf8'));
fs.writeFileSync(path.join(root,'index.html'),html);
fs.writeFileSync(path.join(root,'README.txt'),`Whimsy visual review v${manifest.version}\nSource commit: ${manifest.commit}\n\nOpen index.html in Chrome or Edge. No server is required.\n${manifest.captures.length} current captures across ${manifest.routes.length} pages. Baseline: ${baseline?.version || 'none'}.\n\nUse the issue queue to inspect a change across viewport sizes. Capture and issue decisions are separate. Fixed means ready for human review, not approved.\nBefore/current panes support synchronized scrolling. Difference mode aligns images at the top; reflow can create large differences.\nNotes and decisions stay in browser storage. Export notes to back them up or share them. Imports must match this version and source commit.\nAlt+Left / Alt+Right select adjacent captures.\n\nKeep images/ and baseline/ beside index.html. The baseline is retained here so the old review folder can be deleted.\n`);
console.log(`Built ${path.join(root,'index.html')} with ${issues.length} issue groups and ${data.captures.filter(c=>c.before).length} baseline pairs.`);
