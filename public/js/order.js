function addToOrder () {
    const meal_id = document.querySelector("input").value;
    const menuItems = JSON.parse(localStorage.getItem("menu-items")) || []
    menuItems.push(meal_id);
    localStorage.setItem("menu-items", JSON.stringify(menuItems));
    document.location.href = "/confirm";
};







document.getElementById("add-to-order").addEventListener("click", addToOrder);