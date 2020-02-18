import Swiper from 'swiper';


export default function() {
    const slider = document.querySelector('.js-our-clients-slider');

    if (!slider || document.body.classList.contains('is-admin')) return;

    new Swiper(slider.querySelector('.swiper-container'), {
        slidesPerView: 1,
        effect: 'fade',
        loop: true,
        navigation: {
            nextEl: slider.querySelector('.js-our-clients-slider-next'),
            prevEl: slider.querySelector('.js-our-clients-slider-prev')
        }
    });
}
