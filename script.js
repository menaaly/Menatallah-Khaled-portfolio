const navToggle = document.querySelector('.nav-toggle');
const navPanel = document.querySelector('.nav-panel');

if (navToggle && navPanel) {
  navToggle.addEventListener('click', () => {
    const open = navPanel.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  navPanel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navPanel.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    const originalLabel = button.textContent;

    button.textContent = 'Message Sent';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalLabel;
      button.disabled = false;
      form.reset();
    }, 1800);
  });
}
