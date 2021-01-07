const bc = new BroadcastChannel('eventChannel');

console.log(bc.name);

bc.postMessage("wtf");

bc.onmessage = function (ev) {
    console.log("jaja");
}