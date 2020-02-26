import detectIt from 'detect-it';


export default function() {
    ymaps.ready(init);

    function init() {
        const maps = Array.from(document.querySelectorAll('.js-yandex-map'));

        let pinSize = [52, 62];

        maps.forEach(mapElement => {
            
            const coords = mapElement.getAttribute('data-coords').split(',');
            const centerCoords = mapElement.getAttribute('data-center-coords').split(',');

            const myMap = new ymaps.Map(mapElement, {
                center: window.matchMedia("(max-width: 968px)").matches ? coords : centerCoords,
                zoom: window.matchMedia("(max-width: 968px)").matches ? 17 : 12,
                controls: []
            });

            const myPlacemark = new ymaps.Placemark(
                coords,
                {},
                {
                    iconLayout: 'default#image',
                    iconImageHref: mapElement.getAttribute('data-pin'),
                    iconImageSize: pinSize,
                    iconImageOffset: [-pinSize[0]/2, -pinSize[1]]
                }
            );
            myMap.controls.add('zoomControl');
            myMap.geoObjects.add(myPlacemark);

            myMap.behaviors.disable('scrollZoom');

            if (detectIt.hasTouch) {
                myMap.behaviors.disable('drag');
            }
        });
    }
}