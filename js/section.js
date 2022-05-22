const DATA_PATH = "json/";
const IMG_PATH = "img/";

export async function loadMediaLinks() {
  const data = await fetch(DATA_PATH + "social.json");
  const list = await data.json();

  list.forEach((element) => {
    // create elements
    let icon = document.createElement("img");
    let ref = document.createElement("a");

    // set classes and attributes
    icon.setAttribute("src", IMG_PATH + element.file);
    ref.classList.add("icon");
    ref.setAttribute("href", element.link);
    ref.setAttribute("title", element.name);

    // mount everything
    ref.appendChild(icon);

    // append to container
    document.getElementById("home-media-links").appendChild(ref);
  });
}

export async function loadSkillCards() {
  const data = await fetch(DATA_PATH + "skills.json");
  const list = await data.json();

  list.forEach((element) => {
    // create elements
    let icon = document.createElement("img");

    // set classes and attributes
    icon.classList.add("skill-card");
    icon.setAttribute("src", IMG_PATH + element.file);
    icon.setAttribute("title", element.name);

    // append to container
    document.getElementById("skill-box-grid").appendChild(icon);
  });
}
