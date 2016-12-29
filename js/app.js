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
        }, 800, 'swing', function() {
            window.location.hash = target;
        });
    });

    /*---------------- Hobby Window click events ------------------*/
    // $('.hobby-container').hide();

    // $('.hobby').click(function(e) {
    //     e.preventDefault();
    //     $('#hobby-win').slideToggle();
    // });
    //
    // $('#close-hobby').click(function(e) {
    //     e.preventDefault();
    //     $('#hobby-win').slideUp();
    // });

    /*----------------- swipebox -----------------------------*/
//theatre
    $( '.theatre' ).click( function( e ) {
	     e.preventDefault();
	      $.swipebox( [
		        { href:'assets/setphotos/jimmydean1.jpg', title:'My Caption' },
		        { href:'assets/setphotos/jimmydean2.jpg', title:'My Second Caption' },
            { href:'assets/setphotos/lovesfire1.jpg', title:'third caption'},
            { href:'assets/setphotos/lovesfire2.jpg', title:''},
            { href:'assets/setphotos/desdemona1.jpg', title:''},
            { href:'assets/setphotos/desdemona2.jpg', title:''},
            { href:'assets/setphotos/blackwhite1.jpg', title:''},
            { href:'assets/setphotos/blackwhite2.jpg', title:''},
	                ] );
      });

      $( '.travel' ).click( function( e ) {
         e.preventDefault();
          $.swipebox( [
              { href:'https://www.youtube.com/watch?v=xP4tsbZ17LE', title:''},
              { href:'https://www.youtube.com/watch?v=14YreqFamtY', title:''},
                    ] );
      });

      $( '.camera' ).click( function( e ) {
         e.preventDefault();
          $.swipebox( [
              { href:'assets/photographs/taj_mahal.jpg', title:''},
              { href:'assets/photographs/bridge_lightning.jpg', title:''},
              { href:'assets/photographs/bird_house.jpg', title:''},
              { href:'assets/photographs/blue_angels.jpg', title:''},
              { href:'assets/photographs/bus.jpg', title:''},
              { href:'assets/photographs/camel.jpg', title:''},
              { href:'assets/photographs/cliff.jpg', title:''},
              { href:'assets/photographs/columns.jpg', title:''},
              { href:'assets/photographs/den_subway.jpg', title:''},
              { href:'assets/photographs/fjord.jpg', title:''},
              { href:'assets/photographs/heart_d_l.jpg', title:''},
              { href:'assets/photographs/pina_d_l.jpg', title:''},
              { href:'assets/photographs/roof.jpg', title:''},
              { href:'assets/photographs/rugs.jpg', title:''},

                    ] );
      });

      $( '.drone' ).click( function( e ) {
         e.preventDefault();
          $.swipebox( [
              { href:'assets/drone_gifs/2nd_pres.gif', title:''},
              { href:'assets/drone_gifs/boat_bridge.gif', title:''},
              { href:'assets/drone_gifs/peninsula.gif', title:''},
              { href:'assets/drone_gifs/carnival.gif', title:''},
              { href:'assets/drone_gifs/castle_pinckney.gif', title:''},

                    ] );
      });


    /*---------------- end of jquery ------------------*/
});
