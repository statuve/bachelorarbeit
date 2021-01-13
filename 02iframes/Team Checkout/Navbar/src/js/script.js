const checkoutNavbarBC = new BroadcastChannel('eventChannel');

checkoutNavbarBC.onmessage = function (ev) {
    if(ev.data == "buttonClicked") {
        const warenkorbCount = document.getElementById("zahl");
        warenkorbCount.innerHTML = parseInt(warenkorbCount.innerHTML) + 1;
    } 
}