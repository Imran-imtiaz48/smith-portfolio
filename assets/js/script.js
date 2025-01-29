"use strict";

/**
 * Add event listener to single or multiple elements
 * @param {NodeList | Element} elements - The element(s) to attach the event to
 * @param {string} type - The event type (e.g., "click")
 * @param {Function} callback - The function to execute on event
 */
const addEventListenerMulti = (elements, type, callback) => {
  if (NodeList.prototype.isPrototypeOf(elements)) {
    elements.forEach(element => element.addEventListener(type, callback));
  } else {
    elements.addEventListener(type, callback);
  }
};

/**
 * Toggle mobile navbar visibility
 */
const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};

const closeNavbar = () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

// Add event listeners
addEventListenerMulti(navToggler, "click", toggleNavbar);
addEventListenerMulti(navLinks, "click", closeNavbar);

/**
 * Change header style on scroll
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  header.classList.toggle("active", window.scrollY > 100);
});
