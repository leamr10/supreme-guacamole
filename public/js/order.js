function addToOrder (target) {
    const meal_id = target.parentElement.querySelector("input").value;
    const price = target.parentElement.querySelector("price").value;
    const menuItems = JSON.parse(localStorage.getItem("menu-items")) || []
    menuItems.push(meal_id, price);
    localStorage.setItem("menu-items", JSON.stringify(menuItems));
    document.location.href = "/confirm";
};







document.querySelector(".meal-container").addEventListener("click", function(event){
    if (event.target.id ==="add-to-order"){
        addToOrder(event.target);
    }
});