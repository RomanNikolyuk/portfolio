function menuMobile() {
    const menuMobile = document.querySelector('.menu-mobile-container');

    function showMenu() {
        menuMobile.classList.remove('disappearance');
        menuMobile.classList.add('appear');
        document.body.style.overflowY = 'hidden';
    }

    function hideMenu() {
        menuMobile.classList.remove('appear');
        menuMobile.classList.add('disappearance');
        document.body.style.overflowY = 'scroll';
    }

    const button = document.querySelector('.menu-mobile-button') ?? null;
    const exitButton = document.querySelector('.exit-button');
    const menuList = document.querySelector('.menu-list-mobile');
    const mainContainer = document.querySelector('main');

    button.addEventListener('click', () => {
        showMenu();
    });

    exitButton.addEventListener('click', () => {
        hideMenu();
    });

    menuList.addEventListener('click', (event) => {
        if (event.target.nodeName === 'A') {
            hideMenu();
        }
    });

    mainContainer.addEventListener('click', (event) => {
        if (!event.target.classList.contains('menu-mobile-container')) {
            hideMenu();
        }
    });

}

export default menuMobile;