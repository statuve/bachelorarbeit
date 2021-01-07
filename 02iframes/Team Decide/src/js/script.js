const bc = new BroadcastChannel('eventChannel');

bc.onmessage = function (ev) {
    console.log("jaja");
}