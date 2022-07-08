let even = true
let py = 160;
const items = document.querySelectorAll('.meomeo')

for (let i = 0; i < items.length; i++){
  if (i > 1){
    items[i].style.height = items[i-1].offsetHeight + 'px';
  }
  else if (even) {
    items[i].style.height = py + items[i].offsetWidth - items[i].offsetHeight + 'px';
    even = !even;
  } else {
    items[i].style.height = items[i-1].offsetHeight + 'px';
    even = !even;
  }
}

