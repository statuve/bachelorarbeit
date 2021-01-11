import { getAppStatus, registerApplication, start } from "single-spa";
import singleSpaHtml from "single-spa-html";

import { recommendations } from "../Team Inspire/inspire-recommendations.js";
import { navbar } from "../Team Checkout/checkout-navbar.js";
import { button } from "../Team Checkout/checkout-button.js";

const htmlLifecyclesNav = singleSpaHtml({
  template: navbar(),
});

const htmlLifecyclesButton = singleSpaHtml({
  template: button(),
});

const htmlLifecyclesReco = singleSpaHtml({
  template: recommendations(),
});

registerApplication(
  "checkout-navbar",
  htmlLifecyclesNav,
  (location) => location.pathname.startsWith("/"),
  { domElement: document.getElementById("checkout-navbar") }
);
registerApplication(
  "checkout-button",
  htmlLifecyclesButton,
  (location) => location.pathname.startsWith("/"),
  { domElement: document.getElementById("checkout-button") }
);
registerApplication(
  "inspire-recommendations",
  htmlLifecyclesReco,
  (location) => location.pathname.startsWith("/"),
  { domElement: document.getElementById("inspire-recommendations") }
);

start({
  urlRerouteOnly: true,
});
