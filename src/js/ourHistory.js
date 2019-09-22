import Swiper from 'swiper/dist/js/swiper.js';

export default function() {
    const ourHistorySliders = Array.from(document.querySelectorAll('.js-our-history'));

    console.log('History sliders', ourHistorySliders);
    ourHistorySliders.forEach(slider => {
        console.log('Initializing', slider);
        const historySliderMain = slider.querySelector('.js-our-history-info-slider');
        const historySliderThumbs = slider.querySelector('.js-our-history-range-slider');

        if (!historySliderMain) {
            console.error('No main container in history slider');
            return;
        }

        const containerMain = historySliderMain.querySelector('.swiper-container');
        if (!containerMain) {
            console.error('No swiper container for: ', slider);
            return;
        }

        const sliderOptions = {
            spaceBetween: 40,
            // effect: 'fade',
            autoHeight: true,
            navigation: {
                prevEl: slider.querySelector('.js-history-slider-prev'),
                nextEl: slider.querySelector('.js-history-slider-next')
            },
            thumbs: {}
        };

        if (historySliderThumbs) {
            const containerThumbs = historySliderThumbs.querySelector('.swiper-container');
            const wrapperThumbs = historySliderThumbs.querySelector('.swiper-wrapper');

            sliderOptions.thumbs.swiper = new Swiper(containerThumbs, {
                slidesPerView: 'auto',
                spaceBetween: 24,
                threshold: 10,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                freeMode: true
            });
        }

        new Swiper(containerMain, sliderOptions);
    });
}
