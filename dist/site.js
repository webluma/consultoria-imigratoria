const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');
const compactNavigation = window.matchMedia('(max-width: 960px)');

function setMenuOpen(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.toggleAttribute('data-open', open);
}

header.setAttribute('data-enhanced', '');
menuButton.hidden = false;
menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});
navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || !compactNavigation.matches) return;
  setMenuOpen(false);
  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
  }
});
header.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && compactNavigation.matches && navigation.hasAttribute('data-open')) {
    setMenuOpen(false);
    menuButton.focus();
  }
});
compactNavigation.addEventListener('change', () => {
  if (compactNavigation.matches && navigation.contains(document.activeElement)) menuButton.focus();
  if (!compactNavigation.matches && document.activeElement === menuButton) navigation.querySelector('a').focus();
  setMenuOpen(false);
});

// The presentation has illustrative contact details; never send to a fake number.
const contactPreview = document.querySelector('#contact-preview');
const requestContact = document.querySelector('#request-contact');
requestContact.addEventListener('click', () => contactPreview.showModal());
contactPreview.addEventListener('close', () => requestContact.focus());
