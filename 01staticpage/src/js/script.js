const button = document.getElementById("button");
const zahl = document.getElementById("zahl");

button.addEventListener("click", function () {
    countup();
});

function countup() {
    zahl.innerHTML = parseInt(zahl.innerHTML) + 1;
}