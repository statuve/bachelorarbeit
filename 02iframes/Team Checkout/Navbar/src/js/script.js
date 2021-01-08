const bc = new BroadcastChannel('eventChannel');

console.log("iam here too");

bc.onmessage = function (e) {
    console.log(e.data);
    console.log("hall");
}
