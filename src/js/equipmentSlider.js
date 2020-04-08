import Swiper from 'swiper';

export default function() {
    const equipmentSliders = Array.from(document.querySelectorAll('.js-equipment-slider'));

    equipmentSliders.forEach(item => {
        const container = item.querySelector('.swiper-container');
        if (!container) return;

        const slider = new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 10,
            loopedSlides: 8,
            centeredSlides: true,
            watchOverflow: true,
            navigation: {
                nextEl: item.querySelector('.equipment__slider-btn--next'),
                prevEl: item.querySelector('.equipment__slider-btn--prev')
            },
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

        const navBtns = Array.from(item.querySelectorAll('.equipment__tab-button'));

        function chooseCategory(btn) {
            const category = btn.getAttribute('data-category');
            if (!category) return;
            navBtns.forEach(element => element.classList.remove('active'));
            btn.classList.add('active');
            const slides = Array.from(item.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)'));
            console.log('Clicked btn category', category);

            const newSlideIndex = slides.findIndex(element => element.getAttribute('data-category') === category);

            if (newSlideIndex !== -1) {
                console.log('Slideindex', newSlideIndex);

                slider.slideToLoop(newSlideIndex);
                slider.update();
            }
        }
        navBtns.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                chooseCategory(btn);
            });
        });

        if (navBtns.length > 0) {
            chooseCategory(navBtns[0]);
        }
    });
}
