import PerfectScrollbar from 'perfect-scrollbar';
import detectIt from 'detect-it';

export default function() {
    document.addEventListener('click', event => {
        const isCartModalCloseBtns = event.target.matches('.js-add-to-card-close') || event.target.closest('.js-add-to-card-close');
        if (isCartModalCloseBtns) {
            const button = event.target.matches('.js-add-to-card-close') ? event.target : event.target.closest('.js-add-to-card-close');
            event.preventDefault();
            const modal = button.closest('.js-added-to-cart-popover');
            if (modal) {
                modal.classList.remove('configurator__added-to-cart--shown');
            }
        }
    });

    const scrollableTables = Array.from(document.querySelectorAll('.js-configurator-scrollable-table'));

    if (!detectIt.hasTouch) {
        scrollableTables.forEach(table => {
            const ps = new PerfectScrollbar(table, {
                minScrollbarLength: 112,
                maxScrollbarLength: 112,
                wheelPropagation: false
            });
        });
    }
}
