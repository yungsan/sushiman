const navLinks = document.querySelectorAll('#sidebarNav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    console.log(link);
    document.querySelector('.active').classList.remove('active');
    link.classList.add('active');
  })
})