// AOS animations
AOS.init({ duration: 850, once: true });

// Mobile nav toggle
const btn = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');
btn?.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();
