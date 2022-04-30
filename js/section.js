const DATA_PATH = "json/";
const IMG_PATH = "img/";

export async function loadMediaLinks() {
  const data = await fetch(DATA_PATH + "social.json");
  const list = await data.json();

  list.forEach((element) => {
    // create elements
    let container = document.createElement("div");
    let icon = document.createElement("img");
    let ref = document.createElement("a");

    // set classes and attributes
    container.classList.add("media-link");
    icon.setAttribute("src", IMG_PATH + element.file);
    ref.setAttribute("href", element.link);
    ref.textContent = element.name;

    // mount everything
    container.appendChild(icon);
    container.appendChild(ref);

    // append to grid
    document.getElementById("contact-media-grid").appendChild(container);
  });
}

// fetch project data from json file, append every
// instance in project slider
export async function loadProjects() {
  const data = await fetch(DATA_PATH + "projects.json");
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
    image.setAttribute("src", IMG_PATH + project.file);
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
}
