import PerfectScrollbar from 'perfect-scrollbar';


export default function() {
    const addToCartCloseBtns = Array.from(document.querySelectorAll('.js-add-to-card-close'));

    addToCartCloseBtns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            console.log('Clicked')
            event.preventDefault();
            const modal = this.closest('.js-added-to-cart-popover');
            console.log(modal)
            if (modal) {
                modal.classList.remove('configurator__added-to-cart--shown');
            }
        })
    })



    const scrollableTables = Array.from(document.querySelectorAll('.js-configurator-scrollable-table'));

    if (document.body.classList.contains('is-touch')) return;

    scrollableTables.forEach(table => {
        const ps = new PerfectScrollbar(table, {
            minScrollbarLength: 112,
            maxScrollbarLength: 112,
            wheelPropagation: false
        });
    })
}