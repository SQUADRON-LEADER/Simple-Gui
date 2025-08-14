// Smooth scroll for navigation
const navLinks = document.querySelectorAll('#navbar ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Section highlight in navbar
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`#navbar ul li a[href='#${section.id}']`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// Floating action button for order
const fabOrder = document.getElementById('fab-order');
if (fabOrder) {
  fabOrder.onclick = () => showModal();
}

// Modal for Order Now button
const orderBtn = document.getElementById('order-btn');
if (orderBtn) {
  orderBtn.addEventListener('click', () => {
    showModal();
  });
}

function showModal() {
  let modal = document.createElement('div');
  modal.id = 'order-modal';
  modal.innerHTML = `<div><h2>Order Placed!</h2><p>Your order has been received. Thank you!</p><button id='close-modal' class='btn'>Close</button></div>`;
  document.body.appendChild(modal);
  document.getElementById('close-modal').onclick = () => {
    modal.remove();
  };
}

// Animate entrance for fade-in sections
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    }, 200 + i * 200);
  });
});

// Smoother client slider
const slider = document.getElementById('client-slider');
if (slider) {
  let clients = slider.querySelectorAll('.client-item');
  let idx = 0;
  clients.forEach((c, i) => {
    c.classList.remove('active');
    if (i === 0) c.classList.add('active');
    c.style.position = 'absolute';
    c.style.left = 0;
    c.style.right = 0;
    c.style.top = 0;
    c.style.bottom = 0;
  });
  setInterval(() => {
    clients.forEach((c, i) => c.classList.remove('active'));
    clients[idx].classList.add('active');
    idx = (idx + 1) % clients.length;
  }, 2000);
}

// Section fade-in on scroll
function revealSections() {
  document.querySelectorAll('section.fade-in').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

// Interactive form feedback
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    showModal();
    contactForm.reset();
  });
  contactForm.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('focus', () => {
      field.style.borderColor = '#ff4d4d';
      field.style.boxShadow = '0 2px 8px rgba(255,77,77,0.10)';
    });
    field.addEventListener('blur', () => {
      field.style.borderColor = '';
      field.style.boxShadow = '';
    });
  });
}
