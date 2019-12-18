import PerfectScrollbar from 'perfect-scrollbar';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import detectIt from 'detect-it';

export default function() {
    const modals = Array.from(document.querySelectorAll('.js-team-modal'));
    
    modals.forEach(modal => {
        const open = modal.querySelector('.js-team-modal-open');
        const close = modal.querySelector('.js-team-modal-close');
        const content = modal.querySelector('.js-team-modal-content');
        const innerContent = modal.querySelector('.team__modal-inner-scroll-wrapper');

      

        open.addEventListener('click', function(event) {
            event.preventDefault();
            content.classList.add('shown');
            disableBodyScroll(innerContent);
        });

        close.addEventListener('click', function(event) {
            event.preventDefault();
            content.classList.remove('shown');
            enableBodyScroll(innerContent);
        });

        content.addEventListener('click', function(event) {
            event.preventDefault();
            if (event.target === this) {
                content.classList.remove('shown');
                enableBodyScroll(innerContent);
            }
        })


        if (detectIt.hasTouch) {
           return;
        }


        new PerfectScrollbar(modal.querySelector('.team__modal-text-wrapper'), {
            wheelSpeed: 2,
            wheelPropagation: false,
            minScrollbarLength: 20,
            suppressScrollX: true
        });

        
    });
}
