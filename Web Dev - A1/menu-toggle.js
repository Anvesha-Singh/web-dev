document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const mainContent = document.getElementById('main-content');

    menuToggle.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
        mainContent.classList.toggle('shifted');
    });

    document.addEventListener('click', (event) => {
        if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            sideMenu.classList.remove('open');
            mainContent.classList.remove('shifted');
        }
    });
});