const STORAGE_KEY = 'okaneShindanV1Answers';
const INDEX_KEY = 'okaneShindanV1CurrentIndex';
const PASSWORD = 'fumiyu';

const chapters = [
  { name: 'お金を知る習慣', short: '知る習慣', image: 'calc.png', color: '#53c1b3' },
  { name: 'お金を守る習慣', short: '守る習慣', image: 'stop.png', color: '#ff7672' },
  { name: 'お金を整える習慣', short: '整える習慣', image: 'good.png', color: '#f5aa1b' },
  { name: 'お金を育てる習慣', short: '育てる習慣', image: 'kirakira.png', color: '#8b70d6' },
  { name: 'お金を学ぶ習慣', short: '学ぶ習慣', image: 'pc.png', color: '#4aa8e8' },
  { name: 'お金を行動に変える習慣', short: '行動の習慣', image: 'letsgo.png', color: '#62b65d' },
];

const questions = [
{c:0,q:'この半年で、毎月のお金の流れを確認しましたか？',a:['ほとんど確認していない','たまに確認した','毎月確認した','毎月確認して、見直しもした']},
{c:0,q:'この半年で、口座残高や財布の残高を確認する習慣はありましたか？',a:['必要な時だけ確認した','月に1回くらい確認した','週に1回くらい確認した','数日に1回以上確認した']},
{c:0,q:'この半年で、お金の使い方を振り返りましたか？',a:['振り返っていない','1〜2回だけ振り返った','月に1回くらい振り返った','定期的に振り返った']},
{c:0,q:'この半年で、毎月使えるお金の目安を決めていましたか？',a:['決めていない','なんとなく決めていた','毎月ある程度決めていた','毎月決めて、必要に応じて調整した']},
{c:0,q:'この半年で、お金のことで気になったことを調べましたか？',a:['ほとんど調べていない','1〜2回調べた','月に1回以上調べた','気になった時にすぐ調べた']},
{c:1,q:'この半年で、急な出費に備えたお金を確認しましたか？',a:['確認していない','少しだけ確認した','ある程度確認した','必要な金額まで意識して確認した']},
{c:1,q:'この半年で、固定費を見直しましたか？',a:['見直していない','1つだけ確認した','複数確認した','見直して、実際に改善した']},
{c:1,q:'この半年で、保険や保障内容を確認しましたか？',a:['確認していない','少しだけ確認した','必要な内容を確認した','今の生活に合っているか見直した']},
{c:1,q:'この半年で、災害・病気・収入減など「もしも」の備えを考えましたか？',a:['考えていない','少しだけ考えた','必要な備えを確認した','実際に備えを整えた']},
{c:1,q:'この半年で、大きな買い物をする前に比較・検討しましたか？',a:['勢いで決めることが多かった','少しだけ比較した','いくつか比較して決めた','予算や必要性まで考えて決めた']},
{c:2,q:'この半年で、家計を良くするために行動しましたか？',a:['特にしていない','1つだけ行動した','いくつか行動した','継続して取り組んでいる']},
{c:2,q:'この半年で、不要な支出を減らそうとしましたか？',a:['特に意識していない','少し意識した','実際に少し減らした','定期的に見直している']},
{c:2,q:'この半年で、お金を使う前に「本当に必要かな？」と考えましたか？',a:['ほとんど考えていない','たまに考えた','よく考えた','習慣になっている']},
{c:2,q:'この半年で、買い物後に「もっと良い選び方があったかな？」と振り返りましたか？',a:['振り返っていない','たまに振り返った','よく振り返った','次の買い物に活かした']},
{c:2,q:'この半年で、家計や貯金に関する目標を立てましたか？',a:['立てていない','なんとなく考えた','目標を決めた','目標を決めて、進み具合も確認した']},
{c:3,q:'この半年で、将来のお金について考える時間はありましたか？',a:['ほとんどなかった','1〜2回あった','月に1回くらいあった','定期的に考えている']},
{c:3,q:'この半年で、資産づくりについて考えたり調べたりしましたか？',a:['ほとんどしていない','少しだけ興味を持った','いくつか調べた','自分に合う方法を考えた']},
{c:3,q:'この半年で、積立や貯金など将来のためのお金を準備しましたか？',a:['していない','できる時だけした','毎月少しずつした','自動化や仕組み化をして続けた']},
{c:3,q:'この半年で、資産づくりのリスクについて確認しましたか？',a:['確認していない','少しだけ見た','自分なりに調べた','リスクを理解したうえで判断した']},
{c:3,q:'この半年で、今あるお金をどんな目的で使うか考えましたか？',a:['あまり考えていない','なんとなく考えた','目的ごとに分けて考えた','目的に合わせて置き場所や使い方も考えた']},
{c:4,q:'この半年で、お金について学ぶ時間を作りましたか？',a:['ほとんどなかった','気になった時だけあった','月に数回あった','毎週のようにあった']},
{c:4,q:'この半年で、お金の情報を見たあとに、内容を確認しましたか？',a:['見るだけで終わった','保存した','自分でも調べた','複数の情報を比べて確認した']},
{c:4,q:'この半年で、分からないお金の言葉を調べましたか？',a:['ほとんど調べていない','気になったものだけ調べた','できるだけ調べた','理解できるまで確認した']},
{c:4,q:'この半年で、お金のことを家族や身近な人と話しましたか？',a:['ほとんど話していない','1〜2回話した','時々話した','今後のことも含めて話した']},
{c:4,q:'この半年で、学んだことを見返しましたか？',a:['ほとんど見返していない','保存だけしている','時々見返した','実践しながら見返した']},
{c:5,q:'この半年で、お金について新しく始めたことはありますか？',a:['特にない','1つだけある','2〜3個ある','始めたことを続けている']},
{c:5,q:'この半年で、学んだことを実際に行動へ移しましたか？',a:['ほとんどない','1回だけある','数回ある','習慣として続けている']},
{c:5,q:'この半年で、「あとでやろう」と思ったお金のことを実行しましたか？',a:['ほとんど実行していない','少しだけ実行した','半分くらい実行した','ほとんど実行した']},
{c:5,q:'この半年で、お金のために使った時間は増えましたか？',a:['増えていない','少し増えた','明らかに増えた','継続的に時間を取れるようになった']},
{c:5,q:'半年後、この診断をもう一度受けるとしたら、一番近い気持ちは？',a:['あまり変わらないと思う','少し変わっていたらいい','今より良くなっていたい','目標を決めて変えていきたい']},
];

