import Swiper from 'swiper';


export default function() {
    const equipmentSliders = Array.from(document.querySelectorAll('.js-equipment-slider'));

    equipmentSliders.forEach(item => {
        const container = item.querySelector('.swiper-container');
        if (!container) return;

        const slider = new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 10,
            centeredSlides: false,
            loop: true,
            breakpoints: {
                371: {
                    slidesPerView: 'auto',
                    spaceBetween: 20
                },

                769: {
                    slidesPerView: 'auto',
                    spaceBetween: 40
                }
            },
            on: {
                beforeResize() {
                    if (window.innerWidth <= 768) {
                        slider.slides.css('width', '');
                    }
                }
            }
        });
    });
}
