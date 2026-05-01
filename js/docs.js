// AngryBirds Framework - Docs Copy Button
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const code = btn.closest('.code-block').querySelector('code').innerText;
    navigator.clipboard.writeText(code).then(() => {
      btn.innerText = '✅ Copiado';
      setTimeout(() => btn.innerText = '📋 Copiar', 2000);
    });
  });
});
