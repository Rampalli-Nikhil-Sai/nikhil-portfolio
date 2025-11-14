
document.addEventListener('scroll', () => {
  document.querySelectorAll('.fadeUp').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) el.classList.add('active');
  });
});
