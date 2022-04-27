document.addEventListener("DOMContentLoaded", function () {
  new Splide("#project-slider", {
    perPage: 2,
    gap: "1rem",
    height: "50vh",
    breakpoints: {
      768: {
        direction: "ttb",
        perPage: 2,
        pagination: false,
        height: "100vh",
      },
    },
  }).mount();
});
