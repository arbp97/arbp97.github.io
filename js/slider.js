// fetch project data from json file, append every
// instance in project slider
async function loadProjects() {
  const data = await fetch("/json/projects.json");
  const list = await data.json();

  list.forEach((project) => {
    // create elements
    let splideSlide = document.createElement("li");
    let splideContainer = document.createElement("div");
    let image = document.createElement("img");
    let title = document.createElement("a");
    let description = document.createElement("div");

    // set classes and attributes
    splideSlide.classList.add("splide__slide");
    splideContainer.classList.add("splide__slide__container");
    image.setAttribute("src", "img/" + project.file);
    image.setAttribute("alt", "project-img");
    title.classList.add("project-title");
    title.setAttribute("href", project.link);
    title.textContent = project.name;
    description.classList.add("project-description");
    description.textContent = project.description;

    // mount everything
    splideContainer.appendChild(image);
    splideSlide.appendChild(splideContainer);
    splideSlide.appendChild(title);
    splideSlide.appendChild(description);

    // append to slider
    document.getElementById("project-slider-list").appendChild(splideSlide);
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  //load projects before initializing splide
  await loadProjects();

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
