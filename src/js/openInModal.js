export default function() {

    const openInModals = Array.from(document.querySelectorAll("[data-open-in-modal='Y'"));

    console.log('Open in modals', openInModals)

    $("[data-open-in-modal='Y'").fancybox({
        hash: false,
        backFocus: false,
        mobile: {
            clickSlide: 'close',
            backFocus: false
        }
    });
}