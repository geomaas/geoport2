$(document).ready(function() {

    /*-------- loading for particles background -------------- */

    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    /*------------jquery smooth scrolling-----------------*/



    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('.first-name').addClass('animated slideInLeft');
        $('.last-name').addClass('animated slideInRight');

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });

    /*----------------            ------------------*/


    $('.hobby').click(function(e) {
        e.preventDefault();
        console.log('click');
        $('#hobby-win').slideToggle();
    });


});
