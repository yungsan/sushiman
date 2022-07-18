// amount
const upBtn = document.querySelector('#up');
const downBtn = document.querySelector('#down');
const amount = document.querySelector('#amount');

upBtn.addEventListener('click', () => increase());
downBtn.addEventListener('click', () => decrease());

function increase(){
  amount.innerText = Number(amount.innerText) + 1;
}

function decrease(){
  if (Number(amount.innerText) <= 1) return;
  amount.innerText = Number(amount.innerText) - 1;
}

// addToCart

// favorite

// wishlist