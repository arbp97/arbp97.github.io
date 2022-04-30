import * as Util from "../js/util.js";
import * as Grid from "../js/grid.js";
import * as Slider from "../js/slider.js";

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

// load tab content
document.addEventListener("DOMContentLoaded", async function () {
  await Grid.loadMediaLinks();
  //load projects before initializing splide
  await Slider.loadProjects();

  new Splide("#project-slider", {
    perPage: 2,
    gap: "1rem",
    height: "50vh",
    breakpoints: {
      900: {
        direction: "ttb",
        perPage: 2,
        pagination: false,
        arrows: false,
        drag: false,
        height: "fit-content",
      },
    },
  }).mount();
});

// when starting width is close to mobile width
if (window.innerWidth <= 768) Util.resizeNavButtons();
// nav button dynamic resizing
window.onresize = Util.resizeNavButtons;
