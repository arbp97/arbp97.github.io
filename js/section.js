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

export async function loadProjectCards() {
  const data = await fetch(DATA_PATH + "projects.json");
  const list = await data.json();

  list.forEach((element) => {
    // create elements
    let card = document.createElement("div");
    let info = document.createElement("div");
    let links = document.createElement("div");

    let title = document.createElement("p");
    let text = document.createElement("p");

    let liveLink = document.createElement("a");
    let liveLinkIcon = document.createElement("li");
    let repoLink = document.createElement("a");
    let repoLinkIcon = document.createElement("li");

    let img = document.createElement("img");

    // set classes and attributes
    card.classList.add("project-card");
    info.classList.add("project-info");
    links.classList.add("project-links");

    title.classList.add("title");
    title.textContent = element.name;
    text.classList.add("text");
    text.textContent = element.description;

    liveLink.classList.add("button");
    liveLink.setAttribute("href", element.link);
    repoLink.classList.add("button");
    repoLink.setAttribute("href", element.link);

    liveLinkIcon.classList.add("fa", "fa-arrow-right");
    liveLink.textContent = " Live";
    repoLinkIcon.classList.add("fa", "fa-link");
    repoLink.textContent = " Repository";

    img.classList.add("project-img");
    img.setAttribute("src", IMG_PATH + element.file);
    img.setAttribute("alt", "");

    //mount everything
    liveLink.appendChild(liveLinkIcon);
    repoLink.appendChild(repoLinkIcon);

    links.appendChild(liveLink);
    links.appendChild(repoLink);

    info.appendChild(title);
    info.appendChild(text);
    info.appendChild(links);

    card.appendChild(info);
    card.appendChild(img);

    // append to container
    document.getElementById("project-box").appendChild(card);
  });
}
