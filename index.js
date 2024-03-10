const MENU_OPENED_CLASS = 'burger-menu_opened';
const burgerNode = document.querySelector('.menuBurger');
const burgerControlNode = document.querySelector('.menuBurger');

const navMain = document.querySelector('.nav-main');
const MENU_NAV_OPENED = 'nav-main__burger';

burgerControlNode.addEventListener('click', (_event) => {
  burgerNode.classList.toggle(MENU_OPENED_CLASS);
  navMain.classList.toggle(MENU_NAV_OPENED);
});
