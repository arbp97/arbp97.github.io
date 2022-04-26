export function setActive(id) {
  document.getElementById(id).classList.add("active");
}

export function removeActive(id) {
  document.getElementById(id).classList.remove("active");
}

export function resizeNavButtons() {
  if (window.innerWidth <= 768) {
    Array.from(document.querySelectorAll("nav>a>li")).forEach((button) => {
      button.classList.add("fa-2x");
    });
  } else if (window.innerWidth >= 769) {
    Array.from(document.querySelectorAll("nav>a>li")).forEach((button) => {
      button.classList.remove("fa-2x");
    });
  }
}
