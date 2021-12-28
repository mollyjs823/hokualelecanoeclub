const menu = document.querySelector(".hamburger-content");
const close = document.querySelector("#close-icon");
const open = document.querySelector("#open-icon");
const desktopNav = document.querySelector("#navBar");

function toggle() {
  if (menu.classList.contains("show-hamburger")) {
    console.log("close");
    menu.classList.remove("show-hamburger");
    close.style.display = "none";
    open.style.display = "block";
    //desktopNavToggle();
  } else {
    console.log("open");
    menu.classList.add("show-hamburger");
    close.style.display = "block";
    open.style.display = "none";
    //desktopNavToggle();
  }
}

function desktopNavToggle() {}
