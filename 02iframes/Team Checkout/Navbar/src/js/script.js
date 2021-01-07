const bc = new BroadcastChannel('eventChannel');

bc.onmessage = function (e) {
    console.log(e.data);
}
