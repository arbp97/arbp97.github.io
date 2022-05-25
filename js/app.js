import { removeClass, addClass, isInViewport } from "../js/util.js";
import { loadSkillCards, loadProjectCards } from "../js/section.js";

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

    // fires when the element is on screen
    if (isInViewport("skills-title")) {
      document.getElementById("skill-box").classList.add("slide-in", "blue");
      document.getElementById("skill-box").style.opacity = 1;
    }

    if (isInViewport("about-title")) {
      document.getElementById("about-text").classList.add("slide-in", "blue");
      document.getElementById("about-text").style.opacity = 1;
    }

    let projects = document.getElementById("project-box").children;

    for (const p of projects) {
      // when the title of the project is on viewport
      if (isInViewport(p.firstElementChild.firstElementChild)) {
        p.classList.add("slide-in");
        p.style.opacity = 1;
      }
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
  await loadSkillCards();
  await loadProjectCards();
});

// Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("serviceworker.js");
}
