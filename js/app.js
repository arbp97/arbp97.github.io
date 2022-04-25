import { setActive, removeActive } from "../js/util.js";

// routing function
function goTo(sectionId) {
  Array.from(document.querySelectorAll("main>section")).forEach((section) => {
    section.style.display = "none";
    removeActive(section.id + "-button");
  });
  document.getElementById(sectionId).style.display = "flex";
  setActive(sectionId + "-button");
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
