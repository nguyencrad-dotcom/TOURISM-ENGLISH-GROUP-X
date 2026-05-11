/* =========================================
   STICKY HEADER
========================================= */

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 80){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('active');

});


/* =========================================
   FADE UP ANIMATION
========================================= */

const fadeElements = document.querySelectorAll('.fade-up');

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

}, {
    threshold: 0.2
});


fadeElements.forEach(element => {

    fadeObserver.observe(element);

});



/* =========================================
   SMOOTH ACTIVE LINK
========================================= */

const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {

    item.addEventListener('click', () => {

        navLinks.classList.remove('active');

    });

});