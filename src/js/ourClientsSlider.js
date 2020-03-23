import Swiper from 'swiper';

export default function() {
    if (document.body.classList.contains('is-admin')) return;

    const sliders = Array.from(document.querySelectorAll('.js-our-clients-slider'));

    sliders.forEach(slider => {
        new Swiper(slider.querySelector('.swiper-container'), {
            slidesPerView: 1,
            effect: 'fade',
            loop: true,
            navigation: {
                nextEl: slider.querySelector('.js-our-clients-slider-next'),
                prevEl: slider.querySelector('.js-our-clients-slider-prev')
            }
        });
    });
}
