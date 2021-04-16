export default function() {
    $("[data-fancybox='gallery']").fancybox({
        hash: false,
        backFocus: false,
        loop: true,
        mobile: {
            clickSlide: 'close',
            backFocus: false
        }
    });
}
