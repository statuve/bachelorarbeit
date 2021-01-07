const bc = new BroadcastChannel('eventChannel');

const theButton = document.getElementById("button");

theButton.addEventListener("click", function() {
    bc.postMessage("buttonClicked");
})