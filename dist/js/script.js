window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.promo__menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    hamburger = document.querySelector('.hamburger');
    overlay = document.querySelector('.promo__overlay');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('promo__menu-active');
        overlay.classList.toggle('promo__overlay-active');
    });

    overlay.addEventListener('click', () => {
        hamburger.classList.remove('hamburger-active');
        menu.classList.remove('promo__menu-active');
        overlay.classList.remove('promo__overlay-active');
    });

    // menuItem.forEach(item => {
//     item.addEventListener('click', () => {
//         hamburger.classList.toggle('hamburger-active');
//         menu.classList.toggle('promo__menu-active');
//         overlay.classList.toggle('promo__overlay-active');
//     })
// })
})