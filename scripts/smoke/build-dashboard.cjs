const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(process.env.SMOKE_REVIEW_ROOT||'reports/smoke-review-work');
const data=JSON.parse(fs.readFileSync(path.join(root,'manifest.json'),'utf8'));
if(!data.completedAt||data.captures.length!==data.routes.length*38)throw Error('Incomplete captures');
let html=fs.readFileSync(path.join(__dirname,'dashboard.html'),'utf8');
for(const [token,value] of [['/* STYLE */',fs.readFileSync(path.join(__dirname,'dashboard.css'),'utf8')],['/* DATA */','window.REVIEW = '+JSON.stringify(data).replaceAll('<','\\u003c')+';'],['/* SCRIPT */',fs.readFileSync(path.join(__dirname,'dashboard.js'),'utf8')]])html=html.replace(token,()=>value);
fs.writeFileSync(path.join(root,'index.html'),html);
fs.writeFileSync(path.join(root,'README.txt'),'Open index.html in Chrome or Edge. Work and its linked pages only. No server required.\nChoose a page, then step through screen sizes. Alt+Left/Right changes size; Alt+Up/Down changes page.\nApprove & next or flag a capture and add a note. Notes save locally; export them to share or back up.\nKeep images/ beside index.html. Captures include local changes and are identified by their build fingerprint.\n');
console.log('Built '+data.captures.length+' capture Work review: '+path.join(root,'index.html'));
