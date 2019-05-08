$(document).ready(function() {
    'use strict'; 

    
/*----------CAROUSEL 1 ----------*/

/*----Objet litteral pour désactiver le pager et les boutons du plugin------*/
    let config1 = {
        pager        : false,
        controls     : false,
        wrapperClass : 'carousel1'
    };

/*----- on créé une variable qui correspond a mon slider 1--------*/

    let $slider1 = $('.carousel1').bxSlider(config1);

/*------On empêche le rafraîchissement de la page sur nvx boutons et on indique si on side à gauche ou a droite-----*/
    $('#slider-start a.slider-left').on('click', function(event) {
        event.preventDefault();
        $slider1.goToPrevSlide();
    }); 

    $('#slider-start a.slider-right').on('click', function(event) {
        event.preventDefault();
        $slider1.goToNextSlide();
    });
 
/*----------CAROUSEL 2 ----------*/

/*---- même opération que pour le slider 1----*/
    let config2 = {
        pager        : false,
        controls     : false,
        wrapperClass : 'carousel2'
    };

/*----- on créé une variable qui correspond a mon slider 2--------*/

    let $slider2 = $('.carousel2').bxSlider(config2);
    
/*---- même opération que pour le slider 1----*/
    $('#slider-bottom a.slider-left').on('click', function(event) {
        event.preventDefault();
        $slider2.goToPrevSlide();

    });
    $('#slider-bottom a.slider-right').on('click', function(event) {
        event.preventDefault();
        $slider2.goToNextSlide();

    });
  
});