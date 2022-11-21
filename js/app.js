// Shortcut function for dom manupulation
const gElem = (x)  => {return document.querySelector(x);}
const gElemAll = (x)  => document.querySelectorAll(x);
const dcl = (t = 'div') => document.createElement(t)

// Function for toggling class
const toggleMnav = () => gElem('.m-nav').classList.toggle('df');

// Showing navigaioon item using toggle class
const menu = gElem('.menu-icon');
menu.addEventListener('click', toggleMnav);

// Add event listener on every nav;
gElemAll('.m-nav .nav-link').forEach(item => {
  item.addEventListener('click', toggleMnav);
});

// Clossing mobile menu using cross icon
gElem('.cross-icon').addEventListener('click', toggleMnav);