let currentIndex = Number(localStorage.getItem(INDEX_KEY) || 0);
let answers = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
if (!Array.isArray(answers)) answers = [];

const $ = (id) => document.getElementById(id);
const screens = ['homeScreen','passwordScreen','questionScreen','completeScreen'];
function show(id){ screens.forEach(s => $(s).classList.toggle('active', s === id)); window.scrollTo({top:0, behavior:'smooth'}); }

function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  localStorage.setItem(INDEX_KEY, String(currentIndex));
  $('saveStatus').textContent = '最終保存：たった今';
}

function renderQuestion(){
  const item = questions[currentIndex];
  const chapter = chapters[item.c];
  const answeredCount = answers.filter(v => v !== null && v !== undefined).length;
  const percent = Math.round((answeredCount / questions.length) * 100);
  $('chapterLabel').textContent = `第${item.c + 1}章　${chapter.name}`;
  $('chapterPill').textContent = chapter.short;
  $('chapterPill').style.background = chapter.color;
  $('progressPercent').textContent = `${Math.max(3, percent)}%`;
  $('progressFill').style.width = `${Math.max(3, percent)}%`;
  $('questionCount').textContent = `${currentIndex + 1} / 30`;
  $('qNum').textContent = `Q${currentIndex + 1}.`;
  $('questionText').textContent = item.q;
  $('chapterImage').src = `assets/images/${chapter.image}`;
  $('answers').innerHTML = '';
  item.a.forEach((text, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'answer-btn' + (answers[currentIndex] === idx ? ' selected' : '');
    btn.innerHTML = `${['A','B','C','D'][idx]}. ${text}`;
    btn.addEventListener('click', () => {
      answers[currentIndex] = idx;
      saveState();
      renderQuestion();
    });
    $('answers').appendChild(btn);
  });
  $('prevBtn').disabled = currentIndex === 0;
  $('nextBtn').textContent = currentIndex === questions.length - 1 ? '診断完了へ　→' : '次の質問へ　→';
  renderJumps();
}

