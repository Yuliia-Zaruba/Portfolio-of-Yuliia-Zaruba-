// Mobile menu

document.addEventListener('DOMContentLoaded', () => {
  const menuOpenBtn = document.querySelector('[data-menu-open]');
  const menuCloseBtn = document.querySelector(
    '.header__mobile-menu-close-button'
  );
  const mobileMenu = document.querySelector('.header__mobile-menu-container');
  const mobileNavLinks = document.querySelectorAll('.header__mobile-nav-link');

  const toggleMenu = () => {
    const isOpen = mobileMenu.classList.contains('is-open');
    mobileMenu.classList.toggle('is-open');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  };

  menuOpenBtn.addEventListener('click', toggleMenu);
  menuCloseBtn.addEventListener('click', toggleMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
});
