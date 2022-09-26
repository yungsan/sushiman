const data = JSON.parse(localStorage.getItem("cart"));
const parent = document.querySelector('#carts');

for (const item of data) {
  const html = `
  <div class="flex items-center w-full py-3 px-3 border-l-[2px] border-sushired">
    <div class="w-[30%] flex items-center">
      <img src=${item.foodThumbnail} class="object-cover max-h-20 m-auto"/>
    </div>
    <div class='flex flex-wrap w-full px-10'>
      <div class="w-full text-xl font-bold py-3">${item.foodName}</div>
      <div class="flex items-center">
        <svg class="noselect w-6 h-6 fill-sushired cursor-pointer down" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path>
        </svg>
        <div class="mx-1 border-2 px-2 h-fit amount border-sushired bg-sushired text-white font-bold">${item.amount}</div>
        <svg class="noselect w-6 h-6 fill-sushired cursor-pointer up" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path>
        </svg>
      </div>
    </div>
    <div class=" font-bold price text-sushired text-lg">$${item.foodPrice}</div>

    
  </div>
  `;
  parent.innerHTML += html.trim();
}
