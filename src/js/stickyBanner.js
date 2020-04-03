
// import Sticky from 'sticky-js';

import ScrollMagic from 'ScrollMagic';

export default function() {
    // new Sticky('.js-sticky-panel');


    const stickyPanels = Array.from(document.querySelectorAll('.js-sticky-panel'));
    
    const pageFooter = document.querySelector('.page-footer');

    if (!pageFooter) return;

    const controller = new ScrollMagic.Controller();

    stickyPanels.forEach(element => {
        new ScrollMagic.Scene({
            triggerElement: element,
            triggerHook: 0.18,
            duration: pageFooter.offsetTop
        })
            .setPin(element, {
                pushFollowers: false
            })
            .setClassToggle(element, 'sticky')
            .addTo(controller);
    })

}