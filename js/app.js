$(document).ready(function() {

    /*-------- loading for particles background -------------- */
    /*--------courtesy of http://vincentgarreau.com/particles.js/------------*/

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

    /*---------------- Hobby Window click events ------------------*/
    $('.hobby-container').hide();

    $('.hobby').click(function(e) {
        e.preventDefault();
        $('#hobby-win').slideToggle();
    });

    $('#close-hobby').click(function(e) {
      e.preventDefault();
      $('#hobby-win').slideUp();
    });
});
