import './bootstrap-custom.scss';
import './main.scss';
import mixitup from 'mixitup';
import $ from 'jquery';


const mixer = mixitup('.portfolio__items');

$('form').click(function(e) {
    e.preventDefault();
});


// scroll
$(function() {
    $("a[href^='#']").click( function() {
      let _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 700);
      return false;
    });
});


// map
ymaps.ready(function () {
    const myMap = new ymaps.Map('map', {
        center: [55.793068, 37.697012],
        zoom: 13,
        controls: []
    });

    const multiRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: [
            'метро Сокольники',
            [55.798682, 37.695816]
        ],
        params: {
            routingMode: "masstransit"  
        }
    });

    const multiRoute2 = new ymaps.multiRouter.MultiRoute({
        referencePoints: [
            'метро Преображенская площадь',
            [55.798682, 37.695816]
        ],
        params: {
            routingMode: "masstransit"  
        }
    });

    myMap.geoObjects.add(multiRoute);
    myMap.geoObjects.add(multiRoute2);
});   
