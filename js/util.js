export function setActive(id) {
  document.getElementById(id).classList.add("active");
}

export function removeActive(id) {
  document.getElementById(id).classList.remove("active");
}

export function resizeNavButtons(breakpoint) {
  if (window.innerWidth <= breakpoint) {
    Array.from(document.querySelectorAll("nav>a>li")).forEach((button) => {
      button.classList.add("fa-2x");
    });
  } else if (window.innerWidth >= breakpoint + 1) {
    Array.from(document.querySelectorAll("nav>a>li")).forEach((button) => {
      button.classList.remove("fa-2x");
    });
  }
}

export function setMainMargin(activeSection, breakpoint) {
  if (window.innerWidth <= breakpoint) {
    if (activeSection === "home") {
      document.getElementById("main").style.marginTop = "10px";
    } else {
      document.getElementById("main").style.marginTop = "90px";
    }
  } else if (window.innerWidth >= breakpoint + 1) {
    if (activeSection === "home") {
      document.getElementById("main").style.marginTop = "30px";
    } else {
      document.getElementById("main").style.marginTop = "90px";
    }
  }
}
