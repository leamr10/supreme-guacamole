function goBack () {
    history.back()
    console.log("Test of Go Back");
}

function checkout () {
    document.location.href = "/invoice";
}





document.getElementById("continue").addEventListener("click", goBack);
document.getElementById("checkout").addEventListener("click", checkout);