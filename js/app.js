import { removeClass, addClass } from "../js/util.js";
import { loadMediaLinks } from "../js/section.js";

let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    let st = window.scrollY || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      removeClass("header", "show");
      addClass("header", "hide");
    } else {
      removeClass("header", "hide");
      addClass("header", "show");
    }

    document.getElementById("menu-toggle").checked = false;

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

    // if top of the page
    if (st === 0) {
      removeClass("header", "header-color");
    } else {
      addClass("header", "header-color");
    }
  },
  false
);

// load section contents
document.addEventListener("DOMContentLoaded", async function () {
  //load data to sections
  await loadMediaLinks();
});

// Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("serviceworker.js");
}
