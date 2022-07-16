const input = document.querySelector('#changeImage');
const image = document.querySelector('#image')

input.addEventListener('change', () => {
  image.src = URL.createObjectURL(input.files[0]);
})

image.addEventListener('click', () => {
  input.click();
})