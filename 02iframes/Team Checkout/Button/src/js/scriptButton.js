const bc = new BroadcastChannel('eventChannel');

var theButton = document.getElementById("button");

theButton.addEventListener("click", function() {
    bc.postMessage("buttonClicked");
})