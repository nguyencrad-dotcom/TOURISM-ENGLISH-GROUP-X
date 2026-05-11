/* =========================================
   SIMPLE IMAGE SLIDER
========================================= */

/*
=========================================
HTML STRUCTURE EXAMPLE

<div class="custom-slider">

    <img src="..." class="slider-image active">

    <img src="..." class="slider-image">

    <img src="..." class="slider-image">

    <button class="slider-prev">‹</button>
    <button class="slider-next">›</button>

</div>

=========================================
*/


/* =========================================
   SELECT ELEMENTS
========================================= */

const sliders = document.querySelectorAll('.custom-slider');


sliders.forEach(slider => {

    const images = slider.querySelectorAll('.slider-image');

    const nextBtn = slider.querySelector('.slider-next');

    const prevBtn = slider.querySelector('.slider-prev');

    let current = 0;



    /* =========================================
       SHOW IMAGE
    ========================================= */

    function showSlide(index){

        images.forEach(image => {

            image.classList.remove('active');

        });

        images[index].classList.add('active');

    }



    /* =========================================
       NEXT BUTTON
    ========================================= */

    if(nextBtn){

        nextBtn.addEventListener('click', () => {

            current++;

            if(current >= images.length){

                current = 0;

            }

            showSlide(current);

        });

    }



    /* =========================================
       PREV BUTTON
    ========================================= */

    if(prevBtn){

        prevBtn.addEventListener('click', () => {

            current--;

            if(current < 0){

                current = images.length - 1;

            }

            showSlide(current);

        });

    }



    /* =========================================
       AUTO SLIDE
    ========================================= */

    setInterval(() => {

        current++;

        if(current >= images.length){

            current = 0;

        }

        showSlide(current);

    }, 5000);

});