
// import Sticky from 'sticky-js';

import ScrollMagic from 'ScrollMagic';

export default function() {
    // new Sticky('.js-sticky-panel');

    if (window.matchMedia("(max-width: 1240px)").matches) return;


    const stickyPanels = Array.from(document.querySelectorAll('.js-sticky-panel'));
    
    const layoutMainColumn = document.querySelector('.layout-main-column');

    if (!layoutMainColumn) return;

    


    console.log('Layout column height', parseInt(window.getComputedStyle(layoutMainColumn).getPropertyValue("height"), 10))

    const controller = new ScrollMagic.Controller();

    stickyPanels.forEach(element => {
        new ScrollMagic.Scene({
            triggerElement: element,
            triggerHook: 0.18,
            duration: parseInt(window.getComputedStyle(layoutMainColumn).getPropertyValue("height"), 10) - parseInt(window.getComputedStyle(element).getPropertyValue("height"), 10) - parseInt(window.getComputedStyle(element).getPropertyValue("padding-bottom"), 10)
            
        })
            .setPin(element, {
                pushFollowers: false
            })
            .setClassToggle(element, 'sticky')
            .addTo(controller);
    })

}