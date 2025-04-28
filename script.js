const themeBtn = document.getElementById('theme-btn');
let darkMode = true;

themeBtn.addEventListener('click', () => {
  if (darkMode) {
    document.body.style.backgroundColor = "#f5f5f5";
    document.body.style.color = "#000";
    themeBtn.textContent = "☀️";
  } else {
    document.body.style.backgroundColor = "#0f2027";
    document.body.style.color = "#fff";
    themeBtn.textContent = "🌙";
  }
  darkMode = !darkMode;
});
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
