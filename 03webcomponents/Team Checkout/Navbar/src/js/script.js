const checkoutNavbarBC = new BroadcastChannel('eventChannel');

class Navbar extends HTMLElement {
    connectedCallback() {
    const navbarInstance = this; //Needed to have a reference for the communication method
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style> @import "css/bootstrap.css"; </style>

      <div class="col-sm-12">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Der Hardware Shop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Angebote</a>
            </li>
          </ul>
          <span class="mr-1">Es befinden sich </span>
          <span id="zahl">0</span>
          <span class="ml-1"> Items im Warenkorb</span>
        </div>
      </nav>
    </div>
      `;
        checkoutNavbarBC.onmessage = function (ev) {
            if(ev.data == "buttonClicked") {
                const warenkorbCount = navbarInstance.shadowRoot.getElementById("zahl");
                warenkorbCount.innerHTML = parseInt(warenkorbCount.innerHTML) + 1;
            } 
        }
    }
  }

  window.customElements.define(
    "checkout-navbar",
    Navbar
  );
  

  
