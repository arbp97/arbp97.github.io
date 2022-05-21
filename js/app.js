//import * as Util from "../js/util.js";
//import * as Section from "../js/section.js";

let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      document.getElementById("header").classList.add("hidden");
    } else {
      document.getElementById("header").classList.remove("hidden");
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
