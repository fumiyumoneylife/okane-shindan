const $app = document.getElementById('app');
const STORAGE_KEY = 'fumiyu_lab_money_check_v1';
const IMG = 'assets/images/';

const chapters = [
  { id:'know', title:'お金を知る習慣', img:'know.png', color:'#64c8bb', message:'お金の流れを知ることが、すべてのスタートです。' },
  { id:'protect', title:'お金を守る習慣', img:'protect.png', color:'#ff7773', message:'もしもの時に備えて、自分や大切な人を守ろう。' },
  { id:'organize', title:'お金を整える習慣', img:'organize.png', color:'#f3bd3f', message:'ムダを見つけて、スッキリ家計を整えていこう。' },
  { id:'grow', title:'お金を育てる習慣', img:'grow.png', color:'#9b82d9', message:'将来の安心のために、お金を育てていこう。' },
  { id:'learn', title:'お金を学ぶ習慣', img:'learn.png', color:'#55aee8', message:'知識は一生の財産。学ぶことで未来が変わる！' },
  { id:'action', title:'お金を行動に変える習慣', img:'action.png', color:'#72be64', message:'小さな行動の積み重ねが、大きな未来をつくります。' },
];

const questions = [
{q:'この半年で、毎月のお金の流れを確認しましたか？', a:['ほとんど確認していない','たまに確認した','毎月確認した','毎月確認して、見直しもした']},
{q:'この半年で、口座残高や財布の残高を確認する習慣はありましたか？', a:['必要な時だけ確認した','月に1回くらい確認した','週に1回くらい確認した','数日に1回以上確認した']},
{q:'この半年で、お金の使い方を振り返りましたか？', a:['振り返っていない','1〜2回だけ振り返った','月に1回くらい振り返った','定期的に振り返った']},
{q:'この半年で、毎月使えるお金の目安を決めていましたか？', a:['決めていない','なんとなく決めていた','毎月ある程度決めていた','毎月決めて、必要に応じて調整した']},
{q:'この半年で、お金のことで気になったことを調べましたか？', a:['ほとんど調べていない','1〜2回調べた','月に1回以上調べた','気になった時にすぐ調べた']},
{q:'この半年で、急な出費に備えたお金を確認しましたか？', a:['確認していない','少しだけ確認した','ある程度確認した','必要な金額まで意識して確認した']},
{q:'この半年で、固定費を見直しましたか？', a:['見直していない','1つだけ確認した','複数確認した','見直して、実際に改善した']},
{q:'この半年で、保険や保障内容を確認しましたか？', a:['確認していない','少しだけ確認した','必要な内容を確認した','今の生活に合っているか見直した']},
{q:'この半年で、災害・病気・収入減など「もしも」の備えを考えましたか？', a:['考えていない','少しだけ考えた','必要な備えを確認した','実際に備えを整えた']},
{q:'この半年で、大きな買い物をする前に比較・検討しましたか？', a:['勢いで決めることが多かった','少しだけ比較した','いくつか比較して決めた','予算や必要性まで考えて決めた']},
{q:'この半年で、家計を良くするために行動しましたか？', a:['特にしていない','1つだけ行動した','いくつか行動した','継続して取り組んでいる']},
{q:'この半年で、不要な支出を減らそうとしましたか？', a:['特に意識していない','少し意識した','実際に少し減らした','定期的に見直している']},
{q:'この半年で、お金を使う前に「本当に必要かな？」と考えましたか？', a:['ほとんど考えていない','たまに考えた','よく考えた','習慣になっている']},
{q:'この半年で、買い物後に「もっと良い選び方があったかな？」と振り返りましたか？', a:['振り返っていない','たまに振り返った','よく振り返った','次の買い物に活かした']},
{q:'この半年で、家計や貯金に関する目標を立てましたか？', a:['立てていない','なんとなく考えた','目標を決めた','目標を決めて、進み具合も確認した']},
{q:'この半年で、将来のお金について考える時間はありましたか？', a:['ほとんどなかった','1〜2回あった','月に1回くらいあった','定期的に考えている']},
{q:'この半年で、資産づくりについて考えたり調べたりしましたか？', a:['ほとんどしていない','少しだけ興味を持った','いくつか調べた','自分に合う方法を考えた']},
{q:'この半年で、積立や貯金など将来のためのお金を準備しましたか？', a:['していない','できる時だけした','毎月少しずつした','自動化や仕組み化をして続けた']},
{q:'この半年で、資産づくりのリスクについて確認しましたか？', a:['確認していない','少しだけ見た','自分なりに調べた','リスクを理解したうえで判断した']},
{q:'この半年で、今あるお金をどんな目的で使うか考えましたか？', a:['あまり考えていない','なんとなく考えた','目的ごとに分けて考えた','目的に合わせて置き場所や使い方も考えた']},
{q:'この半年で、お金について学ぶ時間を作りましたか？', a:['ほとんどなかった','気になった時だけあった','月に数回あった','毎週のようにあった']},
{q:'この半年で、お金の情報を見たあとに、内容を確認しましたか？', a:['見るだけで終わった','保存した','自分でも調べた','複数の情報を比べて確認した']},
{q:'この半年で、分からないお金の言葉を調べましたか？', a:['ほとんど調べていない','気になったものだけ調べた','できるだけ調べた','理解できるまで確認した']},
{q:'この半年で、お金のことを家族や身近な人と話しましたか？', a:['ほとんど話していない','1〜2回話した','時々話した','今後のことも含めて話した']},
{q:'この半年で、学んだことを見返しましたか？', a:['ほとんど見返していない','保存だけしている','時々見返した','実践しながら見返した']},
{q:'この半年で、お金について新しく始めたことはありますか？', a:['特にない','1つだけある','2〜3個ある','始めたことを続けている']},
{q:'この半年で、学んだことを実際に行動へ移しましたか？', a:['ほとんどない','1回だけある','数回ある','習慣として続けている']},
{q:'この半年で、「あとでやろう」と思ったお金のことを実行しましたか？', a:['ほとんど実行していない','少しだけ実行した','半分くらい実行した','ほとんど実行した']},
{q:'この半年で、お金のために使った時間は増えましたか？', a:['増えていない','少し増えた','明らかに増えた','継続的に時間を取れるようになった']},
{q:'半年後、この診断をもう一度受けるとしたら、一番近い気持ちは？', a:['あまり変わらないと思う','少し変わっていたらいい','今より良くなっていたい','目標を決めて変えていきたい']},
];

