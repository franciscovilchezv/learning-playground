const navbarOptions = document.getElementById('navbar-options');
const button = document.getElementById('toggle-button');

const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

button.addEventListener('click', toggleNavbar);

function toggleNavbar(){
  hamburgerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');

  navbarOptions.classList.toggle('navbar-screen-exposed');
}