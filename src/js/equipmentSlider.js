import Swiper from 'swiper/dist/js/swiper.js';

export default function() {
    const equipmentSliders = Array.from(document.querySelectorAll('.js-equipment-slider'));

    equipmentSliders.forEach(item => {
        const container = item.querySelector('.swiper-container');
        if (!container) return;


        const slider = new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 40,
            centeredSlides: true,
            loop: true,
            on: {
                beforeResize() {
                    if (window.innerWidth <= 768) {
                        bonusSlider.slides.css('width', '');
                    }
                }
            }
        });
    })
}