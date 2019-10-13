import Swiper from 'swiper';


export default function() {
    const textInsertionSliders = Array.from(document.querySelectorAll('.js-text-insertion-slider'));
    textInsertionSliders.forEach(slider => {
        const sliderContainer = slider.querySelector('.swiper-container');
        if (!sliderContainer) {
            console.log('No slider container for: ', slider);
            return;
        }
        new Swiper(sliderContainer, {
            slidesPerView: 1,
            autoHeight: true,
            navigation: {
                nextEl: slider.querySelector('.js-text-insertion-slider-next'),
                prevEl: slider.querySelector('.js-text-insertion-slider-prev')
            }
        });
    });
}
