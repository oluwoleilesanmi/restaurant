import { home } from "./js/home";
import { menu } from "./js/menu";
import { contact } from "./js/contact";
import { navigation } from "./js/navigation";

const content = document.getElementById("content");
content.appendChild(navigation());

document.getElementById("home-nav").classList.add("button");
home(content);

document
  .getElementById("menu-nav")
  .addEventListener("click", function(activebtn) {
    document
      .querySelectorAll("button")
      .forEach(idlebtn => idlebtn.classList.remove("button"));
    activebtn.target.classList.add("button");
    document.querySelectorAll(".innerDiv").forEach(idlebtn => idlebtn.remove());
    menu(content);
  });

document
  .getElementById("home-nav")
  .addEventListener("click", function(activebtn) {
    document
      .querySelectorAll("button")
      .forEach(idlebtn => idlebtn.classList.remove("button"));
    activebtn.target.classList.add("button");
    document.querySelectorAll(".innerDiv").forEach(idlebtn => idlebtn.remove());
    home(content);
  });

document
  .getElementById("contact-nav")
  .addEventListener("click", function(activebtn) {
    document
      .querySelectorAll("button")
      .forEach(idlebtn => idlebtn.classList.remove("button"));
    activebtn.target.classList.add("button");
    document.querySelectorAll(".innerDiv").forEach(idlebtn => idlebtn.remove());
    contact(content);
  });
