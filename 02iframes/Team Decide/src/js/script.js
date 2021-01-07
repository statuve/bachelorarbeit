const bc = new BroadcastChannel('eventChannel');

console.log(bc.name);

bc.postMessage("wtf");

bc.onmessage = function (e) {
    console.log(e.data);
}