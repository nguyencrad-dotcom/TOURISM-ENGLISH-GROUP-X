/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById('menuToggle');

const navbar = document.querySelector('.navbar');


if(menuToggle){

    menuToggle.addEventListener('click', () => {

        navbar.classList.toggle('active');

    });

}



/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header = document.querySelector('.header');


window.addEventListener('scroll', () => {

    if(window.scrollY > 80){

        header.classList.add('scrolled');

    }

    else{

        header.classList.remove('scrolled');

    }

});



/* =========================================
   WEATHER SYSTEM
========================================= */

window.addEventListener('load', async () => {

    const temp = document.getElementById('weatherTemp');

    const status = document.getElementById('weatherStatus');

    const icon = document.getElementById('weatherIcon');

    const widget = document.getElementById('weatherWidget');



    /* CHECK ELEMENT */

    if(
        !temp ||
        !status ||
        !icon ||
        !widget
    ){

        console.log('Weather elements missing');

        return;
    }



    try{

        const response = await fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=12.2388&longitude=109.1967&current_weather=true'
        );

        const data = await response.json();

        console.log(data);



        const weatherTemp = Math.round(
            data.current_weather.temperature
        );

        const weatherCode = data.current_weather.weathercode;

        const hour = new Date().getHours();



        /* =========================================
           DAY / NIGHT MODE
        ========================================= */

        if(hour >= 6 && hour < 18){

            document.body.classList.add('day-mode');

        }

        else{

            document.body.classList.add('night-mode');

        }



        /* =========================================
           UPDATE TEMP
        ========================================= */

        temp.textContent = `${weatherTemp}°`;



        /* =========================================
           WEATHER LOGIC
        ========================================= */

        widget.classList.remove(
            'weather-sunny',
            'weather-cloudy',
            'weather-rainy'
        );



        /* SUNNY */

        if(weatherCode <= 1){

            status.textContent = 'Nắng đẹp';

            icon.textContent = '☀️';

            widget.classList.add('weather-sunny');

        }



        /* CLOUDY */

        else if(weatherCode <= 3){

            status.textContent = 'Ít mây';

            icon.textContent = '☁️';

            widget.classList.add('weather-cloudy');

        }



        /* RAIN */

        else if(weatherCode <= 67){

            status.textContent = 'Mưa nhẹ';

            icon.textContent = '🌧️';

            widget.classList.add('weather-rainy');

        }



        /* OTHER */

        else{

            status.textContent = 'Mưa';

            icon.textContent = '🌦️';

            widget.classList.add('weather-rainy');

        }

    }

    catch(error){

        console.log('Weather Error:', error);

        status.textContent = 'Offline';

    }

});
/* =========================================
   RESORT SLIDER
========================================= */

const slider = document.getElementById('resortSlider');

const nextBtn = document.querySelector('.next-btn');

const prevBtn = document.querySelector('.prev-btn');


if(slider){

    nextBtn.addEventListener('click', () => {

        slider.scrollBy({
            left: 400,
            behavior: 'auto'
        });

    });


    prevBtn.addEventListener('click', () => {

        slider.scrollBy({
            left: -400,
            behavior: 'auto'
        });

    });



    /* AUTO SLIDE */
let autoSlide = setInterval(() => {

    if(
        slider.scrollLeft + slider.clientWidth
        >=
        slider.scrollWidth - 10
    ){

        slider.scrollTo({
            left: 0,
            behavior: 'auto'
        });

    }

    else{

        slider.scrollBy({
            left: 320,
            behavior: 'auto'
        });

    }

}, 5000);

}