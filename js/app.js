function goTo(sectionId) {
  Array.from(document.querySelectorAll("main>section")).forEach(
    (section) => (section.style.display = "none")
  );
  document.querySelector("#" + sectionId).style.display = "flex";
}
goTo("about");
