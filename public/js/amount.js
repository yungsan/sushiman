const upBtn = document.querySelectorAll('.up');
const downBtn = document.querySelectorAll('.down');
const amount = document.querySelectorAll('.amount');
const prices = document.querySelectorAll('.price');
const pricesAfter = document.querySelectorAll('.priceAfter');


upBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    increase(i);
    changePrice(i);
  });
});

downBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => decrease(i));
})


function increase(i){
  const amt = Number(amount[i].innerText);
  amount[i].innerText = amt + 1;  
}

function decrease(i){
  const amt = Number(amount[i].innerText);
  if (amt <= 1) return;
  amount[i].innerText = amt - 1;
}

