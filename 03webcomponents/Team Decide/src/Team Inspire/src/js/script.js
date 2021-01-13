class Recommendations extends HTMLElement {
    connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style> @import "css/bootstrap.css"; </style>

      <p>Ebenfalls interessant:</p>
      <img src="Team Inspire/src/assets/rsz_seagate_backup-plus-slim_1-2tb_rot_front.jpg" class="img-fluid" alt="Responsive image">
      <img src="Team Inspire/src/assets/rsz_toshiba_blau.jpg" class="img-fluid" alt="Responsive image">
      <img src="Team Inspire/src/assets/rsz_verbatim_gold.jpg" class="img-fluid" alt="Responsive image">
      <img src="Team Inspire/src/assets/rsz_zinc_lila.jpg" class="img-fluid" alt="Responsive image">
      <img src="Team Inspire/src/assets/rsz_platinum_grün.jpg" class="img-fluid" alt="Responsive image">  
      `;
    }
  }

  window.customElements.define(
    "inspire-recommendations",
    Recommendations
  );
  
