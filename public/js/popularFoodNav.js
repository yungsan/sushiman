document.querySelectorAll('#popularFood button.popularFood').forEach(btn => {
  
  btn.addEventListener('click', (e) => {
    console.log(btn);
    if (btn.classList.contains('active')) {
      return;
    }
    document.querySelector('.active .bg-sushidim').style.opacity = '.5'; 
    document.querySelector('.active').classList.remove('active');
    btn.querySelector('.bg-sushidim').style.opacity = '0';
    btn.classList.add('active');
  })
  
})