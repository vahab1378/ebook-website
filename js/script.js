const userScroll = function scrolling() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("navbar-sticky");
    }
  });
};

document.addEventListener("DOMContentLoaded", userScroll());

console.log(window);
