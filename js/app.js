import { removeClass, addClass } from "../js/util.js";
import { loadMediaLinks, loadSkillCards } from "../js/section.js";

// header behavior
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

// smooth scrolling on anchor link
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// load section contents
document.addEventListener("DOMContentLoaded", async function () {
  //load data to sections
  await loadMediaLinks();
  await loadSkillCards();
});

// Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("serviceworker.js");
}
