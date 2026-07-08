const ASSETS={ok:'assets/ok-small.png',ok2:'assets/ok2.png',good:'assets/good.png',pc:'assets/pc.png',peace:'assets/peace.png',yattaa:'assets/yattaa.png',guts:'assets/guts.png',kirakira:'assets/kirakira.png',thinking:'assets/thinking.png',gaan:'assets/gaan.png',calc:'assets/calc.png',smartphone:'assets/smartphone.png',point:'assets/point.png'};
const POWERS=['家計力','貯める力','守る力','増やす力','相談する力'];
const QUESTIONS=[
{step:'STEP1　今のお金の状況',power:'家計力',text:'毎月の収入と支出を確認していますか？',tip:'お金の健康は、まず現状を知ることから始まります。毎月1回だけでも確認すると、家計の変化に気づきやすくなります。',answers:[['いつも確認している','毎月の収入と支出をしっかり確認できています。',3],['だいたい確認している','大まかな収入と支出は確認できています。',2],['あまり確認していない','気になったときだけ確認している状態です。',1],['まったく確認していない','収入と支出を確認する機会がほとんどありません。',0]]},
{step:'STEP1　今のお金の状況',power:'家計力',text:'現在の貯金や資産額を把握していますか？',tip:'貯金や資産額を知ることは、将来の計画を立てる第一歩です。まずは今いくらあるか確認してみましょう。',answers:[['正確に把握している','現在の貯金や資産額を正確に把握できています。',3],['だいたい把握している','おおよその貯金や資産額は把握できています。',2],['あまり把握していない','正確な金額までは把握できていない状態です。',1],['まったく把握していない','貯金や資産額を確認する機会がほとんどありません。',0]]},
{step:'STEP1　今のお金の状況',power:'貯める力',text:'毎月いくら貯金に回せているか把握していますか？',tip:'貯金額を知ると、目標との差が見えます。金額が少なくても、把握できていることが大切です。',answers:[['正確に把握している','毎月いくら貯金できているか正確に分かっています。',3],['だいたい把握している','毎月の貯金額はだいたい分かっています。',2],['あまり把握していない','貯金できている月とできていない月が曖昧です。',1],['まったく把握していない','毎月いくら貯金できているか分からない状態です。',0]]},
{step:'STEP1　今のお金の状況',power:'家計力',text:'毎月の固定費を把握していますか？\n（例：通信費・保険・サブスクなど）',tip:'固定費は一度見直すと効果が続きやすい支出です。まずは毎月いくら出ているか確認してみましょう。',answers:[['正確に把握している','通信費や保険などの固定費を正確に把握しています。',3],['だいたい把握している','固定費のおおよその金額は把握しています。',2],['あまり把握していない','一部の固定費しか把握できていません。',1],['まったく把握していない','固定費をほとんど把握していない状態です。',0]]},
{step:'STEP1　今のお金の状況',power:'相談する力',text:'お金に関する制度やサービスを知っていますか？\n（例：ふるさと納税・自治体の補助制度・勤務先の福利厚生など）',tip:'制度やサービスは、知っているだけで選択肢が広がります。まずは自分に関係ありそうな制度を1つ調べてみましょう。',answers:[['よく知っている','使える制度やサービスをよく知っています。',3],['少し知っている','いくつかの制度やサービスは知っています。',2],['名前だけ知っている','聞いたことはありますが、内容はあまり分かりません。',1],['知らない','お金に関する制度やサービスはほとんど知りません。',0]]},
{step:'STEP2　家計を整える',power:'家計力',text:'お金の流れを確認していますか？\n（例：家計簿・アプリ・通帳・明細など）',tip:'家計簿にこだわらなくても大丈夫です。アプリや明細を見るだけでも、お金の流れは少しずつ見えるようになります。',answers:[['いつも確認している','家計簿や明細などでお金の流れを確認できています。',3],['だいたい確認している','お金の流れを大まかに確認できています。',2],['あまり確認していない','たまに確認する程度で、流れは見えにくい状態です。',1],['まったく確認していない','お金の流れを確認する習慣がほとんどありません。',0]]},
{step:'STEP2　家計を整える',power:'家計力',text:'収入の範囲で生活できていますか？',tip:'収入の範囲で暮らせることは、家計の土台です。難しい月がある場合は、まず固定費から見直すと取り組みやすいです。',answers:[['いつもできている','毎月、収入の範囲で生活できています。',3],['だいたいできている','多くの月は収入の範囲で生活できています。',2],['あまりできていない','収入を超えてしまう月があります。',1],['まったくできていない','収入の範囲で生活するのが難しい状態です。',0]]},
{step:'STEP2　家計を整える',power:'家計力',text:'支出を見直していますか？\n（例：固定費・買い物・サブスクなど）',tip:'支出の見直しは、我慢だけではありません。使っていないサービスや高すぎる固定費を見つけることから始めましょう。',answers:[['定期的に見直している','固定費や買い物などを定期的に見直しています。',3],['ときどき見直している','気づいたときに支出を見直しています。',2],['あまり見直していない','支出を見直す機会は少なめです。',1],['まったく見直していない','支出を見直すことはほとんどありません。',0]]},
{step:'STEP2　家計を整える',power:'家計力',text:'家計を良くするために行動していますか？\n（例：節約・先取り貯金・固定費の見直しなど）',tip:'家計改善は小さな行動で大丈夫です。先取り貯金や固定費の確認など、できることから始めるのが続けるコツです。',answers:[['積極的に行動している','家計を良くするために積極的に行動しています。',3],['少し行動している','できる範囲で家計改善に取り組んでいます。',2],['あまり行動していない','気持ちはありますが、行動は少なめです。',1],['まったく行動していない','家計を良くするための行動はまだできていません。',0]]},
{step:'STEP2　家計を整える',power:'家計力',text:'毎月のお金の支払い予定を把握していますか？\n（例：家賃・光熱費・通信費・クレジットカード・各種引き落としなど）',tip:'支払い予定を把握できると、残高不足や使いすぎを防ぎやすくなります。引き落とし日だけでも確認しておきましょう。',answers:[['いつも把握している','毎月の支払い予定をしっかり把握しています。',3],['だいたい把握している','主な支払い予定はだいたい把握しています。',2],['あまり把握していない','支払い予定を忘れてしまうことがあります。',1],['まったく把握していない','毎月の支払い予定をほとんど把握していません。',0]]},
{step:'STEP3　もしもの時に備える',power:'守る力',text:'緊急時に使えるお金がありますか？\n（例：病気・失業・急な出費への備え）',tip:'緊急時に使えるお金があると、急な出費でも慌てにくくなります。まずは少額でも別に分けておくことが大切です。',answers:[['十分ある','急な出費にも対応できる備えがあります。',3],['ある程度ある','ある程度の急な出費には対応できそうです。',2],['あまりない','急な出費への備えは少なめです。',1],['まったくない','緊急時に使えるお金はほとんどありません。',0]]},
{step:'STEP3　もしもの時に備える',power:'守る力',text:'契約や申し込みをする前に、内容を確認していますか？\n（例：保険・ローン・サブスク・投資商品など）',tip:'契約前の確認は、自分のお金を守る大切な習慣です。料金・解約条件・リスクは特に確認しましょう。',answers:[['必ず確認している','契約や申し込み前に内容をしっかり確認しています。',3],['だいたい確認している','重要な部分はだいたい確認しています。',2],['あまり確認していない','細かい内容までは確認できていないことがあります。',1],['まったく確認していない','契約や申し込み前に内容をほとんど確認していません。',0]]},
{step:'STEP3　もしもの時に備える',power:'守る力',text:'もしものときに備えて、お金以外の準備をしていますか？\n（例：防災用品・重要書類の保管・家族との連絡方法など）',tip:'お金以外の備えも、暮らしを守る大切な力です。防災用品や重要書類の置き場所だけでも確認しておきましょう。',answers:[['十分準備している','防災用品や重要書類などの準備ができています。',3],['ある程度準備している','もしもの準備はある程度できています。',2],['あまり準備していない','準備は少しありますが、十分ではありません。',1],['まったく準備していない','お金以外の備えはほとんどできていません。',0]]},
{step:'STEP3　もしもの時に備える',power:'守る力',text:'借入やローンの状況はどうですか？',tip:'借入やローンは、無理なく返せているかが大切です。負担が大きい場合は、一人で抱えず早めに相談先を探しましょう。',answers:[['借入はない、または無理なく返済している','借入がない、または無理のない範囲で返済できています。',3],['返済できているが少し負担を感じる','返済はできていますが、家計への負担を感じています。',2],['返済が負担になっている','返済が家計を圧迫している状態です。',1],['返済がかなり厳しい・延滞がある','返済がかなり厳しく、早めの相談が必要な状態です。',0]]},
{step:'STEP3　もしもの時に備える',power:'相談する力',text:'困ったとき、お金について相談できる人がいますか？\n（例：家族・FP・勤務先・公的機関など）',tip:'相談できる先があることは、お金を守る力になります。身近な人だけでなく、公的機関も選択肢に入れておくと安心です。',answers:[['いる','お金について相談できる人や窓口があります。',3],['どちらかといえばいる','必要なときに相談できそうな相手がいます。',2],['あまりいない','相談できる相手が少なく、不安があります。',1],['いない','お金について相談できる人や窓口がありません。',0]]},
{step:'STEP4　将来に備える',power:'増やす力',text:'NISAやiDeCoを知っていますか？',tip:'NISAやiDeCoは将来のお金を考える代表的な制度です。始める前に、まず仕組みと注意点を知ることが大切です。',answers:[['よく知っている','NISAやiDeCoの仕組みをよく理解しています。',3],['少し知っている','NISAやiDeCoの概要は知っています。',2],['名前だけ知っている','名前は聞いたことがありますが、内容はあまり分かりません。',1],['知らない','NISAやiDeCoについてほとんど知りません。',0]]},
{step:'STEP4　将来に備える',power:'増やす力',text:'資産形成をしていますか？\n（例：積立貯金・NISA・iDeCoなど）',tip:'資産形成は金額の大きさより、無理なく続けることが大切です。少額からでも始めていれば大きな一歩です。',answers:[['継続している','将来のための資産形成を継続しています。',3],['少ししている','少しずつ資産形成を始めています。',2],['あまりしていない','資産形成はまだあまりできていません。',1],['まったくしていない','将来のための資産形成はまだ始めていません。',0]]},
{step:'STEP4　将来に備える',power:'貯める力',text:'将来のお金の計画がありますか？\n（例：老後・教育費・住宅購入など）',tip:'将来の計画は、最初から完璧でなくて大丈夫です。老後・教育費・住宅など、気になるテーマを1つ考えるだけでも前進です。',answers:[['はっきりある','将来のお金の計画がはっきりあります。',3],['ある','将来のお金についてある程度考えています。',2],['あまりない','将来のお金の計画はまだ曖昧です。',1],['まったくない','将来のお金の計画はまだありません。',0]]},
{step:'STEP4　将来に備える',power:'貯める力',text:'将来のためのお金を優先して確保していますか？\n（例：先取り貯金・積立など）',tip:'先に貯める仕組みを作ると、残ったら貯めるより続けやすくなります。少額でも自動化すると習慣になります。',answers:[['いつもできている','将来のためのお金を優先して確保できています。',3],['だいたいできている','多くの月で将来のお金を確保できています。',2],['あまりできていない','将来のお金を確保できない月があります。',1],['まったくできていない','将来のためのお金はまだ確保できていません。',0]]},
{step:'STEP4　将来に備える',power:'相談する力',text:'お金について学んでいますか？\n（例：本・動画・SNS・セミナーなど）',tip:'お金の勉強は、難しい本を読むことだけではありません。信頼できる情報を少しずつ見るだけでも知識は増えていきます。',answers:[['継続して学んでいる','お金について継続して学んでいます。',3],['ときどき学んでいる','必要なときや気になったときに学んでいます。',2],['あまり学んでいない','お金について学ぶ機会は少なめです。',1],['まったく学んでいない','お金について学ぶ機会はほとんどありません。',0]]},
{step:'STEP5　より良い習慣',power:'相談する力',text:'分からないお金のことは自分で調べていますか？',tip:'分からないことを調べる習慣は、お金の不安を減らす力になります。まずは公式サイトや公的機関の情報から見ると安心です。',answers:[['自分でよく調べる','分からないお金のことを自分でよく調べています。',3],['ときどき調べる','気になったことはときどき調べています。',2],['あまり調べない','分からないことがあっても調べる機会は少なめです。',1],['まったく調べない','分からないことを自分で調べることはほとんどありません。',0]]},
{step:'STEP5　より良い習慣',power:'相談する力',text:'お金に関する情報が信頼できるか確認していますか？\n（例：公的機関・公式サイトなど）',tip:'お金の情報は、発信元の確認が大切です。公式サイトや公的機関の情報もあわせて見ると、判断しやすくなります。',answers:[['必ず確認している','情報が信頼できるか必ず確認しています。',3],['だいたい確認している','多くの場合、発信元や根拠を確認しています。',2],['あまり確認していない','情報の信頼性を確認しないことがあります。',1],['まったく確認していない','情報が信頼できるかほとんど確認していません。',0]]},
{step:'STEP5　より良い習慣',power:'家計力',text:'大きな買い物は比較してから決めていますか？',tip:'大きな買い物は、比較するだけで後悔を減らしやすくなります。価格だけでなく、維持費や解約条件も見ると安心です。',answers:[['必ず比較している','大きな買い物は必ず比較してから決めています。',3],['だいたい比較している','多くの場合、比較してから決めています。',2],['あまり比較していない','比較せずに決めることがあります。',1],['まったく比較していない','大きな買い物でもほとんど比較していません。',0]]},
{step:'STEP5　より良い習慣',power:'貯める力',text:'1年以内に達成したいお金の目標がありますか？',tip:'目標があると、貯める理由がはっきりします。金額が小さくても、1年以内の目標は行動につながりやすいです。',answers:[['はっきりある','1年以内に達成したいお金の目標がはっきりあります。',3],['なんとなくある','お金の目標はなんとなくあります。',2],['あまりない','1年以内のお金の目標はまだ曖昧です。',1],['まったくない','1年以内に達成したいお金の目標はありません。',0]]},
{step:'STEP5　より良い習慣',power:'貯める力',text:'お金のために始めたことを続けていますか？\n（例：家計管理・貯金・資産形成・お金の勉強など）',tip:'続ける力は、お金の健康度を上げる大切な力です。完璧に続かなくても、また再開できれば十分です。',answers:[['無理なく続けている','お金のために始めたことを無理なく続けています。',3],['だいたい続けている','途切れることはあっても、だいたい続けられています。',2],['あまり続いていない','始めたことがなかなか続かない状態です。',1],['まったく続いていない','お金のために始めたことは続いていません。',0]]}
];
const HEALTH={A:{label:'健康度A とても良好',base:'とても良い状態です。家計管理や将来への備えが進んでいて、お金との向き合い方に安定感があります。'},B:{label:'健康度B 良好',base:'かなり良い状態です。大きな不安は少なく、今の習慣を続けながら弱い部分を少し補うと、さらに安心に近づけます。'},C:{label:'健康度C 成長中',base:'基礎はでき始めています。まだ伸ばせる部分はありますが、今の行動を続けながら1つずつ整えると大きく変わります。'},D:{label:'健康度D 見直し中',base:'見直すポイントがいくつかあります。まずは家計や貯蓄など、暮らしに近いところから整えると前進しやすいです。'},E:{label:'健康度E はじめの一歩',base:'これから土台を作る段階です。できていないことに落ち込むより、今日できる小さな一歩から始めれば大丈夫です。'}};
const TYPE={
'はじめの一歩タイプ':{focus:'家計の現状を知ること',summary:'お金と向き合う入口に立てています。まだできていないことが多くても、今気づけたことが大切です。',strength:'今回診断を受けたこと自体が大きな強みです。不安をそのままにせず、知ろうとする姿勢があります。',next:'まずは1週間だけ支出をメモして、何に使っているかを見るところから始めましょう。'},
'のびしろ発見タイプ':{focus:'小さな行動を習慣にすること',summary:'これから伸ばせる部分が多い状態です。完璧を目指すより、小さく試すことでお金の健康度は上がっていきます。',strength:'変えられる余地が大きいことが強みです。今のうちに土台を整えるほど、あとから楽になります。',next:'家計・貯蓄・制度のうち、気になるものを1つ選んで調べてみましょう。'},
'家計見直しタイプ':{focus:'収支の見える化',summary:'家計を整えることで大きく変わるタイプです。お金の流れが見えると、貯める力も育ちやすくなります。',strength:'暮らしに近いところから改善できる力があります。固定費や日々の支出を見直すと効果が出やすいです。',next:'スマホ代・保険・サブスクなど、毎月出ていく固定費を1つだけ確認しましょう。'},
'貯蓄づくりタイプ':{focus:'先取り貯蓄の仕組み化',summary:'貯める力を育てていく段階です。仕組みを作ると、気合いに頼らなくてもお金が残りやすくなります。',strength:'将来のためにお金を残したい気持ちがあります。目標を決めると行動に移しやすいタイプです。',next:'毎月500円でも1,000円でも、自動で別口座に移す仕組みを作ってみましょう。'},
'守り整えタイプ':{focus:'急な出費への備え',summary:'大きな失敗を防ぐための備えを整えると安心が増えるタイプです。保険や生活防衛資金の確認が効果的です。',strength:'リスクに気づく力があります。急な出費や借入を避ける準備ができると、家計の安定感が増します。',next:'生活費の何か月分をすぐ使えるお金で持てているか確認しましょう。'},
'学び実践タイプ':{focus:'知識を行動に変えること',summary:'お金について学びながら、少しずつ行動に移せるタイプです。知って終わりにしないことが成長の鍵です。',strength:'調べたり比較したりする力があります。正しい情報を選べるようになると、判断に自信が持てます。',next:'気になる制度を1つ選び、公式サイトや信頼できる情報源で概要を確認しましょう。'},
'資産育成タイプ':{focus:'長期目線の資産形成',summary:'お金を増やす視点が育っているタイプです。無理なく続ける設計にすると、将来の安心につながりやすいです。',strength:'将来に向けて行動する力があります。リスクを理解しながら長期目線で考えられると、さらに安定します。',next:'投資額・目的・期間を確認して、無理なく続けられる範囲か見直しましょう。'},
'バランス安心タイプ':{focus:'全体バランスの維持',summary:'家計・貯蓄・備えのバランスが取れてきています。大きな偏りを減らすことで、より安心感が高まります。',strength:'一部だけでなく全体を見られる力があります。今の習慣を続けながら、弱い項目を少し足すとさらに良くなります。',next:'5つの力の中で一番低い項目を1つ選び、今月できる小さな改善を決めましょう。'},
'堅実コツコツタイプ':{focus:'良い習慣の継続と見直し',summary:'お金とかなり上手に向き合えています。今の習慣を続けながら、年に一度の見直しを入れるとさらに安心です。',strength:'コツコツ続ける力が大きな強みです。家計管理や備えが崩れにくく、将来に向けた判断もしやすい状態です。',next:'家計・保険・資産配分を年1回見直す日を決めて、今の良い状態を保ちましょう。'}
};
const FUMI={A:'ここまで整えられているのは本当にすごいです。今の習慣を味方にして、これからも無理なく続けていきましょう。',B:'かなり良い流れです。あと少し整えるだけで、もっと安心感が増します。焦らず今のペースで大丈夫です。',C:'土台はできています。ここから一つ行動を足すだけで、未来の安心につながります。少しずつ進みましょう。',D:'見直しポイントが見えたのは大きな前進です。全部変えなくて大丈夫。まずは一つだけでいいです。',E:'今日診断したことがスタートです。お金の不安は、小さな行動の積み重ねで少しずつ減らせます。一緒に進みましょう。'};
let idx=0, selected=null, answers=[], result=null;
const $=id=>document.getElementById(id);
function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));$(id).classList.add('active');window.scrollTo({top:0,behavior:'instant'});}
function star(n){return '★'.repeat(n)+'☆'.repeat(5-n)}
function syncAnswerHeights(){requestAnimationFrame(()=>{const items=[...document.querySelectorAll('.answer')];items.forEach(item=>item.style.minHeight='');const max=Math.max(...items.map(item=>item.offsetHeight),68);items.forEach(item=>item.style.minHeight=max+'px');});}
function renderQuestion(){const q=QUESTIONS[idx];$('qNo').textContent=`${idx+1} / ${QUESTIONS.length}`;const pct=Math.round((idx+1)/QUESTIONS.length*100);$('qPct').textContent=pct+'%';$('barFill').style.width=pct+'%';$('stepName').textContent=q.step;$('powerName').textContent=q.power;$('qText').textContent=q.text;$('tipText').textContent=q.tip;$('tipChara').src=idx<5?ASSETS.pc:idx<10?ASSETS.good:idx<15?ASSETS.ok2:idx<20?ASSETS.peace:ASSETS.guts;const box=$('answers');box.innerHTML='';q.answers.forEach((a,i)=>{const btn=document.createElement('button');btn.className='answer'+(selected===i?' selected':'');btn.innerHTML=`<strong>${a[0]}</strong><small>${a[1]}</small>`;btn.onclick=()=>{selected=i;document.querySelectorAll('.answer').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected')};box.appendChild(btn);});syncAnswerHeights();}
function nextQuestion(){if(selected===null){alert('答えを選んでから進んでください');return;}answers[idx]={choice:selected,score:QUESTIONS[idx].answers[selected][2],power:QUESTIONS[idx].power};if(idx<QUESTIONS.length-1){idx++;selected=answers[idx]?.choice ?? null;renderQuestion();return;}startLoading();}
function prevQuestion(){if(idx===0){show('top');return;}idx--;selected=answers[idx]?.choice ?? null;renderQuestion();}
function startLoading(){show('loading');let p=0;$('loadingFill').style.width='0%';const timer=setInterval(()=>{p+=10;$('loadingFill').style.width=p+'%';if(p>=100){clearInterval(timer);setTimeout(makeResult,250);}},70);}
function health(score){if(score>=90)return'A';if(score>=80)return'B';if(score>=65)return'C';if(score>=50)return'D';return'E';}
function decideType(score,stars){const sorted=Object.entries(stars).sort((a,b)=>a[1]-b[1]);const low=sorted[0][0];const high=[...sorted].sort((a,b)=>b[1]-a[1])[0][0];if(score<25)return'はじめの一歩タイプ';if(score<50){if(low==='家計力')return'家計見直しタイプ';if(low==='貯める力')return'貯蓄づくりタイプ';return'のびしろ発見タイプ';}if(score<65){if(high==='守る力')return'守り整えタイプ';if(high==='相談する力')return'学び実践タイプ';if(low==='増やす力')return'学び実践タイプ';return'家計見直しタイプ';}if(score<80){if(high==='貯める力')return'貯蓄づくりタイプ';if(high==='増やす力')return'資産育成タイプ';if(high==='相談する力')return'学び実践タイプ';return'バランス安心タイプ';}if(score<90){if(high==='増やす力')return'資産育成タイプ';return'バランス安心タイプ';}return'堅実コツコツタイプ';}
function charaFor(rank,score){if(score>=95)return ASSETS.yattaa;if(score>=90)return ASSETS.kirakira;if(score>=80)return ASSETS.peace;if(score>=50)return ASSETS.guts;if(score>=30)return ASSETS.thinking;if(score>=15)return ASSETS.calc;return ASSETS.gaan;}
function missions(rank,low,type){const common={家計力:'今月の収入と支出を1回だけ確認する',貯める力:'毎月の貯金目標を1つ決める',守る力:'緊急時に使えるお金を確認する',増やす力:'NISAやiDeCoの基本を1つ調べる','相談する力':'お金で困ったときの相談先を1つメモする'};const byRank={A:'年1回の見直し日をカレンダーに入れる',B:'一番低い力を今月1つだけ改善する',C:'できそうな行動を1週間だけ試す',D:'固定費か支出を1つだけ確認する',E:'今日使ったお金を1つメモする'};return [common[low],byRank[rank],TYPE[type].focus+'を意識して小さく行動する'];}
function scoreTone(score){if(score<30)return{summary:'まだ整っていない部分が多い状態です。ただ、今の状態を知れたこと自体が大きな一歩です。ここからは一気に変えるより、見える化から始めるのが合っています。',insightTitle:'今見えていること',insight:'今は「強み」と言い切るより、最初に手をつけやすい入口を見つける段階です。比較的反応が出やすいのは「{high}」まわり。まずはここを入口にして、お金の不安を小さくしていきましょう。',next:'次に整えたいのは「{low}」です。大きな改善を目指すより、今日できる確認を1つだけ選ぶと進みやすいです。',fumi:'低い点数でも、ここで気づけたことはちゃんと前進です。まずは一つだけ。一緒に小さく整えていきましょう。'};if(score<50)return{summary:'見直すところはありますが、ここから伸ばせる余地がはっきり見えています。できていない部分を責めるより、まずは生活に近いところから整えるのがよさそうです。',insightTitle:'伸ばしやすいところ',insight:'比較的伸ばしやすいのは「{high}」です。ここを足がかりにすると、苦手な項目にも手をつけやすくなります。',next:'次に整えたいのは「{low}」です。今週は小さな行動を1つだけ決めて、できた感覚を作りましょう。',fumi:'見直しポイントが見えたのは大きな収穫です。全部を変えなくて大丈夫。まず一つできれば流れは変わります。'};if(score<80)return{summary:'お金の土台は少しずつできています。今の習慣を続けながら、弱い項目を一つ補うと安心感が上がりやすい状態です。',insightTitle:'あなたの強み',insight:'特に良いところは「{high}」です。すでにできている力を土台にすると、次の改善も無理なく進めやすくなります。',next:'次に伸ばしたいのは「{low}」です。一度に全部やろうとせず、今月できる小さな改善を1つ選びましょう。',fumi:'土台はできています。ここから一つ足すだけで、未来の安心につながります。焦らず進みましょう。'};if(score<90)return{summary:'かなり良い状態です。大きな不安は少なく、5つの力のバランスを見ながら弱いところを少し足す段階です。',insightTitle:'あなたの強み',insight:'特に良いところは「{high}」です。今の習慣を続けながら、低めの項目を少し補うとさらに安定します。',next:'次に伸ばしたいのは「{low}」です。今の良い流れを保つための見直しポイントとして扱いましょう。',fumi:'かなり良い流れです。あと少し整えるだけで、もっと安心感が増します。今のペースで大丈夫です。'};return{summary:'とても良い状態です。家計管理や将来への備えが進んでいて、お金との向き合い方に安定感があります。ここからは維持と定期的な見直しが大切です。',insightTitle:'あなたの強み',insight:'特に良いところは「{high}」です。コツコツ続ける力があり、今の習慣が将来の安心につながっています。',next:'次に見るなら「{low}」です。弱点というより、良い状態を保つための点検ポイントとして年に一度見直しましょう。',fumi:'ここまで整えられているのは本当にすごいです。今の習慣を味方にして、これからも無理なく続けていきましょう。'};}
function fillResultText(text,result){return text.replaceAll('{high}',result.high).replaceAll('{low}',result.low).replaceAll('{focus}',TYPE[result.type].focus);}
function charaKey(src){return src.split('/').pop().replace('.png','').replace('-small','');}
function makeResult(){const raw=answers.reduce((s,a)=>s+a.score,0);const score=Math.round(raw/75*100);const rank=health(score);const group={};POWERS.forEach(p=>group[p]=[]);answers.forEach(a=>group[a.power].push(a.score));const stars={};POWERS.forEach(p=>{const avg=group[p].reduce((s,v)=>s+v,0)/group[p].length;stars[p]=Math.max(1,Math.round(avg/3*5));});const type=decideType(score,stars);const low=Object.entries(stars).sort((a,b)=>a[1]-b[1])[0][0];const high=Object.entries(stars).sort((a,b)=>b[1]-a[1])[0][0];const h=HEALTH[rank], t=TYPE[type];result={score,rank,type,stars,low,high,img:charaFor(rank,score),healthText:h.label,missions:null};const tone=scoreTone(score);result.summary=`いまの状態：${tone.summary}\nあなたの傾向：${t.summary}\nまず意識したいこと：「${t.focus}」です。`;result.insightTitle=tone.insightTitle;result.strength=fillResultText(tone.insight,result);result.next=fillResultText(tone.next,result);result.fumi=tone.fumi;result.missions=missions(rank,low,type);renderResult();show('result');}
function renderResult(){$('typeName').textContent=result.moneyType||result.type;$('detailType').textContent=result.detailType||'';$('scoreNum').textContent=result.score;$('healthLabel').textContent=result.healthText;$('resultChara').src=result.img;$('resultChara').className=`chara resultChara resultChara-${charaKey(result.img)}`;$('summaryText').textContent=result.summary;$('strengthTitle').textContent=result.insightTitle;$('strengthText').textContent=result.strength;$('nextText').textContent=result.next;$('fumiText').textContent=result.fumi;$('diagnosisDate').textContent='診断日：'+todayText();const bal=$('balanceList');bal.innerHTML='';POWERS.forEach(p=>{const row=document.createElement('div');row.className='starRow';row.innerHTML=`<b>${p}</b><span class="stars">${star(result.stars[p])}</span>`;bal.appendChild(row);});const ml=$('missions');ml.innerHTML='';result.missions.forEach(m=>{const li=document.createElement('li');li.textContent=m;ml.appendChild(li);});}
function wrapText(ctx,text,x,y,maxWidth,lineHeight){const chars=[...text];let line='';for(const ch of chars){const test=line+ch;if(ctx.measureText(test).width>maxWidth && line){ctx.fillText(line,x,y);line=ch;y+=lineHeight;}else{line=test;}}if(line)ctx.fillText(line,x,y);return y+lineHeight;}
function saveImage(){if(!result)return;const c=document.createElement('canvas');c.width=1080;c.height=1920;const ctx=c.getContext('2d');ctx.fillStyle='#fff8ec';ctx.fillRect(0,0,c.width,c.height);ctx.fillStyle='#dff8f2';ctx.beginPath();ctx.arc(930,145,190,0,Math.PI*2);ctx.fill();ctx.fillStyle='#ffe4e6';ctx.beginPath();ctx.arc(150,1720,230,0,Math.PI*2);ctx.fill();ctx.fillStyle='rgba(255,255,255,.86)';roundRect(ctx,78,72,924,1776,54);ctx.fill();ctx.strokeStyle='rgba(88,202,190,.38)';ctx.lineWidth=5;roundRect(ctx,108,104,864,1712,42);ctx.stroke();ctx.textAlign='center';ctx.fillStyle='#48352d';ctx.font='bold 48px sans-serif';ctx.fillText('お金の健康診断',540,172);ctx.fillStyle='#2c9d93';ctx.font='bold 56px sans-serif';let y=260;y=wrapText(ctx,result.moneyType||result.type,540,y,790,66);ctx.fillStyle='#ff6269';ctx.font='bold 142px sans-serif';ctx.fillText(String(result.score),500,455);ctx.font='bold 50px sans-serif';ctx.fillText('点',650,455);ctx.fillStyle='#2c9d93';ctx.font='bold 38px sans-serif';ctx.fillText(result.healthText,540,530);const img=new Image();img.onload=()=>{ctx.drawImage(img,390,555,300,300);let y2=910;ctx.textAlign='left';ctx.fillStyle='#48352d';ctx.font='bold 38px sans-serif';ctx.fillText('5つの力',150,y2);y2+=64;POWERS.forEach(p=>{ctx.font='bold 32px sans-serif';ctx.fillStyle='#48352d';ctx.fillText(p,150,y2);ctx.fillStyle='#f3b43f';ctx.font='bold 38px sans-serif';ctx.fillText(star(result.stars[p]),430,y2);y2+=58;});y2+=22;ctx.fillStyle='#48352d';ctx.font='bold 36px sans-serif';ctx.fillText('今日からのミッション3つ',150,y2);y2+=58;ctx.font='30px sans-serif';ctx.fillStyle='#705b51';result.missions.forEach(m=>{ctx.strokeStyle='#58cabe';ctx.lineWidth=5;roundRect(ctx,150,y2-26,30,30,6);ctx.stroke();wrapText(ctx,m,200,y2,720,42);y2+=76;});ctx.textAlign='center';ctx.fillStyle='#2c9d93';ctx.font='bold 30px sans-serif';ctx.fillText('診断日：'+todayText(),540,1630);ctx.fillStyle='#ff7378';ctx.font='bold 32px sans-serif';ctx.fillText('半年後にもう一度診断してみよう！',540,1680);ctx.fillStyle='#48352d';ctx.font='bold 30px sans-serif';ctx.fillText('今日から1つだけ始めてみましょう。',540,1730);ctx.fillText('半年後には、きっと今とは違う結果になっています。',540,1772);ctx.fillStyle='#2c9d93';ctx.font='bold 28px sans-serif';ctx.fillText('fumiyu_moneylife',540,1818);downloadCanvas(c);};img.src=result.img;}
function roundRect(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();}
function downloadCanvas(c){const a=document.createElement('a');a.download='okane-shindan-result.png';a.href=c.toDataURL('image/png');a.click();}
function loadHtml2Canvas(){return new Promise((resolve,reject)=>{if(window.html2canvas){resolve(window.html2canvas);return;}const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';s.onload=()=>resolve(window.html2canvas);s.onerror=()=>reject(new Error('html2canvas load failed'));document.head.appendChild(s);});}
async function saveImage(){const target=document.querySelector('.result-phone');if(!result||!target)return;const saveBtn=$('saveBtn');const oldText=saveBtn.textContent;saveBtn.textContent='保存中...';saveBtn.disabled=true;try{const html2canvas=await loadHtml2Canvas();const canvas=await html2canvas(target,{backgroundColor:'#fff8ec',scale:2,useCORS:true,allowTaint:false,scrollX:0,scrollY:0,width:target.scrollWidth,height:target.scrollHeight,windowWidth:target.scrollWidth,windowHeight:target.scrollHeight});downloadCanvas(canvas);}catch(e){alert('画像保存に失敗しました。もう一度お試しください。');}finally{saveBtn.textContent=oldText;saveBtn.disabled=false;}}
function previewStars(score){const base=Math.max(1,Math.min(5,Math.round(score/20)));const stars={};POWERS.forEach((p,i)=>{const offset=[0,-1,0,-1,0][i];stars[p]=Math.max(1,Math.min(5,base+offset));});if(score>=90)POWERS.forEach(p=>stars[p]=score>=95?5:Math.max(4,stars[p]));if(score<30){stars['家計力']=1;stars['貯める力']=1;stars['守る力']=1;stars['増やす力']=1;stars['相談する力']=1;}return stars;}
function showResultPreview(){const params=new URLSearchParams(location.search);if(params.get('preview')!=='result')return false;const score=Number(params.get('score')||45);const rank=health(score);const stars=previewStars(score);const type=decideType(score,stars);const low=Object.entries(stars).sort((a,b)=>a[1]-b[1])[0][0];const high=Object.entries(stars).sort((a,b)=>b[1]-a[1])[0][0];const h=HEALTH[rank],t=TYPE[type],tone=scoreTone(score);result={score,rank,type,stars,low,high,img:charaFor(rank,score),healthText:h.label,missions:null};result.summary=`いまの状態：${tone.summary}\nあなたの傾向：${t.summary}\nまず意識したいこと：「${t.focus}」です。`;result.insightTitle=tone.insightTitle;result.strength=fillResultText(tone.insight,result);result.next=fillResultText(tone.next,result);result.fumi=tone.fumi;result.missions=missions(rank,low,type);renderResult();show('result');return true;}
function scoreTone(score){
  if(score<30)return{
    summary:'今はまだ整っていない部分が多い状態です。ただ、ここで現状が見えたことが大きな一歩です。まずは家計の見える化から始めると、次の行動が選びやすくなります。',
    insightTitle:'今見えていること',
    insight:'今は「強み」と言い切るより、最初に手をつけやすい入口を見つける段階です。比較的始めやすいのは「{high}」です。小さく確認するだけでも、不安を減らすきっかけになります。',
    next:'次に整えたいのは「{low}」です。大きく変えようとせず、今日できる確認を1つだけ選びましょう。',
    fumi:'点数が低くても、今気づけたことはちゃんと前進です。まずは一つだけ。一緒に小さく整えていきましょう。'
  };
  if(score<50)return{
    summary:'見直すところはありますが、伸ばせる余地がはっきり見えています。できていない部分を責めるより、生活に近いところから一つ整えるのが合っています。',
    insightTitle:'伸ばしやすいところ',
    insight:'比較的伸ばしやすいのは「{high}」です。ここを足がかりにすると、苦手な項目にも手をつけやすくなります。',
    next:'次に整えたいのは「{low}」です。今週は小さな行動を1つだけ決めて、できた感覚を作りましょう。',
    fumi:'見直しポイントが見えたのは大きな収穫です。全部を変えなくて大丈夫。まず一つできれば流れは変わります。'
  };
  if(score<80)return{
    summary:'お金の土台は少しずつできています。今の習慣を続けながら、星が少ない項目を一つ補うと安心感が上がりやすい状態です。',
    insightTitle:'あなたの強み',
    insight:'特に良いところは「{high}」です。すでにできている力を土台にすると、次の改善も無理なく進めやすくなります。',
    next:'次に伸ばしたいのは「{low}」です。一度に全部やろうとせず、今月できる小さな改善を1つ選びましょう。',
    fumi:'土台はできています。ここから一つ足すだけで、未来の安心につながります。焦らず進みましょう。'
  };
  if(score<90)return{
    summary:'かなり良い状態です。大きな不安は少なく、5つの力のバランスを見ながら低めの項目を少し足す段階です。',
    insightTitle:'あなたの強み',
    insight:'特に良いところは「{high}」です。今の習慣を続けながら、低めの項目を少し補うとさらに安定します。',
    next:'次に伸ばしたいのは「{low}」です。弱点というより、良い流れを保つための点検ポイントとして扱いましょう。',
    fumi:'かなり良い流れです。あと少し整えるだけで、もっと安心感が増します。今のペースで大丈夫です。'
  };
  return{
    summary:'とても良い状態です。家計管理や将来への備えが進んでいて、お金との向き合い方に安定感があります。満点に近い場合も、星が4つの項目は維持のための点検ポイントとして見ると自然です。',
    insightTitle:'あなたの強み',
    insight:'特に良いところは「{high}」です。コツコツ続ける力があり、今の習慣が将来の安心につながっています。',
    next:'次に見るなら「{low}」です。弱点というより、良い状態を保つための確認場所として年に一度見直しましょう。',
    fumi:'ここまで整えられているのは本当にすごいです。今の習慣を味方にして、これからも無理なく続けていきましょう。'
  };
}
function previewStars(score){
  const stars={};
  if(score>=95){POWERS.forEach(p=>stars[p]=5);return stars;}
  if(score>=90){POWERS.forEach((p,i)=>stars[p]=i===3?4:5);return stars;}
  if(score>=80){POWERS.forEach((p,i)=>stars[p]=[4,4,4,3,4][i]);return stars;}
  if(score>=50){POWERS.forEach((p,i)=>stars[p]=[3,3,3,2,3][i]);return stars;}
  if(score>=30){POWERS.forEach((p,i)=>stars[p]=[2,2,2,1,2][i]);return stars;}
  POWERS.forEach(p=>stars[p]=1);
  return stars;
}
function moneyTypeFor(result){
  if(result.score===100)return'🏆 お金マスタータイプ';
  if(result.score>=90)return'✨ 堅実コツコツタイプ';
  if(result.score>=65)return'🌳 バランス安心タイプ';
  if(result.score>=30)return'🌿 のびしろ発見タイプ';
  return'🌱 はじめの一歩タイプ';
}
function todayText(){
  const d=new Date();
  return `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`;
}
const POWER_RESULT_COPY={
  家計力:{
    high:'収入と支出を見ようとする力があり、お金の流れを整える土台があります。',
    low:'まずは収入・支出・固定費を見える化すると、他の力も伸ばしやすくなります。',
    action:'今月の収入と支出を1回だけ書き出す'
  },
  '貯める力':{
    high:'お金を残す意識や仕組みがあり、将来の安心につながる習慣を作れています。',
    low:'貯金額の大きさより、少額でも先に分ける仕組みを作ることが第一歩です。',
    action:'毎月の貯金額を小さく1つ決める'
  },
  守る力:{
    high:'急な出費やもしもの時を考える力があり、暮らしを守る意識が育っています。',
    low:'緊急時のお金、保険、契約内容などを一つ確認すると安心感が上がります。',
    action:'緊急時に使えるお金や保険を1つ確認する'
  },
  増やす力:{
    high:'将来に向けてお金を育てる視点があり、学びながら選ぶ力があります。',
    low:'投資を急ぐ必要はありません。まずはNISAなどの基本を知るところからで大丈夫です。',
    action:'NISAやiDeCoの基本を1つ調べる'
  },
  '相談する力':{
    high:'一人で抱え込まず、必要なときに調べたり相談したりする力があります。',
    low:'困ったときの相談先を知っておくと、お金の不安を一人で抱えにくくなります。',
    action:'お金で困ったときの相談先を1つメモする'
  }
};
function resultCopy(result){
  const values=Object.values(result.stars);
  const minStar=Math.min(...values);
  const maxStar=Math.max(...values);
  const isFlat=minStar===maxStar;
  const gap=maxStar-minStar;
  const highCopy=POWER_RESULT_COPY[result.high];
  const lowCopy=POWER_RESULT_COPY[result.low];
  const tone=scoreTone(result.score);
  const typeText=TYPE[result.type];
  let summary=`いまの状態：${tone.summary}\nあなたの傾向：${typeText.summary}\nまず意識したいこと：「${typeText.focus}」です。`;
  let insightTitle=tone.insightTitle;
  let strength=fillResultText(tone.insight,result);
  let next=fillResultText(tone.next,result);
  let fumi=tone.fumi;
  if(isFlat&&maxStar>=5){
    summary=`いまの状態：5つの力がすべて高く、とても安定しています。家計管理・備え・将来への準備まで、全体的に良い習慣ができています。\nあなたの傾向：${typeText.summary}\nまず意識したいこと：弱点探しより、今の良い習慣を続けることです。`;
    insightTitle='あなたの強み';
    strength='5つの力がそろって高いことが一番の強みです。どれか一つだけに偏らず、全体を見ながらお金と向き合えています。';
    next='次は新しいことを増やすより、年に一度の点検日を決めて、今の良い状態を保ちましょう。';
    fumi='満点に近いすばらしい結果です。ここまで整えられているので、これからは無理に増やすより、続けることを大切にしましょう。';
  }else if(isFlat&&maxStar<=2){
    summary=`いまの状態：5つの力が全体的にこれから整えられる状態です。どれか一つだけが悪いというより、まずはお金の流れを見える化するところから始めると進みやすくなります。\nあなたの傾向：${typeText.summary}\nまず意識したいこと：「${typeText.focus}」です。`;
    insightTitle='今見えていること';
    strength='今は特定の強みを探すより、全体の土台を作る段階です。小さな確認を一つ始めるだけでも、5つの力をまとめて底上げしやすくなります。';
    next='まずは家計の見える化から始めましょう。今日使ったお金を一つメモするだけでも、次に整える場所が見つけやすくなります。';
    fumi='ここから整えれば大丈夫です。全部を一気に変えなくていいので、まずは見える化から一緒に始めましょう。';
  }else if(isFlat){
    summary=`いまの状態：5つの力が同じくらいのバランスで並んでいます。大きな偏りは少ないので、全体を少しずつ底上げしていくと安心感が増えます。\nあなたの傾向：${typeText.summary}\nまず意識したいこと：「${typeText.focus}」です。`;
    insightTitle='あなたの強み';
    strength='特定の一つだけに偏りすぎず、全体を同じペースで整えやすい状態です。小さな行動を一つ決めると、5つの力がまとめて伸びやすくなります。';
    next='今月できる小さな改善を一つ選び、全体の底上げにつなげましょう。';
  }else if(result.score>=80&&minStar<=2){
    summary=`いまの状態：総合点は高く、できていることが多い状態です。ただし「${result.low}」だけ星が少ないため、ここを整えると結果への納得感と安心感がさらに高まります。\nあなたの傾向：${typeText.summary}\nまず意識したいこと：${lowCopy.low}`;
    insightTitle='あなたの強み';
    strength=`強みは「${result.high}」です。${highCopy.high} すでに高い力があるからこそ、低く出た「${result.low}」を少し補うだけで全体のバランスがかなり良くなります。`;
    next=`次に見るなら「${result.low}」です。${lowCopy.action}ことから始めると、高得点をさらに安定させやすくなります。`;
    fumi=`総合点はしっかり高いです。あとは「${result.low}」を一つだけ整えれば、もっと安心できる結果になります。`;
  }else if(gap>=3){
    summary=`いまの状態：点数だけで見るより、5つの力の差を見ることが大切です。「${result.high}」は高く出ていますが、「${result.low}」は優先して整えると全体の安心感が上がります。\nあなたの傾向：${typeText.summary}\nまず意識したいこと：${lowCopy.low}`;
    insightTitle=result.score<50?'良い芽と見直しポイント':'あなたの強み';
    strength=`高く出ている「${result.high}」は今の支えです。${highCopy.high}`;
    next=`次に整えたいのは「${result.low}」です。${lowCopy.action}ことを、最初の一歩にしましょう。`;
    fumi=`できている力もちゃんとあります。だからこそ、低く出た「${result.low}」を一つ整えるだけで、結果の印象はかなり変わります。`;
  }else if(result.score<30&&maxStar>=4){
    summary=`いまの状態：総合点はまだ低めですが、「${result.high}」には良い芽があります。全部を一気に整えるより、まずは低く出た項目を一つずつ見える化する段階です。\nあなたの傾向：${typeText.summary}\nまず意識したいこと：「${result.low}」を小さく確認することです。`;
    insightTitle='今見えていること';
    strength=`「${result.high}」は今の支えになっています。この力を入口にしながら、低く出た項目を一つずつ整えていきましょう。`;
    next=`次に整えたいのは「${result.low}」です。今日できる確認を一つだけ選ぶと進みやすいです。`;
  }
  result.summary=summary;
  result.insightTitle=insightTitle;
  result.strength=strength;
  result.next=next;
  result.fumi=fumi;
  result.moneyType=moneyTypeFor(result);
  result.detailType=result.type&&result.moneyType&&!result.moneyType.includes(result.type)?`くわしいタイプ：${result.type}`:'';
}
function makeResult(){const raw=answers.reduce((s,a)=>s+a.score,0);const score=Math.round(raw/75*100);const rank=health(score);const group={};POWERS.forEach(p=>group[p]=[]);answers.forEach(a=>group[a.power].push(a.score));const stars={};POWERS.forEach(p=>{const avg=group[p].reduce((s,v)=>s+v,0)/group[p].length;stars[p]=Math.max(1,Math.round(avg/3*5));});const type=decideType(score,stars);const low=Object.entries(stars).sort((a,b)=>a[1]-b[1])[0][0];const high=Object.entries(stars).sort((a,b)=>b[1]-a[1])[0][0];const h=HEALTH[rank];result={score,rank,type,stars,low,high,img:charaFor(rank,score),healthText:h.label,missions:null};resultCopy(result);result.missions=missions(rank,low,type);renderResult();show('result');}
function previewStarsFromParams(params,score){
  const custom=params.get('stars');
  if(!custom)return previewStars(score);
  const nums=custom.split(',').map(n=>Math.max(1,Math.min(5,Number(n)||1)));
  const stars={};
  POWERS.forEach((p,i)=>stars[p]=nums[i]||1);
  return stars;
}
function showResultPreview(){const params=new URLSearchParams(location.search);if(params.get('preview')!=='result')return false;const score=Number(params.get('score')||45);const rank=health(score);const stars=previewStarsFromParams(params,score);const type=decideType(score,stars);const low=Object.entries(stars).sort((a,b)=>a[1]-b[1])[0][0];const high=Object.entries(stars).sort((a,b)=>b[1]-a[1])[0][0];const h=HEALTH[rank];result={score,rank,type,stars,low,high,img:charaFor(rank,score),healthText:h.label,missions:null};resultCopy(result);result.missions=missions(rank,low,type);renderResult();show('result');return true;}
function imageAsset(src){return new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=reject;img.src=src;});}
function drawSaveSection(ctx,title,body,y){ctx.fillStyle='#ffffff';roundRect(ctx,78,y,924,10,28);ctx.fill();ctx.fillStyle='#168d84';ctx.font='bold 34px sans-serif';ctx.textAlign='left';ctx.fillText(title,126,y+58);ctx.fillStyle='#4f3b34';ctx.font='30px sans-serif';const nextY=wrapText(ctx,body,126,y+112,820,46);const h=Math.max(150,nextY-y+30);ctx.fillStyle='#ffffff';roundRect(ctx,78,y,924,h,28);ctx.fill();ctx.strokeStyle='rgba(38,157,146,.22)';ctx.lineWidth=3;roundRect(ctx,78,y,924,h,28);ctx.stroke();ctx.fillStyle='#168d84';ctx.font='bold 34px sans-serif';ctx.fillText(title,126,y+58);ctx.fillStyle='#4f3b34';ctx.font='30px sans-serif';wrapText(ctx,body,126,y+112,820,46);return y+h+26;}
async function saveImage(){if(!result)return;const saveBtn=$('saveBtn');const oldText=saveBtn.textContent;saveBtn.textContent='保存中...';saveBtn.disabled=true;try{const c=document.createElement('canvas');c.width=1080;c.height=3300;const ctx=c.getContext('2d');ctx.fillStyle='#fff3df';ctx.fillRect(0,0,c.width,c.height);ctx.fillStyle='#bdf0e8';ctx.beginPath();ctx.arc(930,160,190,0,Math.PI*2);ctx.fill();ctx.fillStyle='#ffc9ce';ctx.beginPath();ctx.arc(130,3080,250,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fffefa';roundRect(ctx,54,54,972,3192,54);ctx.fill();ctx.strokeStyle='rgba(38,157,146,.55)';ctx.lineWidth=6;roundRect(ctx,88,88,904,3124,42);ctx.stroke();ctx.textAlign='center';ctx.fillStyle='#3f2c25';ctx.font='bold 48px sans-serif';ctx.fillText('お金の健康診断',540,162);ctx.fillStyle='#168d84';ctx.font='bold 58px sans-serif';let y=252;y=wrapText(ctx,result.moneyType||result.type,540,y,820,70);ctx.fillStyle='#f04f58';ctx.font='bold 150px sans-serif';ctx.fillText(String(result.score),500,470);ctx.font='bold 52px sans-serif';ctx.fillText('点',660,470);ctx.fillStyle='#168d84';ctx.font='bold 38px sans-serif';ctx.fillText(result.healthText,540,548);const img=await imageAsset(result.img);ctx.drawImage(img,390,582,300,300);y=930;ctx.textAlign='left';ctx.fillStyle='#3f2c25';ctx.font='bold 38px sans-serif';ctx.fillText('5つの力',126,y);y+=58;POWERS.forEach(p=>{ctx.font='bold 32px sans-serif';ctx.fillStyle='#3f2c25';ctx.fillText(p,126,y);ctx.fillStyle='#e6a300';ctx.font='bold 38px sans-serif';ctx.fillText(star(result.stars[p]),430,y);y+=58;});y+=14;y=drawSaveSection(ctx,'総合コメント',result.summary,y);y=drawSaveSection(ctx,result.insightTitle,result.strength,y);y=drawSaveSection(ctx,'次の一歩',result.next,y);ctx.fillStyle='#ffffff';roundRect(ctx,78,y,924,300,28);ctx.fill();ctx.strokeStyle='rgba(38,157,146,.22)';ctx.lineWidth=3;roundRect(ctx,78,y,924,300,28);ctx.stroke();ctx.fillStyle='#168d84';ctx.font='bold 34px sans-serif';ctx.fillText('今日からのミッション3つ',126,y+58);let my=y+116;ctx.fillStyle='#4f3b34';ctx.font='30px sans-serif';result.missions.forEach(m=>{ctx.strokeStyle='#168d84';ctx.lineWidth=5;roundRect(ctx,126,my-26,30,30,6);ctx.stroke();const nextY=wrapText(ctx,m,176,my,760,42);my=Math.max(my+68,nextY+18);});y=Math.max(y+300,my+22);const fumi=await imageAsset(ASSETS.good);ctx.fillStyle='#ffffff';roundRect(ctx,78,y,924,260,28);ctx.fill();ctx.strokeStyle='rgba(38,157,146,.22)';ctx.lineWidth=3;roundRect(ctx,78,y,924,260,28);ctx.stroke();ctx.drawImage(fumi,110,y+68,150,150);ctx.fillStyle='#168d84';ctx.font='bold 34px sans-serif';ctx.fillText('ふみゆから一言',126,y+58);ctx.fillStyle='#4f3b34';ctx.font='30px sans-serif';wrapText(ctx,result.fumi,292,y+102,650,44);y+=294;ctx.textAlign='center';ctx.fillStyle='#168d84';ctx.font='bold 30px sans-serif';ctx.fillText('診断日：'+todayText(),540,y);y+=50;ctx.fillStyle='#f04f58';ctx.font='bold 32px sans-serif';ctx.fillText('半年後にもう一度診断してみよう！',540,y);y+=58;ctx.fillStyle='#3f2c25';ctx.font='bold 30px sans-serif';ctx.fillText('今日から1つだけ始めてみましょう。',540,y);y+=44;ctx.fillText('半年後には、きっと今とは違う結果になっています。',540,y);y+=60;ctx.fillStyle='#168d84';ctx.font='bold 28px sans-serif';ctx.fillText('fumiyu_moneylife',540,y);const out=document.createElement('canvas');out.width=1080;out.height=Math.min(3300,Math.ceil(y+90));out.getContext('2d').drawImage(c,0,0);downloadCanvas(out);}catch(e){alert('画像保存に失敗しました。もう一度お試しください。');}finally{saveBtn.textContent=oldText;saveBtn.disabled=false;}}
async function saveImage(){const target=document.querySelector('.result-phone');if(!result||!target)return;const saveBtn=$('saveBtn');const oldText=saveBtn.textContent;saveBtn.textContent='保存中...';saveBtn.disabled=true;try{const html2canvas=await loadHtml2Canvas();const canvas=await html2canvas(target,{backgroundColor:'#fff8ec',scale:3,useCORS:true,allowTaint:false,scrollX:0,scrollY:0,width:target.scrollWidth,height:target.scrollHeight,windowWidth:target.scrollWidth,windowHeight:target.scrollHeight});downloadCanvas(canvas);}catch(e){alert('画像保存に失敗しました。もう一度お試しください。');}finally{saveBtn.textContent=oldText;saveBtn.disabled=false;}}
window.addEventListener('DOMContentLoaded',()=>{$('startBtn').onclick=()=>{idx=0;selected=null;answers=[];renderQuestion();show('question');};$('backBtn').onclick=prevQuestion;$('prevBtn').onclick=prevQuestion;$('nextBtn').onclick=nextQuestion;$('topBtn').onclick=()=>show('top');$('againBtn').onclick=()=>show('top');$('saveBtn').onclick=saveImage;window.addEventListener('resize',syncAnswerHeights);showResultPreview();});
