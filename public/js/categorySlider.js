const categories = document.querySelectorAll('#categorySlider button');

categories.forEach(btn => {
  btn.addEventListener('click', () => {
    const isActive = btn.classList.contains('active');
    if (isActive) {
      return;
    } 
    else {
      document.querySelector('#categorySlider .active').classList.remove('active');
      btn.classList.add('active');
    }
  })
})

