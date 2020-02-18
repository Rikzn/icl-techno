import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default function() {
    const modalLinks = Array.from(document.querySelectorAll('.js-modal-open'));
    const modalCloseLinks = Array.from(document.querySelectorAll('.js-modal-close'));
    const modals = Array.from(document.querySelectorAll('.js-modal'));
    let activeModal = null;

    // modalLinks.forEach(link => {
    //     link.addEventListener('click', function(event) {
    //         event.preventDefault();
    //         const hash = link.hash;
    //         if (hash) {
    //             const modal = document.querySelector(hash);
    //             if (modal) {
    //                 modal.classList.add('shown');
    //                 disableBodyScroll(modal.querySelector('.js-modal-scroll-wrapper'), {
    //                     reserveScrollBarGap: false
    //                 });
    //                 activeModal = modal;
    //             }
    //         }
    //     });
    // });

    document.addEventListener('click', event => {
        if (event.target.matches('.js-modal-open') || event.target.closest('.js-modal-open')) {
            event.preventDefault();
            const link = event.target.matches('.js-modal-open') ? event.target : event.target.closest('.js-modal-open');
            const hash = link.hash;

            if (hash) {
                const modal = document.querySelector(hash);
                if (modal) {
                    modal.classList.add('shown');
                    disableBodyScroll(modal.querySelector('.js-modal-scroll-wrapper'), {
                        reserveScrollBarGap: false
                    });
                    activeModal = modal;
                }
            }
        }
    });

    modalCloseLinks.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.js-modal');
            if (modal) {
                modal.classList.remove('shown');
                enableBodyScroll(modal.querySelector('.js-modal-scroll-wrapper'));
                activeModal = null;
            }
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (this === event.target) {
                modal.classList.remove('shown');
                enableBodyScroll(modal.querySelector('.js-modal-scroll-wrapper'));
                activeModal = null;
            }
        });
    });

    document.addEventListener('keyup', function(event) {
        if (event.key === 'Escape' && activeModal) {
            activeModal.classList.remove('shown');
            enableBodyScroll(activeModal.querySelector('.js-modal-scroll-wrapper'));
            activeModal = null;
        }
    });
}
