export function removeClass(id, className) {
  document.getElementById(id).classList.remove(className);
}

export function addClass(id, className) {
  document.getElementById(id).classList.add(className);
}

export function isInViewport(element) {
  const e = document.getElementById(element) || element;

  const rect = e.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
