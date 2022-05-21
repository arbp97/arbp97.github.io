import { removeClass, addClass } from "../js/util.js";
//import * as Section from "../js/section.js";

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

      // if top of the page
      if (st === 0) {
        removeClass("header", "header-color");
        addClass("header", "gradient-blue");
      } else {
        removeClass("header", "gradient-blue");
        addClass("header", "header-color");
      }
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);

/*
// load section contents
document.addEventListener("DOMContentLoaded", async function () {
  //load data to sections
  await Section.loadMediaLinks();
  await Section.loadProjects();
  await Section.loadSkills();
});
*/

// Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("serviceworker.js");
}
