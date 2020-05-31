
import { lockScroll, unlockScroll } from './scrollBlocker';

export default function() {
   
    const modals = Array.from(document.querySelectorAll('.js-modal'));
    let activeModal = null;

    

    document.addEventListener('click', event => {
        if (event.target.matches('.js-modal-open') || event.target.closest('.js-modal-open')) {
            event.preventDefault();
            const link = event.target.matches('.js-modal-open') ? event.target : event.target.closest('.js-modal-open');
            if (link.classList.contains('is-disabled')) return;
            const hash = link.hash;

            if (hash) {
                const modal = document.querySelector(hash);
                if (modal) {
                    modal.classList.add('shown');

                    lockScroll(modal.querySelector('.js-modal-scroll-wrapper'))
                    
                    activeModal = modal;
                }
            }
        }
    });

    document.addEventListener('click', event => {
        if (event.target.matches('.js-modal-close') || event.target.closest('.js-modal-close')) {
            event.preventDefault();
            const closeBtn = event.target.matches('.js-modal-close') ? event.target : event.target.closest('.js-modal-close');
            const modal = closeBtn.closest('.js-modal');
            if (modal) {
                modal.classList.remove('shown');
                unlockScroll();
                activeModal = null;
            }
        }
    });


    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (this === event.target) {
                modal.classList.remove('shown');
             
                unlockScroll();
                activeModal = null;
            }
        });
    });

    document.addEventListener('keyup', function(event) {
        if (event.key === 'Escape' && activeModal) {
            activeModal.classList.remove('shown');
           
            unlockScroll();
            activeModal = null;
        }
    });
}
