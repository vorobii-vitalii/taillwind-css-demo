const menuButton = document.querySelector('.menu-button');
const menuList = document.querySelector('.menu-list')

menuButton.addEventListener('click', e => {
    menuList.classList.toggle('hidden');
});