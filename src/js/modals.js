import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';



export default function() {
    const modalLinks = Array.from(document.querySelectorAll('.js-modal-open'));
    const modalCloseLinks = Array.from(document.querySelectorAll('.js-modal-close'));
    const modals = Array.from(document.querySelectorAll('.js-modal'));

    modalLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const hash = link.hash; 
            if (hash) {
                const modal = document.querySelector(hash);    
                if (modal) {
                    modal.classList.add('shown');
                    disableBodyScroll(modal.querySelector('.js-modal-scroll-wrapper'), {
                        reserveScrollBarGap: false
                    })
                }
            }
        })
    });

    modalCloseLinks.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.js-modal');

            if (modal) {
                modal.classList.remove('shown');
                enableBodyScroll(modal.querySelector('.js-modal-scroll-wrapper'))
                
            }
        })
    });

    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (this === event.target) {
                modal.classList.remove('shown');
                enableBodyScroll(modal.querySelector('.js-modal-scroll-wrapper'))
               
            }
        })
        
    })
}