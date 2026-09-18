/* global REVIEW */
(()=>{
const $=id=>document.getElementById(id),data=REVIEW,statuses=['pending','flagged','approved'];
const key='whimsy-work-review-'+data.sourceTree;let saved={captures:{},selected:null};
try{const s=JSON.parse(localStorage.getItem(key));if(s?.captures)saved=s;}catch{}
let selected=saved.selected&&data.captures.find(c=>c.id===saved.selected)||data.captures[0],route=selected.route,visible=[];
const title=r=>r==='/work'?'Work overview':r.split('/').pop().split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ');
const status=c=>saved.captures[c.id]?.status||'pending';
const note=c=>saved.captures[c.id]?.note||'';
const tell=s=>$('notice').textContent=s;
function save(){saved.selected=selected?.id;try{localStorage.setItem(key,JSON.stringify(saved));}catch{tell('Storage unavailable. Export notes before closing.');}}
function pages(){$('pages').replaceChildren();for(const r of data.routes){if(!title(r).toLowerCase().includes($('search').value.toLowerCase()))continue;const cs=data.captures.filter(c=>c.route===r),button=document.createElement('button');button.className=r===route?'active':'';button.setAttribute('aria-pressed',String(r===route));const name=document.createElement('span'),small=document.createElement('small');name.textContent=title(r);small.textContent=cs.filter(c=>status(c)==='approved').length+'/'+cs.length+' approved; '+cs.filter(c=>status(c)==='flagged').length+' flagged';button.append(name,small);button.onclick=()=>changePage(r);$('pages').append(button);}$('progress').textContent=data.captures.filter(c=>status(c)==='approved').length+'/'+data.captures.length+' approved';}
const matches=c=>{const g=$('group').value;return(g==='all'||g==='zoom'&&c.zoom!==100||g==='phone'&&c.zoom===100&&c.width<700||g==='tablet'&&c.zoom===100&&c.width>=700&&c.width<=1100||g==='desktop'&&c.zoom===100&&c.width>1100)&&(!$('filter').value||status(c)===$('filter').value);};
function refresh(){visible=data.captures.filter(c=>c.route===route&&matches(c));if(!visible.some(c=>c.id===selected?.id))selected=visible[0]||null;pages();render(false);}
function changePage(r){const prior=selected;route=r;selected=data.captures.find(c=>c.route===r&&c.width===prior?.width&&c.zoom===prior?.zoom)||null;refresh();$('viewer').scrollTop=0;}
function reference(c){return 'WHIMSY-SMOKE | '+data.commit.slice(0,7)+(data.localChanges?'+local':'')+' | '+c.route+' | viewport='+c.width+'x'+c.height+' | zoom='+c.zoom+'% | css='+c.cssWidth+'x'+c.cssHeight+' | capture='+c.id+' | version='+data.version+' | build='+data.sourceTree.slice(0,12);}
function render(keep=true){const viewer=$('viewer'),ratio=keep&&$('keep-scroll').checked?viewer.scrollTop/Math.max(1,viewer.scrollHeight-viewer.clientHeight):0;
$('page-title').textContent=title(route);$('previous-page').disabled=data.routes.indexOf(route)===0;$('next-page').disabled=data.routes.indexOf(route)===data.routes.length-1;
$('sizes').replaceChildren();for(const c of visible){const b=document.createElement('button');b.className=status(c)+(c===selected?' active':'');b.textContent=c.width+' x '+c.height+(c.zoom===100?'':' / '+c.zoom+'%');b.title='CSS '+c.cssWidth+' x '+c.cssHeight+'; '+status(c);b.setAttribute('aria-pressed',String(c===selected));b.onclick=()=>{selected=c;render();};$('sizes').append(b);}
const i=visible.indexOf(selected);$('count').textContent=selected?(i+1)+' / '+visible.length:'No matching captures';$('previous').disabled=i<=0;$('next').disabled=i<0||i===visible.length-1;
for(const id of ['approve','flag','decision','note','copy'])$(id).disabled=!selected;
viewer.hidden=!selected;$('full').hidden=!selected;
if(!selected){$('reference').textContent='';$('note').value='';$('warnings').textContent='';return;}
const c=selected;$('decision').value=status(c);$('note').value=note(c);$('reference').textContent=reference(c);$('full').href=c.file;$('warnings').textContent=c.issues.length?'Capture warnings: '+c.issues.join('; '):'';
$('current').alt=title(route)+' at '+c.width+' pixels and '+c.zoom+'% zoom';
$('current').onload=()=>{viewer.scrollTop=ratio*(viewer.scrollHeight-viewer.clientHeight);};
$('current').src=c.file;save();
$('sizes .active')?.scrollIntoView({block:'nearest',inline:'nearest'});
}
function move(delta){const next=visible[visible.indexOf(selected)+delta];if(next){selected=next;render();}}
function decision(value){if(!selected)return;saved.captures[selected.id]={status:value,note:note(selected)};save();pages();}
$('previous').onclick=()=>move(-1);$('next').onclick=()=>move(1);
$('previous-page').onclick=()=>changePage(data.routes[data.routes.indexOf(route)-1]);$('next-page').onclick=()=>changePage(data.routes[data.routes.indexOf(route)+1]);
$('group').onchange=refresh;$('filter').onchange=refresh;$('search').oninput=pages;
$('scale').onchange=()=>$('viewer').classList.toggle('actual',$('scale').value==='actual');
$('decision').onchange=()=>{decision($('decision').value);refresh();};
$('approve').onclick=()=>{const next=visible[visible.indexOf(selected)+1];decision('approved');if(next){selected=next;refresh();}else{refresh();tell('Last matching size on this page reviewed. Choose the next page.');}};
$('flag').onclick=()=>{decision('flagged');render();$('notes').open=true;$('note').focus();};
$('note').oninput=()=>{if(selected){saved.captures[selected.id]={status:status(selected),note:$('note').value};save();}};
$('copy').onclick=async()=>{if(!selected)return;const text=reference(selected)+(note(selected)?'\n'+note(selected):'');try{await navigator.clipboard.writeText(text);tell('Reference and note copied.');}catch{const input=document.createElement('textarea');input.value=text;document.body.append(input);input.select();const ok=document.execCommand('copy');input.remove();tell(ok?'Reference and note copied.':'Copy the reference and note shown above.');}};
$('export').onclick=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify({schema:2,sourceTree:data.sourceTree,version:data.version,captures:saved.captures},null,2)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='whimsy-work-review-notes.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('import').onchange=async()=>{try{const input=JSON.parse(await $('import').files[0].text());if(input.schema!==2||input.sourceTree!==data.sourceTree||!input.captures)throw Error('Notes must match this captured build.');const next={};for(const[id,value]of Object.entries(input.captures)){if(!data.captures.some(c=>c.id===id)||!statuses.includes(value.status)||typeof value.note!=='string')throw Error('Invalid capture note.');next[id]={status:value.status,note:value.note};}saved.captures=next;save();refresh();tell('Review notes imported.');}catch(e){tell('Import failed: '+e.message);}$('import').value='';};
document.addEventListener('keydown',e=>{if(!e.altKey)return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowRight'?1:-1);}if(e.key==='ArrowUp'||e.key==='ArrowDown'){e.preventDefault();const r=data.routes[data.routes.indexOf(route)+(e.key==='ArrowDown'?1:-1)];if(r)changePage(r);}});
$('build').textContent='v'+data.version+' | '+data.commit.slice(0,7)+(data.localChanges?' + local changes':'')+' | build '+data.sourceTree.slice(0,12)+' | '+data.routes.length+' pages / '+data.captures.length+' captures';
refresh();
})();
