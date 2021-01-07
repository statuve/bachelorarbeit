const bc = new BroadcastChannel('eventChannel');

bc.onmessage = function (ev) {
    if(ev.data == "buttonClicked") {
        var zahl = parseInt(document.getElementById("zahl").innerHTML);
        document.getElementById("zahl").innerHTML = zahl + 1;
    }
}
