async function loadMediaLinks() {
  const data = await fetch("json/social.json");
  const list = await data.json();

  list.forEach((element) => {
    // create elements
    let container = document.createElement("div");
    let icon = document.createElement("img");
    let ref = document.createElement("a");

    // set classes and attributes
    container.classList.add("media-link");
    icon.setAttribute("src", "img/" + element.file);
    ref.setAttribute("href", element.link);
    ref.textContent = element.name;

    // mount everything
    container.appendChild(icon);
    container.appendChild(ref);

    // append to grid
    document.getElementById("contact-media-grid").appendChild(container);
  });
}

loadMediaLinks();
