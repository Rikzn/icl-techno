import PerfectScrollbar from 'perfect-scrollbar';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import detectIt from 'detect-it';

import 'objectFitPolyfill';

export default function() {
    const modals = Array.from(document.querySelectorAll('.js-team-modal'));
    let activeModal = null;

    modals.forEach((modal, modalIndex) => {
        const open = modal.querySelector('.js-team-modal-open');
        const close = modal.querySelector('.js-team-modal-close');
        const content = modal.querySelector('.js-team-modal-content');
        const innerContent = modal.querySelector('.team__modal-inner-scroll-wrapper');
        const next = modal.querySelector('.team__modal-next');
        const prev = modal.querySelector('.team__modal-prev');


        function loadAndPlayVideo(modal) {
            const video = modal.querySelector('video');
            if (!video) return;
            objectFitPolyfill(video);
            video.currentTime = 0;
            video.play();
        }

        open.addEventListener('click', function(event) {
            event.preventDefault();
            content.classList.add('shown');
            open.classList.add('active');
            content.style.transitionDuration = '';
            disableBodyScroll(innerContent);
            activeModal = modal;
            loadAndPlayVideo(activeModal);
        });

        close.addEventListener('click', function(event) {
            event.preventDefault();
            content.classList.remove('shown');
            open.classList.remove('active');
            content.style.transitionDuration = '';
            enableBodyScroll(innerContent);
            activeModal = null;
        });

        content.addEventListener('click', function(event) {
            event.preventDefault();
            if (event.target === this) {
                content.classList.remove('shown');
                open.classList.remove('active');
                content.style.transitionDuration = '';
                enableBodyScroll(innerContent);
                activeModal = null;
            }
        });

        next.addEventListener('click', function(event) {
            event.preventDefault();
            content.classList.remove('shown');
            open.classList.remove('active');
            content.style.transitionDuration = '0s';
            enableBodyScroll(innerContent);
            activeModal = null;

            if (modalIndex + 1 < modals.length) {
                const nextModal = modals[modalIndex + 1];
                const content = nextModal.querySelector('.js-team-modal-content');
                const innerContent = nextModal.querySelector('.team__modal-inner-scroll-wrapper');
                const open = nextModal.querySelector('.js-team-modal-open');
                content.classList.add('shown');
                open.classList.add('active');
                content.style.transitionDuration = '0s';
                disableBodyScroll(innerContent);
                activeModal = modal;
                loadAndPlayVideo(activeModal);
            } else {
                const nextModal = modals[0];
                const content = nextModal.querySelector('.js-team-modal-content');
                const innerContent = nextModal.querySelector('.team__modal-inner-scroll-wrapper');
                const open = nextModal.querySelector('.js-team-modal-open');
                content.classList.add('shown');
                open.classList.add('active');
                content.style.transitionDuration = '0s';
                disableBodyScroll(innerContent);
                activeModal = modal;
                loadAndPlayVideo(activeModal);
            }
        });

        prev.addEventListener('click', function(event) {
            event.preventDefault();
            content.classList.remove('shown');
            open.classList.remove('active');
            content.style.transitionDuration = '0s';
            enableBodyScroll(innerContent);
            activeModal = null;

            if (modalIndex - 1 >= 0) {
                const nextModal = modals[modalIndex - 1];
                const content = nextModal.querySelector('.js-team-modal-content');
                const innerContent = nextModal.querySelector('.team__modal-inner-scroll-wrapper');
                const open = nextModal.querySelector('.js-team-modal-open');
                content.classList.add('shown');
                open.classList.add('active');
                content.style.transitionDuration = '0s';
                disableBodyScroll(innerContent);
                activeModal = modal;
                loadAndPlayVideo(activeModal);
            } else {
                const nextModal = modals[modals.length - 1];
                const content = nextModal.querySelector('.js-team-modal-content');
                const innerContent = nextModal.querySelector('.team__modal-inner-scroll-wrapper');
                const open = nextModal.querySelector('.js-team-modal-open');
                content.classList.add('shown');
                open.classList.add('active');
                content.style.transitionDuration = '0s';
                disableBodyScroll(innerContent);
                activeModal = modal;
                loadAndPlayVideo(activeModal);
            }
        });

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

    document.addEventListener('keyup', function(event) {
        if (event.key === 'Escape' && activeModal) {
            const content = activeModal.querySelector('.js-team-modal-content');
            const innerContent = activeModal.querySelector('.team__modal-inner-scroll-wrapper');
            content.classList.remove('shown');
            open.classList.remove('active');
            content.style.transitionDuration = '';
            enableBodyScroll(innerContent);
            activeModal = null;
        }
    });
}
