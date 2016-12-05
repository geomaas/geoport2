$(document).ready(function() {
    // var controller = new ScrollMagic.Controller();
    //
    // var scene = new ScrollMagic.Scene({
    //   triggerElement: "#geoff"
    //     })
    //     .setTween("#geoff-pic", 0.5, {
    //         scale: 1.5
    //     })
    //     .addTo(controller);
    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    $('a[href^="#"]').on('click',function (e) {
    	    e.preventDefault();

    	    var target = this.hash;
    	    var $target = $(target);

    	    $('html, body').stop().animate({
    	        'scrollTop': $target.offset().top
    	    }, 900, 'swing', function () {
    	        window.location.hash = target;
    	    });
    	});

});
