const menuItems = JSON.parse (localStorage.getItem("menu-item") || []);
let totalPriceEl = document.getElementById('total-price');
let totalPrice = 0;
for (let i=0; i < menuItems.length; i++) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = 
    `<td>${menuItems[i].name}</td>
     <td>${menuItems[i].price}</td>
    `;
totalPrice = menuItems[i].price++;
document.querySelector('#invoice-table').appendChild(newRow);
}
console.log(totalPrice);
totalPriceEl.textContent = totalPrice;