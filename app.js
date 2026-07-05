const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
  startButton.classList.remove('breathe');
  startButton.textContent = '準備中です →';

  // Phase2-1ではホーム画面のみ完成。
  // 次のPhaseでパスワード画面へ切り替えます。
  window.setTimeout(() => {
    startButton.innerHTML = '診断をはじめる <span aria-hidden="true">→</span>';
    startButton.classList.add('breathe');
    alert('次のPhaseでパスワード画面につながります。');
  }, 350);
});
