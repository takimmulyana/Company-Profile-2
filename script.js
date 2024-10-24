// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika humberger menu di klik
document.getElementById('hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
