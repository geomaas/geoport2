(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])