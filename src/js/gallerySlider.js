import Swiper from 'swiper/dist/js/swiper.js';

export default function() {
    const gallerySliders = Array.from(document.querySelectorAll('.js-gallery-slider'));

    for (const gallerySlider of gallerySliders) {
        console.log('Initializing slider', gallerySlider);
        const gallerySliderMain = gallerySlider.querySelector('.js-gallery-slider-main');
        const gallerySliderThumbs = gallerySlider.querySelector('.js-gallery-slider-thumbs');

        if (!gallerySliderMain) {
            console.error('No main container in gallery slider');
            return;
        }

        const containerMain = gallerySlider.querySelector('.swiper-container');
        if (!containerMain) {
            console.error('No swiper container for: ', gallerySlider);
            return;
        }

        const sliderOptions = {
            navigation: {
                prevEl: gallerySlider.querySelector('.js-gallery-slider-prev'),
                nextEl: gallerySlider.querySelector('.js-gallery-slider-next')
            },
            thumbs: {}
        };

        if (gallerySliderThumbs) {
            const containerThumbs = gallerySliderThumbs.querySelector('.swiper-container');
            sliderOptions.thumbs.swiper = new Swiper(containerThumbs, {
                slidesPerView: 9,
                spaceBetween: 24,
                threshold: 10,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                breakpoints: {
                    360: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    },
                    576: {
                        slidesPerView: 5,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 24
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 24
                    },
                    1200: {
                        slidesPerView: 7,
                        spaceBetween: 24
                    }
                }
            });
        }

        console.log('Options', sliderOptions);

        new Swiper(containerMain, sliderOptions);
    }
}