function renderJumps(){
  $('jumpRow').innerHTML = '';
  questions.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'jump-dot' + (i === currentIndex ? ' current' : '') + (answers[i] !== undefined ? ' answered' : '');
    b.textContent = i + 1;
    b.addEventListener('click', () => { currentIndex = i; saveState(); renderQuestion(); });
    $('jumpRow').appendChild(b);
  });
}

function allAnswered(){ return answers.filter(v => v !== null && v !== undefined).length === questions.length; }

function next(){
  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    saveState();
    renderQuestion();
  } else {
    if (!allAnswered()) {
      const firstBlank = questions.findIndex((_,i) => answers[i] === undefined || answers[i] === null);
      currentIndex = firstBlank;
      saveState();
      renderQuestion();
      alert('未回答の質問があります。最後まで答えてくださいね。');
      return;
    }
    show('completeScreen');
    runConfetti();
  }
}

function prev(){ if (currentIndex > 0) { currentIndex -= 1; saveState(); renderQuestion(); } }

function runConfetti(){
  const canvas = $('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const pieces = Array.from({length: 110}, () => ({
    x: Math.random()*canvas.width,
    y: -20 - Math.random()*canvas.height*.4,
    r: 4 + Math.random()*7,
    c: ['#ff7672','#53c1b3','#f7c847','#8b70d6','#9be3d6'][Math.floor(Math.random()*5)],
    v: 2 + Math.random()*4,
    s: Math.random()*6
  }));
  let frame = 0;
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      p.y += p.v; p.x += Math.sin((frame+p.s)/12)*1.3;
      ctx.fillStyle = p.c; ctx.fillRect(p.x,p.y,p.r,p.r*1.6);
    });
    frame++;
    if(frame < 180) requestAnimationFrame(draw); else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  draw();
}

function saveCompletionImage(){
  const canvas = document.createElement('canvas');
  canvas.width = 1080; canvas.height = 1350;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fffaf1'; ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#4a2f26'; ctx.font = 'bold 64px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('お金の健康診断', 540, 150);
  ctx.fillStyle = '#53c1b3'; ctx.font = 'bold 92px sans-serif'; ctx.fillText('30問 完了！', 540, 290);
  ctx.fillStyle = '#4a2f26'; ctx.font = 'bold 38px sans-serif';
  ctx.fillText('診断結果は次の画面で表示されます', 540, 390);
  ctx.fillStyle = '#fff'; ctx.strokeStyle = '#b9e8df'; ctx.lineWidth = 6;
  roundRect(ctx, 120, 500, 840, 430, 40); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#ff7672'; ctx.font = 'bold 52px sans-serif'; ctx.fillText('回答を保存しました', 540, 650);
  ctx.fillStyle = '#4a2f26'; ctx.font = '32px sans-serif'; ctx.fillText('fumiyu_moneylife', 540, 745);
  ctx.fillStyle = '#ff7672'; roundRect(ctx, 190, 1040, 700, 120, 60); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.font = 'bold 48px sans-serif'; ctx.fillText('保存して見返してね', 540, 1118);
  const link = document.createElement('a');
  link.download = 'okane-shindan-complete.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}
function roundRect(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}

$('startBtn').addEventListener('click', () => show('passwordScreen'));
$('benefitBtn').addEventListener('click', () => show('passwordScreen'));
document.querySelectorAll('[data-go]').forEach(btn => btn.addEventListener('click', () => show(btn.dataset.go)));
$('passwordSubmit').addEventListener('click', () => {
  if ($('passwordInput').value.trim() === PASSWORD) {
    $('passwordError').textContent = '';
    show('questionScreen');
    renderQuestion();
  } else {
    $('passwordError').textContent = 'パスワードが違います';
  }
});
$('toHome').addEventListener('click', () => show('homeScreen'));
$('resumeBtn').addEventListener('click', () => { currentIndex = Number(localStorage.getItem(INDEX_KEY) || 0); renderQuestion(); });
$('nextBtn').addEventListener('click', next);
$('prevBtn').addEventListener('click', prev);
$('saveImageBtn').addEventListener('click', saveCompletionImage);
$('resultBtn').addEventListener('click', () => alert('次のPhaseで、診断結果・レーダーチャート・専用カルテを作ります。'));
$('restartBtn').addEventListener('click', () => {
  if(confirm('回答をリセットして、最初から始めますか？')){
    answers = []; currentIndex = 0; saveState(); show('questionScreen'); renderQuestion();
  }
});

// 初回表示
renderQuestion();
