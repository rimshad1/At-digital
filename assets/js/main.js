const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar-menu');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    }) 
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    }) 
}

const navLinkEls = document.querySelectorAll('.nav_link');

    navLinkEls.forEach(navLinkEL => {
        navLinkEL.addEventListener('click', () => {
            navLinkEL.classList.add('active');
        });
    });