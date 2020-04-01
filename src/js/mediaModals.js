export default function() {
    $("[data-fancybox='gallery']").fancybox({
        hash: false,
        backFocus: false,
        mobile: {
            clickSlide: 'close',
            backFocus: false
        }
    });
}
