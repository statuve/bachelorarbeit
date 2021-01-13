import { recommendations } from "/Team Inspire/inspire-recommendations.js";
import { navbar } from "/Team Checkout/checkout-navbar.js";
import { button, buttonCommunication } from "/Team Checkout/checkout-button.js";

const singleSpa = window.singleSpa;
const singleSpaHtml = window.singleSpaHtml;

const htmlLifecyclesNavbar = singleSpaHtml.default({
    template: navbar(),
});

const htmlLifecyclesButton = singleSpaHtml.default({
    template: button(),
});

const htmlLifecyclesReco = singleSpaHtml.default({
    template: recommendations(),
});


singleSpa.registerApplication(
    "navbar",
    htmlLifecyclesNavbar,
    (location) => location.pathname.startsWith("/"),
    { domElement: document.getElementById("checkout-navbar") }
);

singleSpa.registerApplication(
    "button",
    htmlLifecyclesButton,
    (location) => location.pathname.startsWith("/"),
    { domElement: document.getElementById("checkout-button") }
);

singleSpa.registerApplication(
    "recommendations",
    htmlLifecyclesReco,
    (location) => location.pathname.startsWith("/"),
    { domElement: document.getElementById("inspire-recommendations") }
);


singleSpa.start();

window.onload = function () {
    buttonCommunication();
};