const menuBar = document.querySelector("#menu_bar");
const navLinks = document.querySelector(".nav_links");

navLinks.style.top = "-450%";

menuBar.onclick = function () {
  if (navLinks.style.top == "-450%") {
    navLinks.style.top = "50px";
  } else {
    navLinks.style.top = "-450%";
  }
};
