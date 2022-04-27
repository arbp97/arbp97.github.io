document.addEventListener("DOMContentLoaded", function () {
  new Splide("#project-slider", {
    perPage: 2,
    type: "slide",
    gap: "1rem",
    heightRatio: 0.5,
    breakpoints: {
      768: {
        direction: "ttb",
        perPage: 3,
        arrows: false,
        height: 1000,
      },
    },
  }).mount();
});
