const imgs = document.querySelectorAll('.myResize');
imgs.forEach(img => {
  const h = img.offsetHeight;
  if (h < 200) {
    img.style.width = '60%';
  }
})