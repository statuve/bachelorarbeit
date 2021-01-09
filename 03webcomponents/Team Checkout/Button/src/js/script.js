  const checkoutButtonBC = new BroadcastChannel('eventChannel');

  class Button extends HTMLElement {
    connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style> @import "css/bootstrap.css"; </style>

      <button id="button">In den Warenkorb</button>
      `;
        this.addEventListener("click", () => {
            checkoutButtonBC.postMessage('buttonClicked');
        });
    }
  }

  window.customElements.define(
    "checkout-button",
    Button
  );