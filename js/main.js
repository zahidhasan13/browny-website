const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("nav-items");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("nav-items-active");
});
