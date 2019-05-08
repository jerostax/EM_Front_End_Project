$(document).ready(function () {
    'use strict';

/*----------Info pop-up----------*/
/*-----on met un évenement qui écoute le passage de la souri sur les li de la page price------*/

    $('.functions').on('mousemove', 'li', function (event) {
        let $li = $(this);

        /*---variable pour l'option rotation désactivé en dessous----*/
        /*let rotation = (Math.cos(event.clientX * 0.01) * 180 / Math.PI);*/

/*-----on lui inqidque de suivre la souri en décalant de 10px pour éviter que la pop reste collé a la souri quand on sort des li------*/

        $li.find('.popup-description').css({
            left: (event.clientX + 10) + 'px',
            top: (event.clientY + 10) + 'px',

            /*---en dessous, du code pour créer des effets supplémentaire sur la pop up que je laisse en commentaire car pas obligatoire-----*/
            // transform: 'rotateZ('+ rotation +'deg)',
            // backgroundColor: 'hsla(' + (event.clientX) + ', 100%, 50%)'
        });
    });
});
