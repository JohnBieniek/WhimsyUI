const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const {spawn} = require('node:child_process');
const root = path.resolve('out');
const output = path.resolve(process.env.SMOKE_REVIEW_ROOT || `reports/smoke-review-${require('../../package.json').version}`);
const types = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json','.woff2':'font/woff2','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.ico':'image/x-icon','.txt':'text/plain','.mp4':'video/mp4'};
if (!fs.existsSync(path.join(root,'index.html'))) throw Error('Run npm run build before the smoke test.');
const server = http.createServer((req,res)=>{
  let name;
  try { name=decodeURIComponent(new URL(req.url,'http://localhost').pathname); } catch { res.writeHead(400); return res.end(); }
  let file=path.resolve(root,'.'+(name==='/'?'/index.html':name));
  if (!file.startsWith(root+path.sep)) { res.writeHead(403); return res.end(); }
  if (!path.extname(file)&&fs.existsSync(file+'.html')) file+='.html';
  if (fs.existsSync(file)&&fs.statSync(file).isDirectory()) file=path.join(file,'index.html');
  if (!fs.existsSync(file)) {res.writeHead(404);return res.end();}
  res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});fs.createReadStream(file).pipe(res);
});
const child = (file,env) => new Promise((resolve,reject)=>{const p=spawn(process.execPath,[path.join(__dirname,file)],{stdio:'inherit',env});p.on('error',reject);p.on('exit',code=>code===0?resolve():reject(Error(`${file} exited ${code}`)));});
server.listen(0,'127.0.0.1',async()=>{
  const env={...process.env,SMOKE_REVIEW_ROOT:output,SMOKE_BASE_URL:`http://127.0.0.1:${server.address().port}`};
  try {await child('capture.cjs',env);await child('build-dashboard.cjs',env);await child('check.cjs',env);} catch(e){console.error(e);process.exitCode=1;}finally{server.close();}
});
