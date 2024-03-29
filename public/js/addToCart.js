const cart = JSON.parse(localStorage.getItem('cart')) || [];

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
const addToCartBtn = document.querySelector('#addToCart');
const foodId = document.querySelector('#foodId').innerText;
const foodThumbnail = document.querySelector('#foodThumbnail').src;
const foodName = document.querySelector('#foodName').innerText;
const foodPrice = document.querySelector('#foodPrice').innerText.slice(1, this.length-3);

addToCartBtn.addEventListener('click', () => {
  addToCart()
});

function addToCart(){
  toast();
  const data = {
    foodId,
    foodThumbnail,
    foodName,
    foodPrice: +foodPrice,
    amount: +amount.innerText
  }
  console.log(data);
  cart.unshift(data);
  localStorage.setItem('cart', JSON.stringify(cart));
}

// favorite
const favoriteBtn = document.querySelector('#favorite');
favoriteBtn.addEventListener('click', () => favorite());

function favorite(){
  favoriteBtn.classList.toggle('fill-sushired');
}

// wishlist

// noti
function toast(type){
  const div = document.createElement('div');
  div.classList.add('w-[30rem]','h-20','bg-white','flex','items-center','px-3','border-l-4','border-sushired','shadow-lg', 'mb-5', 'slide-in-right'); 
  const msg = `
  <svg class='h-8 w-8 mr-3 stroke-sushired' xmlns='http://www.w3.org/2000/svg' fill='none' viewbox='0 0 24 24' stroke='currentColor' stroke-width='2'>
    <path stroke-linecap='round' stroke-linejoin='round' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
  </svg>
  <p class='flex-1 font-bold'>
    "${document.querySelector('#foodName').innerHTML}" 
    <span class='font-normal'>was successfully added to your cart! </span>
  </p>`
  div.innerHTML += msg.trim();
  const toast = document.querySelector('.toast');
  toast.appendChild(div);
  setTimeout(() => {
    toast.removeChild(div);
  }, 3000);
}

function sendData(url, params){
  const http = new XMLHttpRequest();
  http.open('POST', url, true);

  //Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
          alert(http.responseText);
      }
  }
  http.send(params);
}