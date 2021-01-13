const checkoutButtonBC = new BroadcastChannel("eventChannel");

export function button() {
  return `
      <button id="button">In den Warenkorb</button>
    `;
}

export function buttonCommunication() {
  document.getElementById("button").addEventListener("click", () => {
    checkoutButtonBC.postMessage("buttonClicked");
  });
}
