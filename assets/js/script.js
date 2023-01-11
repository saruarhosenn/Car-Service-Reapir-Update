/*
======================================================================/
============ JAVASCRIPT INDEX ============

01. Preloader JS 
02. AOS JS 
03. Mobaile Menu JS 
04. Packages Tab JS  

======================================================================/
*/

/* =============================================== 
                 01. Preloader JS 
================================================== */
var loader = document.querySelector(".preloader");
window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

/* ===========================================
                   02. AOS JS 
============================================== */
AOS.init();

/* ======================================================= 
                  03. Mobaile Menu JS                       
========================================================== */
const openedMenu = document.querySelector(".opened-menu-btn");
const closedMenu = document.querySelector(".closed-menu-btn");
const navbarMenu = document.querySelector(".navbar-area");
const menuOverlay = document.querySelector(".menu-overlay");

openedMenu.addEventListener("click", toggleMenu);
closedMenu.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);

function toggleMenu() {
  navbarMenu.classList.toggle("active");
  menuOverlay.classList.toggle("active");
  document.body.classList.toggle("scrolling");
}

navbarMenu.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
    event.preventDefault();
    const menuItemHasChildren = event.target.parentElement;

    if (menuItemHasChildren.classList.contains("active")) {
      collapseSubMenu();
    } else {
      if (navbarMenu.querySelector(".menu-item-has-children.active")) {
        collapseSubMenu();
      }
      menuItemHasChildren.classList.add("active");
      const subMenu = menuItemHasChildren.querySelector(".sub-menu");
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
  }
});

function collapseSubMenu() {
  navbarMenu
    .querySelector(".menu-item-has-children.active .sub-menu")
    .removeAttribute("style");
  navbarMenu
    .querySelector(".menu-item-has-children.active")
    .classList.remove("active");
}

function resizeScreen() {
  if (navbarMenu.classList.contains("active")) {
    toggleMenu();
  }

  if (navbarMenu.querySelector(".menu-item-has-children.active")) {
    collapseSubMenu();
  }
}

window.addEventListener("resize", () => {
  if (this.innerWidth > 992) {
    resizeScreen();
  }
});

/* ======================================================= 
                  04. Packages Tab JS  
========================================================== */
function openPackages(evt, PackagesName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("packages-tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(PackagesName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
