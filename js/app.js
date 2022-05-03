import * as Util from "../js/util.js";
import * as Section from "../js/section.js";

// routing function
function goTo(sectionId) {
  Array.from(document.querySelectorAll("main>section")).forEach((section) => {
    section.style.display = "none";
    Util.removeActive(section.id + "-button");
  });
  document.getElementById(sectionId).style.display = "flex";
  Util.setActive(sectionId + "-button");
}

// default route
goTo("about");

// load listeners to buttons
Array.from(document.querySelectorAll("main>section")).forEach((section) => {
  document.getElementById(section.id + "-button").addEventListener(
    "click",
    function () {
      goTo(section.id);
    },
    false
  );
});

// load section contents
document.addEventListener("DOMContentLoaded", async function () {
  //load data to sections
  await Section.loadMediaLinks();
  await Section.loadProjects();
  await Section.loadSkills();
});

// when starting width is close to mobile width
if (window.innerWidth <= 768) Util.resizeNavButtons();
// nav button dynamic resizing
window.onresize = Util.resizeNavButtons;

// Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("serviceworker.js");
}

// Install 
let beforeInstallEvent = null;

window.addEventListener("beforeinstallprompt", event => {
  beforeInstallEvent = event;
});