let state = loadState() || { screen:'home', index:0, answers:Array(30).fill(null), missions:[false,false,false,false] };

function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function loadState(){ try{return JSON.parse(localStorage.getItem(STORAGE_KEY));}catch(e){return null;} }
function clearState(){ localStorage.removeItem(STORAGE_KEY); state={screen:'home',index:0,answers:Array(30).fill(null),missions:[false,false,false,false]}; renderHome(); }
function chapterIndex(i){ return Math.floor(i/5); }
function scoreValue(answerIndex){ return answerIndex + 1; }
function escapeHTML(str){ return String(str).replace(/[&<>"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s])); }

function render(){
  if(state.screen === 'quiz') return renderQuiz();
  if(state.screen === 'loading') return renderLoading();
  if(state.screen === 'result') return renderResult();
  if(state.screen === 'benefit') return renderBenefit();
  return renderHome();
}

function renderHome(){
  const hasProgress = state.answers.some(v=>v!==null);
  $app.innerHTML = `<section class="screen hero">
    <div class="topbar"><div class="brand">fumiyu_moneylife <span class="heart">♡</span></div><button class="pill-link" data-action="benefit">🔒 特典ページへ</button></div>
    <div class="eyebrow">3分でわかる！</div>
    <h1 class="title"><span class="mint">お金の</span>健康診断</h1>
    <div class="subtitle">あなたのお金の<span style="color:var(--coral)">現在地</span>がわかります</div><hr class="dash" />
    <div class="hero-mid"><div class="bubble">一緒に<br><span class="coral">お金の体力</span><br>を<br>チェックしよう！</div><img class="char hero-char" src="${IMG}home.png" alt="ふみゆキャラクター"></div>
    <div class="feature-card"><div class="feature-title">✨ 6つの章でチェック！ ✨</div><div class="powers">
      <div class="power"><div class="icon">🔍</div>知る習慣</div><div class="power"><div class="icon">🛡</div>守る習慣</div><div class="power"><div class="icon">👛</div>整える習慣</div><div class="power"><div class="icon">🌱</div>育てる習慣</div><div class="power"><div class="icon">📘</div>学ぶ習慣</div>
    </div></div>
    <div class="mini-info"><div class="mini">🕒 約3分で完了！</div><div class="mini">📋 全30問で診断！</div></div>
    <button class="primary-btn breath" data-action="start">${hasProgress?'続きから診断する':'診断をはじめる'}　→</button>
    ${hasProgress?'<button class="ghost-btn" style="width:100%;margin-top:10px" data-action="reset">最初からやり直す</button>':''}
    <p class="caption">気軽にサクッとチェックしてみよう！</p>
  </section>`;
}

function renderQuiz(){
  const i = state.index; const ch = chapters[chapterIndex(i)]; const q = questions[i]; const answered = state.answers[i];
  const pct = Math.round((state.answers.filter(v=>v!==null).length / questions.length) * 100);
  $app.innerHTML = `<section class="screen">
    <div class="screen-head"><button class="back-btn" data-action="home">← 戻る</button><div class="lab-title"><span style="color:var(--mint)">ふみゆラボ</span><br>お金の健康診断</div><button class="top-btn" data-action="home">⌂ トップ</button></div>
    <div class="progress-card card"><div class="progress-label">診断の進み具合</div><div style="text-align:center"><span class="percent">${pct}%</span></div><div class="track"><div class="bar" style="width:${pct}%"></div></div><div class="qcount">${i+1} / 30 問中</div></div>
    <div class="question-card card">
      <div class="chapter" style="color:${ch.color}">第${chapterIndex(i)+1}章　${ch.title}</div>
      <div class="question-row"><div class="q-badge" style="color:${ch.color};border-color:${ch.color}">Q${i+1}</div><div class="qtext">${escapeHTML(q.q)}</div></div>
      <img class="char quiz-char" src="${IMG}${ch.img}" alt="${ch.title}のキャラクター">
      <div class="options">${q.a.map((txt,idx)=>`<button class="option ${answered===idx?'selected':''}" data-answer="${idx}"><span class="radio"></span><span><b>${String.fromCharCode(65+idx)}.</b> ${escapeHTML(txt)}</span></button>`).join('')}</div>
      <div class="advice">💡 ${escapeHTML(ch.message)}<br>正解・不正解はありません。いちばん近いものを選んでくださいね。</div>
      <div class="nav-row"><button class="ghost-btn" data-action="prev" ${i===0?'disabled':''}>← 前へ</button><button class="primary-btn" data-action="next">${i===29?'結果を見る':'次の質問へ'}　→</button></div>
      <div class="dots">${questions.map((_,idx)=>`<span class="dot ${idx===i?'now':''}">${idx+1}</span>`).join('')}</div>
    </div>
    <div class="save-row">☁ 自動保存中　途中で閉じても続きから再開できます</div>
  </section>`;
}

function renderLoading(){
  $app.innerHTML = `<section class="screen loading"><div><img class="char" src="${IMG}result.png" alt="診断完了"><h2>お疲れさまでした！</h2><p>診断結果を作成しています…</p><div class="track" style="width:260px;margin:20px auto"><div class="bar" style="width:100%"></div></div></div></section>`;
  setTimeout(()=>{ state.screen='result'; saveState(); renderResult(); launchConfetti(); }, 1600);
}

function getScores(){
  const chapterScores = chapters.map((_,ci)=>{
    const vals = state.answers.slice(ci*5, ci*5+5).map(v => v===null ? 1 : scoreValue(v));
    const total = vals.reduce((a,b)=>a+b,0);
    return Math.round((total / 20) * 100);
  });
  const avg = Math.round(chapterScores.reduce((a,b)=>a+b,0)/chapterScores.length);
  return { chapterScores, avg };
}
function getRank(score){ if(score>=90)return 'S'; if(score>=78)return 'A'; if(score>=62)return 'B'; if(score>=46)return 'C'; return 'D'; }
function getType(scores){
  const max = Math.max(...scores.chapterScores); const idx = scores.chapterScores.indexOf(max);
  const names=['見える化スタートタイプ','もしも備えタイプ','家計すっきりタイプ','コツコツ成長タイプ','学び上手タイプ','行動で変えるタイプ'];
  return { idx, name:names[idx], chapter:chapters[idx] };
}

function renderResult(){
  const scores = getScores(); const rank = getRank(scores.avg); const type = getType(scores);
  $app.innerHTML = `<section class="screen">
    <div class="screen-head"><button class="back-btn" data-action="home">← トップ</button><div class="lab-title"><span style="color:var(--mint)">ふみゆラボ</span><br>診断結果</div><button class="top-btn" data-action="reset">リセット</button></div>
    <div class="result-card card">
      <h2>✨ 診断お疲れさまでした ✨</h2><img class="char" style="height:190px" src="${IMG}result.png" alt="診断完了">
      <p>あなたのタイプは…</p><h1 style="color:var(--coral);font-size:34px">${type.name}</h1>
      <div class="rank">${rank}</div><div class="score">健康度 ${scores.avg}点</div>
      <div class="chart-wrap"><canvas id="radar" width="320" height="260"></canvas></div>
      <div class="result-grid">
        <div class="result-box"><h3>あなたの強み</h3><p>一番高かったのは「${type.chapter.title}」。今の生活の中に、すでに良い習慣が育っています。</p></div>
        <div class="result-box"><h3>伸びしろ</h3><p>低めの項目は、責めるところではなく「次に整える場所」です。小さく1つだけ始めましょう。</p></div>
        <div class="result-box"><h3>半年後のあなたへ</h3><p>今日の一歩が、半年後の未来を変えます。完璧より、続けられる形を大切にしてください。</p></div>
      </div>
      <button class="primary-btn" style="margin-top:16px" data-action="save-image">📸 診断結果を画像で保存</button>
      <button class="ghost-btn" style="width:100%;margin-top:10px" data-action="mission">今日からのミッションへ</button>
    </div>
    <div id="shareCard" class="share-card"><div class="share-inner"><div class="share-title">ふみゆラボ<br>お金の健康診断</div><img class="share-img" src="${IMG}result.png"><div>あなたのタイプ</div><div class="share-type">${type.name}</div><div class="share-score">${scores.avg}点 / ${rank}ランク</div><div class="share-lines"><p>家計力　${scores.chapterScores[0]}点</p><p>守る力　${scores.chapterScores[1]}点</p><p>整える力　${scores.chapterScores[2]}点</p><p>育てる力　${scores.chapterScores[3]}点</p><p>学ぶ力　${scores.chapterScores[4]}点</p><p>行動力　${scores.chapterScores[5]}点</p></div><p style="font-size:34px;margin-top:60px">今日の一歩が、半年後の未来を変える。</p><p style="font-size:30px">by fumiyu_moneylife</p></div></div>
  </section>`;
  drawRadar(scores.chapterScores);
}

function drawRadar(vals){
  const c=document.getElementById('radar'); if(!c)return; const ctx=c.getContext('2d'); const cx=160, cy=132, r=92;
  ctx.clearRect(0,0,c.width,c.height); const labels=['知る','守る','整える','育てる','学ぶ','行動'];
  ctx.strokeStyle='#bde9df'; ctx.fillStyle='#f3fffb';
  for(let level=1; level<=5; level++){ const rr=r*level/5; ctx.beginPath(); for(let i=0;i<6;i++){const a=-Math.PI/2+i*2*Math.PI/6; const x=cx+Math.cos(a)*rr, y=cy+Math.sin(a)*rr; i?ctx.lineTo(x,y):ctx.moveTo(x,y);} ctx.closePath(); ctx.stroke(); }
  ctx.strokeStyle='#e8ded5'; for(let i=0;i<6;i++){const a=-Math.PI/2+i*2*Math.PI/6; ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r); ctx.stroke();}
  ctx.beginPath(); vals.forEach((v,i)=>{const a=-Math.PI/2+i*2*Math.PI/6; const rr=r*v/100; const x=cx+Math.cos(a)*rr, y=cy+Math.sin(a)*rr; i?ctx.lineTo(x,y):ctx.moveTo(x,y);}); ctx.closePath(); ctx.fillStyle='rgba(100,200,187,.35)'; ctx.fill(); ctx.strokeStyle='#28a99c'; ctx.lineWidth=3; ctx.stroke();
  ctx.fillStyle='#4d3028'; ctx.font='bold 13px sans-serif'; ctx.textAlign='center'; labels.forEach((lab,i)=>{const a=-Math.PI/2+i*2*Math.PI/6; const x=cx+Math.cos(a)*(r+28), y=cy+Math.sin(a)*(r+24); ctx.fillText(`${lab} ${vals[i]}`,x,y);});
}

function renderMission(){
  const done = state.missions.filter(Boolean).length; const pct = done*25;
  $app.innerHTML = `<section class="screen"><div class="screen-head"><button class="back-btn" data-action="result">← 結果</button><div class="lab-title"><span style="color:var(--mint)">ふみゆラボ</span><br>ミッション</div><button class="top-btn" data-action="home">トップ</button></div>
  <div class="card result-card"><img class="char" style="height:180px" src="${IMG}letsgo.png" alt="ミッション"><h2>今日からできるミッション</h2><p>まずはここから。できたものにチェックしてね。</p><div class="mission-meter"><span style="width:${pct}%"></span></div><strong>達成率 ${pct}%</strong><div class="mission-list">
  ${['家計簿を3日つける','固定費を1つ確認する','お金の記事を1つ読む','貯金額を確認する'].map((m,i)=>`<label class="mission"><input type="checkbox" data-mission="${i}" ${state.missions[i]?'checked':''}>${m}</label>`).join('')}
  </div><button class="primary-btn" style="margin-top:16px" data-action="benefit">特典ページへ進む 🎁</button></div></section>`;
}

function renderBenefit(){
  $app.innerHTML = `<section class="screen"><div class="screen-head"><button class="back-btn" data-action="home">← 戻る</button><div class="lab-title"><span style="color:var(--mint)">ふみゆラボ</span><br>特典ページ</div><span></span></div><div class="card result-card"><img class="char" style="height:190px" src="${IMG}ok.png" alt="OK"><h2>診断してよかった！</h2><p>チェック後すぐに受け取れる特典ページです。</p><div class="benefit">🎁 お金の体力チェックシート</div><div class="benefit">🎁 これからのミッションワークブック</div><div class="benefit">🎁 家計見直しチェックリスト</div><p class="footer-note">この診断は将来の結果を保証するものではありません。ご自身の状況に合わせてご活用ください。</p></div></section>`;
}

async function saveResultImage(){
  const scores = getScores(); const rank = getRank(scores.avg); const type = getType(scores);
  const canvas = document.createElement('canvas'); canvas.width=1080; canvas.height=1920; const ctx=canvas.getContext('2d');
  ctx.fillStyle='#fffaf1'; ctx.fillRect(0,0,1080,1920); roundRect(ctx,60,70,960,1780,70,'#ffffff','#ffe7d6',4);
  ctx.fillStyle='#4d3028'; ctx.textAlign='center'; ctx.font='bold 58px sans-serif'; ctx.fillText('ふみゆラボ',540,170); ctx.font='bold 70px sans-serif'; ctx.fillText('お金の健康診断',540,260);
  const img = await loadImage(`${IMG}result.png`); ctx.drawImage(img,360,320,360,360);
  ctx.fillStyle='#887a72'; ctx.font='bold 38px sans-serif'; ctx.fillText('あなたのタイプ',540,760); ctx.fillStyle='#ff7773'; ctx.font='bold 72px sans-serif'; wrapCanvasText(ctx,type.name,540,850,900,86);
  ctx.fillStyle='#64c8bb'; ctx.font='bold 100px sans-serif'; ctx.fillText(`${scores.avg}点`,540,1040); ctx.fillStyle='#4d3028'; ctx.font='bold 52px sans-serif'; ctx.fillText(`${rank}ランク`,540,1120);
  ctx.textAlign='left'; ctx.font='bold 42px sans-serif'; ctx.fillStyle='#4d3028'; const labs=['知る力','守る力','整える力','育てる力','学ぶ力','行動力']; scores.chapterScores.forEach((v,i)=>ctx.fillText(`${labs[i]}　${v}点`,190,1240+i*74));
  ctx.textAlign='center'; ctx.fillStyle='#ff7773'; ctx.font='bold 40px sans-serif'; ctx.fillText('今日の一歩が、半年後の未来を変える。',540,1760); ctx.fillStyle='#887a72'; ctx.font='30px sans-serif'; ctx.fillText('by fumiyu_moneylife',540,1830);
  const link=document.createElement('a'); link.download='fumiyu-money-check-result.png'; link.href=canvas.toDataURL('image/png'); link.click();
}
function roundRect(ctx,x,y,w,h,r,fill,stroke,lw){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();ctx.fillStyle=fill;ctx.fill();ctx.strokeStyle=stroke;ctx.lineWidth=lw;ctx.stroke();}
function loadImage(src){return new Promise((res,rej)=>{const img=new Image();img.onload=()=>res(img);img.onerror=rej;img.src=src;});}
function wrapCanvasText(ctx,text,x,y,maxWidth,lineHeight){const chars=text.split('');let line='';let yy=y;for(const ch of chars){const test=line+ch;if(ctx.measureText(test).width>maxWidth && line){ctx.fillText(line,x,yy);line=ch;yy+=lineHeight;}else line=test;}ctx.fillText(line,x,yy);}

function launchConfetti(){
  const canvas=document.getElementById('confettiCanvas'),ctx=canvas.getContext('2d'); canvas.width=innerWidth; canvas.height=innerHeight;
  const pieces=Array.from({length:80},()=>({x:Math.random()*canvas.width,y:-20-Math.random()*canvas.height*.3,r:4+Math.random()*6,c:['#ff7773','#64c8bb','#f3bd3f','#9b82d9'][Math.floor(Math.random()*4)],v:2+Math.random()*4,a:Math.random()*6}));
  let t=0; function frame(){ctx.clearRect(0,0,canvas.width,canvas.height); pieces.forEach(p=>{p.y+=p.v;p.x+=Math.sin(t/10+p.a)*2;ctx.fillStyle=p.c;ctx.fillRect(p.x,p.y,p.r,p.r*1.7);}); if(t++<160) requestAnimationFrame(frame); else ctx.clearRect(0,0,canvas.width,canvas.height);} frame();
}

$app.addEventListener('click', e=>{
  const ans=e.target.closest('[data-answer]'); if(ans){ state.answers[state.index]=Number(ans.dataset.answer); saveState(); renderQuiz(); return; }
  const btn=e.target.closest('[data-action]'); if(!btn)return; const act=btn.dataset.action;
  if(act==='start'){ state.screen='quiz'; if(state.index==null) state.index=0; saveState(); renderQuiz(); }
  if(act==='home'){ state.screen='home'; saveState(); renderHome(); }
  if(act==='reset'){ if(confirm('回答をリセットして最初から始めますか？')) clearState(); }
  if(act==='prev'){ if(state.index>0){ state.index--; saveState(); renderQuiz(); } }
  if(act==='next'){
    if(state.answers[state.index]===null){ alert('回答を1つ選んでくださいね。'); return; }
    if(state.index<29){ state.index++; saveState(); renderQuiz(); } else { state.screen='loading'; saveState(); renderLoading(); }
  }
  if(act==='result'){ state.screen='result'; saveState(); renderResult(); }
  if(act==='mission'){ renderMission(); }
  if(act==='benefit'){ state.screen='benefit'; saveState(); renderBenefit(); }
  if(act==='save-image'){ saveResultImage(); }
});
$app.addEventListener('change', e=>{ const m=e.target.closest('[data-mission]'); if(m){ state.missions[Number(m.dataset.mission)]=m.checked; saveState(); renderMission(); if(state.missions.every(Boolean)) launchConfetti(); }});

render();
