const bc = new BroadcastChannel('eventChannel');



window.onload(bc.postMessage("wtf"));

bc.onmessage = function (ev) {
    console.log("jaja");
}