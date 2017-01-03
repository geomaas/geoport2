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

    $('.hobby-container, .camera-desc, .theatre-desc, .drone-desc, .travel-desc').hide();

    $('.camera').click(function(e) {
        e.preventDefault();
        $('.hobby-container, .camera-desc').slideDown();
        $('.theatre-desc, .drone-desc, .travel-desc').slideUp();
    });

    $('.theatre').click(function(e) {
        e.preventDefault();
        $('.hobby-container, .theatre-desc').slideDown();
        $('.camera-desc, .drone-desc, .travel-desc').slideUp();

    });

    $('.drone').click(function(e) {
        e.preventDefault();
        $('.hobby-container, .drone-desc').slideDown();
        $('.theatre-desc, .camera-desc, .travel-desc').slideUp();
    });

    $('.travel').click(function(e) {
        e.preventDefault();
        $('.hobby-container, .travel-desc').slideDown();
        $('.theatre-desc, .drone-desc, .camera-desc').slideUp();
    });

    $('#close-hobby').click(function(e) {
        e.preventDefault();
        $('.hobby-container').slideUp();
    });

    /*----------------- swipebox -----------------------------*/

    $('.swipebox').swipebox({
        removeBarsOnMobile: false,
        hideBarsDelay: 5000,
    });

    $('#theatre-gallery').click(function(e) {
        e.preventDefault();
        $.swipebox([{
            href: 'assets/setphotos/jimmydean1.jpg',
            title: 'Set design for: Come Back to the Five and Dime, Jimmy Dean, Jimmy Dean'
        }, {
            href: 'assets/setphotos/jimmydean2.jpg',
            title: ''
        }, {
            href: 'assets/setphotos/lovesfire1.jpg',
            title: 'Love&#8217;s Fire. Seven short plays inspired by Shakespear&#8217;s sonnets'
        }, {
            href: 'assets/setphotos/lovesfire2.jpg',
            title: ''
        }, {
            href: 'assets/setphotos/desdemona1.jpg',
            title: 'Set of Desdemona: a Play about a Handkerchief'
        }, {
            href: 'assets/setphotos/desdemona2.jpg',
            title: ''
        }, {
            href: 'assets/setphotos/blackwhite1.jpg',
            title: 'Wedding Band: A Love/Hate Story in Black and White'
        }, {
            href: 'assets/setphotos/blackwhite2.jpg',
            title: ''
        }, ]);
    });

    $('#travel-gallery').click(function(e) {
        e.preventDefault();
        $.swipebox([{
            href: 'https://www.youtube.com/watch?v=xP4tsbZ17LE',
            title: 'A short video of my travels to Norway with my brother (some slight nsfw language)'
        }, {
            href: 'https://www.youtube.com/watch?v=14YreqFamtY',
            title: 'Another video of my trip to India with my sister'
        }, ]);
    });

    $('#camera-gallery').click(function(e) {
        e.preventDefault();
        $.swipebox([{
                href: 'assets/photographs/taj_mahal.jpg',
                title: 'Taj Mahal'
            }, {
                href: 'assets/photographs/bridge_lightning.jpg',
                title: 'Lightning over the Cooper'
            }, {
                href: 'assets/photographs/bird_house.jpg',
                title: 'Pigeon House in Doha, Qatar'
            }, {
                href: 'assets/photographs/blue_angels.jpg',
                title: 'Blue Angels in Charleston'
            }, {
                href: 'assets/photographs/bus.jpg',
                title: 'Indian Freight Truck'
            }, {
                href: 'assets/photographs/pina_d_l.jpg',
                title: 'The Pineapple Fountain'
            }, {
                href: 'assets/photographs/camel.jpg',
                title: 'Camel Jockey Doha, Qatar'
            }, {
                href: 'assets/photographs/cliff.jpg',
                title: 'Boy cliff diving in Bermuda'
            }, {
                href: 'assets/photographs/columns.jpg',
                title: 'The Summer Palace St. Petersburg, Russia'
            }, {
                href: 'assets/photographs/den_subway.jpg',
                title: 'Copenhagen Subway Terminal'
            }, {
                href: 'assets/photographs/fjord.jpg',
                title: 'The Sognefjord, Norway'
            }, {
                href: 'assets/photographs/elephant.jpg',
                title: 'Elephant Rider Jaipur, India'
            }, {
                href: 'assets/photographs/heart_d_l.jpg',
                title: 'Gate at St. John&#8217;s reformed Episcopal church'
            }, {
                href: 'assets/photographs/roof.jpg',
                title: 'Ceiling of Museum of Arabic Art Doha, Qatar'
            }, {
                href: 'assets/photographs/rugs.jpg',
                title: 'Jama Masjid Mosque New Delhi, India'
            },

        ]);
    });

    $('#drone-gallery').click(function(e) {
        e.preventDefault();
        $.swipebox([{
                href: 'https://www.youtube.com/watch?v=KnAIbNbd1r4&feature=youtu.be',
                title: 'A sample of aerial shots captured around Charleston'
            },


        ]);
    });


    /*---------------- end of jquery ------------------*/
});
