export default function () {
    const openInModals = Array.from(document.querySelectorAll('[data-open-in-modal]'));

    openInModals.forEach((element) => {

        if (element.getAttribute('data-open-in-modal')) {

           
            $(element).fancybox({
                hash: false,
                backFocus: false,
                mobile: {
                    clickSlide: 'close',
                    backFocus: false,
                },
            });
        }
    });
}
