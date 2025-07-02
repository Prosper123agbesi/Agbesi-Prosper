// Responsive navbar hamburger toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.onclick = function() {
      navLinks.classList.toggle('open');
    };
  }
});