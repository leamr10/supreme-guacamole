function goBack () {
    document.history.back()
}

function checkout () {
    document.location.href = "/invoice";
}





document.getElementById("continue").addEventListener("click", goBack);
document.getElementById("checkout").addEventListener("click", checkout);