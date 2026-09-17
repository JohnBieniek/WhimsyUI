/* global REVIEW */
(() => {
  const $ = id => document.getElementById(id);
  const data = REVIEW;
  const statuses = ['pending', 'fixed', 'approved'];
  const key = `whimsy-review-${data.version}-${data.commit}`;
  let state = {captures: {}, issues: {}};
  try { const saved = JSON.parse(localStorage.getItem(key)); if (saved?.captures && saved?.issues) state = saved; } catch { /* A fresh review still works without storage. */ }
  let issue = null, selected = null, visible = [];
  const tell = text => { $('notice').textContent = text; };
  function save() { try { localStorage.setItem(key, JSON.stringify(state)); } catch { tell('Browser storage unavailable. Export notes before closing this page.'); } }
  const captureState = id => state.captures[id] || {status: 'pending', note: ''};
  const issueStatus = i => state.issues[i.id] || i.status;
  function option(select, value, text) { const o = document.createElement('option'); o.value = value; o.textContent = text; select.append(o); }
  function queue() {
    $('queue').replaceChildren();
    for (const i of data.issues) {
      const status = issueStatus(i);
      if ($('queue-status').value && $('queue-status').value !== status) continue;
      const button = document.createElement('button'); button.className = `issue${issue?.id === i.id ? ' active' : ''}`;
      const title = document.createElement('strong'); title.textContent = i.title;
      const detail = document.createElement('small'); detail.textContent = `${i.category} · ${i.routes.length} pages`;
      const badge = document.createElement('span'); badge.className = `badge ${status}`; badge.textContent = status;
      button.append(title, detail, badge); button.onclick = () => selectIssue(i); $('queue').append(button);
    }
  }
  function routes() {
    $('route').replaceChildren(); option($('route'), '', 'All relevant pages');
    for (const r of issue ? issue.routes : data.routes) option($('route'), r, r);
  }
  function selectIssue(i) {
    issue = i; selected = null;
    $('issue-title').textContent = i ? i.title : 'All captures';
    $('issue-detail').textContent = i ? i.detail : 'Choose a page and size. Each capture has its own decision and note.';
    $('issue-decision-label').hidden = !i;
    if (i) $('issue-decision').value = issueStatus(i);
    routes(); queue(); filter();
  }
  function filter() {
    visible = data.captures.filter(c => (!issue || issue.routes.includes(c.route)) && (!$('route').value || c.route === $('route').value) && (!$('width').value || c.width === Number($('width').value)) && (!$('zoom').value || c.zoom === Number($('zoom').value)) && (!$('capture-status').value || captureState(c.id).status === $('capture-status').value));
    $('capture').replaceChildren();
    for (const c of visible) option($('capture'), c.id, `${c.route} · ${c.width}×${c.height} · ${c.zoom}%`);
    if (!visible.some(c => c.id === selected)) selected = visible[0]?.id || null;
    if (selected) $('capture').value = selected;
    render();
  }
  const reference = c => `WHIMSY-SMOKE | ${data.commit.slice(0,7)} | ${c.route} | viewport=${c.width}x${c.height} | zoom=${c.zoom}% | css=${c.cssWidth}x${c.cssHeight} | capture=${c.id} | version=${data.version}`;
  function mode() {
    const value = $('mode').value, c = data.captures.find(c => c.id === selected);
    document.querySelector('.comparison').className = `comparison ${value}`;
    $('before-pane').hidden = value !== 'side' || !c?.before;
    $('current-pane').hidden = value === 'difference';
    $('diff-pane').hidden = value !== 'difference' || !c?.before;
    if (value === 'difference' && !c?.before) tell('No baseline image for this capture. Choose Current only.');
  }
  function render() {
    const c = visible.find(c => c.id === selected), index = visible.indexOf(c);
    $('count').textContent = c ? `${index + 1} / ${visible.length} matching captures` : 'No matching captures';
    $('previous').disabled = index <= 0; $('next').disabled = index < 0 || index >= visible.length - 1;
    for (const id of ['decision', 'note', 'copy']) $(id).disabled = !c;
    document.querySelector('.comparison').hidden = !c;
    $('full').hidden = !c; $('reference').textContent = c ? reference(c) : '';
    $('warnings').textContent = c?.issues.length ? `Automated warnings: ${c.issues.join(' · ')}` : c ? 'Automated capture checks passed. Visual approval is still pending unless you mark it approved.' : '';
    if (!c) { $('note').value = ''; return; }
    $('decision').value = captureState(c.id).status; $('note').value = captureState(c.id).note;
    $('current').src = $('diff-current').src = c.file;
    if (c.before) $('before').src = $('diff-before').src = c.before;
    else { $('before').removeAttribute('src'); $('diff-before').removeAttribute('src'); }
    $('full').href = c.file;
    $('before-label').textContent = `Before · v${data.baselineVersion} · ${c.width}×${c.height} at ${c.zoom}%`;
    $('current-label').textContent = `Current · v${data.version} · CSS ${c.cssWidth}×${c.cssHeight}`;
    $('before-scroll').scrollTop = $('current-scroll').scrollTop = 0; mode();
  }
  function move(delta) { const index = visible.findIndex(c => c.id === selected), next = visible[index + delta]; if (next) { selected = next.id; $('capture').value = selected; render(); } }
  $('build').textContent = `v${data.version} · source ${data.commit.slice(0,7)} · ${data.captures.length.toLocaleString()} captures · ${data.routes.length} pages · ${data.completedAt}`;
  for (const id of ['width', 'zoom']) { option($(id), '', id === 'width' ? 'All widths' : 'All zooms'); for (const n of [...new Set(data.captures.map(c => c[id]))].sort((a,b)=>a-b)) option($(id), String(n), id === 'zoom' ? `${n}%` : `${n}px`); }
  ['route', 'width', 'zoom', 'capture-status'].forEach(id => { $(id).onchange = filter; });
  $('queue-status').onchange = queue; $('all').onclick = () => selectIssue(null);
  $('capture').onchange = () => { selected = $('capture').value; render(); };
  $('previous').onclick = () => move(-1); $('next').onclick = () => move(1); $('mode').onchange = mode;
  $('decision').onchange = () => { state.captures[selected] = {...captureState(selected), status: $('decision').value}; save(); filter(); };
  $('note').oninput = () => { if (selected) { state.captures[selected] = {...captureState(selected), note: $('note').value}; save(); } };
  $('issue-decision').onchange = () => { if (issue) { state.issues[issue.id] = $('issue-decision').value; save(); queue(); tell('Issue decision saved. Individual captures keep their own decisions.'); } };
  $('copy').onclick = async () => { const c = data.captures.find(c => c.id === selected); if (!c) return; const text = reference(c) + (captureState(c.id).note ? '\n' + captureState(c.id).note : ''); try { await navigator.clipboard.writeText(text); tell('Reference and note copied.'); } catch { const input = document.createElement('textarea'); input.value = text; document.body.append(input); input.select(); const ok = document.execCommand('copy'); input.remove(); tell(ok ? 'Reference and note copied.' : 'Clipboard unavailable. Select and copy the reference shown above.'); } };
  let syncing = false;
  for (const [a,b] of [['before-scroll','current-scroll'],['current-scroll','before-scroll']]) $(a).onscroll = () => { if (syncing || !$('sync').checked) return; syncing = true; const ratio = $(a).scrollTop / Math.max(1, $(a).scrollHeight - $(a).clientHeight); $(b).scrollTop = ratio * ($(b).scrollHeight - $(b).clientHeight); requestAnimationFrame(() => { syncing = false; }); };
  $('export').onclick = () => { const url = URL.createObjectURL(new Blob([JSON.stringify({schema:1,version:data.version,commit:data.commit,exportedAt:new Date().toISOString(),...state},null,2)],{type:'application/json'})); const a = document.createElement('a'); a.href = url; a.download = `whimsy-review-${data.version}-notes.json`; a.click(); setTimeout(()=>URL.revokeObjectURL(url),1000); };
  $('import').onchange = async () => { try { const input = JSON.parse(await $('import').files[0].text()); if (input.schema !== 1 || input.version !== data.version || input.commit !== data.commit || !input.captures || !input.issues) throw Error('Notes must belong to this version and source commit.'); const next = {captures:{},issues:{}}; for (const [id,value] of Object.entries(input.captures)) { if (!data.captures.some(c=>c.id===id) || !statuses.includes(value.status) || typeof value.note !== 'string') throw Error('Invalid capture note.'); next.captures[id] = {status:value.status,note:value.note}; } for (const [id,value] of Object.entries(input.issues)) { if (!data.issues.some(i=>i.id===id) || !statuses.includes(value)) throw Error('Invalid issue decision.'); next.issues[id] = value; } state = next; save(); queue(); filter(); if (issue) $('issue-decision').value = issueStatus(issue); tell('Review notes imported.'); } catch (e) { tell(`Import failed: ${e.message}`); } $('import').value = ''; };
  document.addEventListener('keydown', e => { if (e.altKey && ['ArrowLeft','ArrowRight'].includes(e.key)) { e.preventDefault(); move(e.key === 'ArrowRight' ? 1 : -1); } });
  selectIssue(null);
})();
