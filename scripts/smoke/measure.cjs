module.exports = () => {
  function heading(el, index) {
    const b=el.getBoundingClientRect(),cs=getComputedStyle(el);
    const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT); let node; const rows=[];
    while(node=walker.nextNode())for(let i=0;i<node.textContent.length;i++){
      const r=document.createRange();r.setStart(node,i);r.setEnd(node,i+1);const rc=r.getBoundingClientRect();
      if(!rc.width||!rc.height)continue;
      let row=rows.find(x=>Math.abs(x.top-rc.top)<3);
      if(!row){row={top:rc.top,text:'',left:rc.left,right:rc.right};rows.push(row);}
      row.text+=node.textContent[i];row.left=Math.min(row.left,rc.left);row.right=Math.max(row.right,rc.right);
    }
    return {index,tag:el.tagName,text:el.textContent.trim(),class:el.className,id:el.id,x:b.x,y:b.y+scrollY,width:b.width,height:b.height,size:parseFloat(cs.fontSize),lineHeight:cs.lineHeight,lines:rows.sort((a,b)=>a.top-b.top).map(x=>x.text.trim()),overflow:Math.max(0,...rows.map(r=>Math.max(r.right-b.right,b.left-r.left))),parentClass:el.parentElement.className};
  }
  const headings=[...document.querySelectorAll('h1,h2,h3,h4,.kicker')].filter(e=>e.getBoundingClientRect().height>0).map(heading);
  const spills=[...document.querySelectorAll('main *, .site-header *')].filter(e=>{
    if(e.closest('svg')||['IMG','VIDEO','SVG','INPUT'].includes(e.tagName))return false;
    const r=e.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+2||r.left < -2);
  }).map(e=>({tag:e.tagName,class:e.className,text:e.textContent.slice(0,80),x:e.getBoundingClientRect().x,width:e.getBoundingClientRect().width}));
  return {width:innerWidth,height:innerHeight,dpr:devicePixelRatio,scale:visualViewport.scale,pageWidth:document.documentElement.scrollWidth,pageHeight:document.documentElement.scrollHeight,headings,spills,brokenImages:[...document.images].filter(i=>!i.naturalWidth).map(i=>i.src),links:[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href'))};
};
