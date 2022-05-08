import * as Util from "../js/util.js";
import * as Section from "../js/section.js";

let ACTIVE_SECTION = "home"; // default

// routing function
function goTo(sectionId) {
  Array.from(document.querySelectorAll("main>section")).forEach((section) => {
    section.style.display = "none";
    Util.removeActive(section.id + "-button");
  });
  document.getElementById(sectionId).style.display = "flex";
  Util.setActive(sectionId + "-button");

  ACTIVE_SECTION = sectionId;

  // change bg & margin if in landing page
  if (sectionId === "home") {
    document.body.style.backgroundColor = "#0d1821";
    document.getElementById("header").style.display = "none";
  } else {
    document.body.style.backgroundColor = "#184e77";
    document.getElementById("header").style.display = "flex";
  }

  // set button size and margin
  Util.resizeNavButtons(768);
  Util.setMainMargin(ACTIVE_SECTION, 768);

  // reset scrolling
  window.scrollTo(0, 0);
  // set opacity to 1 on first load
  // (body opacity is set to 0 on css to avoid visual bugs on load)
  document.body.style.opacity = 1;
}

// default route
goTo(ACTIVE_SECTION);

// load listeners to buttons
Array.from(document.querySelectorAll("main>section")).forEach((section) => {
  document.getElementById(section.id + "-button").addEventListener(
    "click",
    function () {
      goTo(section.id);
    },
    false
  );
  if (section.id != "home") {
    document.getElementById(section.id + "-button-home").addEventListener(
      "click",
      function () {
        goTo(section.id);
      },
      false
    );
  }
});

// load section contents
document.addEventListener("DOMContentLoaded", async function () {
  //load data to sections
  await Section.loadMediaLinks();
  await Section.loadProjects();
  await Section.loadSkills();
});

// dynamic resizes
window.onresize = () => {
  Util.resizeNavButtons(768);
  Util.setMainMargin(ACTIVE_SECTION, 768);
};

// Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("serviceworker.js");
}
