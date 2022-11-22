// Shortcut function for dom manupulation
const gElem = (x) => document.querySelector(x);
const gElemAll = (x) => document.querySelectorAll(x);

// Function for toggling class
const toggleMnav = () => gElem('.m-nav').classList.toggle('df');

// Showing navigaioon item using toggle class
const menu = gElem('.menu-icon');
menu.addEventListener('click', toggleMnav);

// Add event listener on every nav;
gElemAll('.m-nav .nav-link').forEach((item) => {
  item.addEventListener('click', toggleMnav);
});

// Clossing mobile menu using cross icon
gElem('.cross-icon').addEventListener('click', toggleMnav);

// this peace of code is responsible for scroll spy
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
window.onscroll = () => {
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 200;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (top >= offset && top < height + offset) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        document.querySelectorAll(`a[href*=${id}]`).forEach((item) => item.classList.add('active'));
      });
    }
  });
};