const menuItems = JSON.parse(localStorage.getItem("menu-items") || []);
let totalPriceEl = document.getElementById('total-price');
let totalPrice = 0;
for (let i = 0; i < menuItems.length/2; i++) {
    let newRow = document.createElement('tr');
    const mealEl = document.createElement('td');
    const priceEl = document.createElement('td');
    mealEl.innerHTML = menuItems[i*2];
    priceEl.innerHTML = menuItems[i*2+1];
    totalPrice += parseFloat(menuItems[i*2+1]);
    newRow.appendChild(mealEl);
    newRow.appendChild(priceEl);
    document.querySelector('#invoice-table').appendChild(newRow);
}
console.log(totalPrice);
totalPriceEl.textContent = totalPrice;