const menuItems = JSON.parse (localStorage.getItem("menu-item"));

for (let i=0; i < menuItems.length; i++) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = 
    `<td>${menuItems[i].name}</td>
     <td>${menuItems[i].price}</td>
    `;

document.querySelector('#invoice-table').appendChild(newRow);
}