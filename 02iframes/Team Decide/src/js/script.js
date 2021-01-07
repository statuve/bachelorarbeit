const bc = new BroadcastChannel('eventChannel');

console.log(bc.name);

window.onload(bc.postMessage("wtf"));

bc.onmessage = function (ev) {
    console.log("jaja");
}