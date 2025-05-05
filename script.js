
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
function hireMe() {
  alert("Thank you for your interest! Let's collaborate.");
}

function downloadCV() {

  window.open("/document/cv.pdf", "_blank");
}

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const themeToggle = document.getElementById('themeToggle');
  const searchIcon = document.querySelector('.search-icon');
  const searchInput = document.querySelector('.search-input');

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Theme toggle functionality
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const icon = this.querySelector('i');

    if (document.body.classList.contains('dark-theme')) {
      icon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'light');
    }
  });

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
  }

  // Search functionality
  searchIcon.addEventListener('click', function() {
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
      searchInput.focus();
    }
  });

  // Close search when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-container')) {
      searchInput.classList.remove('active');
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-content').forEach(content => {
        content.style.display = 'none';
      });
    }
  });

  // Initialize navbar state
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  }
});