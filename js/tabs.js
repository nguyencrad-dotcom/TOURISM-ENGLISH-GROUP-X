const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');


tabButtons.forEach(button => {

    button.addEventListener('click', () => {

        /* REMOVE ACTIVE BUTTON */
        tabButtons.forEach(btn => {

            btn.classList.remove('active');

        });


        /* REMOVE ACTIVE CONTENT */
        tabContents.forEach(content => {

            content.classList.remove('active');

        });


        /* ACTIVE BUTTON */
        button.classList.add('active');


        /* TARGET TAB */
        const target = button.getAttribute('data-tab');


        /* SHOW CONTENT */
        document.getElementById(target).classList.add('active');

    });

});