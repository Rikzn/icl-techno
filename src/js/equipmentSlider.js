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

        const tabsNavigation = item.querySelector('.equipment__tabs-navigation');
        const navBtns = Array.from(item.querySelectorAll('.equipment__tab-button'));

        function chooseCategory(category) {
            const slides = Array.from(item.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)'));
            const newSlideIndex = slides.findIndex(element => element.getAttribute('data-category') === category);
            if (newSlideIndex !== -1) {
                slider.slideToLoop(newSlideIndex);
                slider.update();
            }
        }

        function setActiveBtn(category) {
            navBtns.forEach(btn => {
                if (btn.getAttribute('data-category') === category) {
                    btn.classList.add('active');
                    const offsetLeft = btn.offsetLeft;
                    if (Element.prototype.scrollTo) {
                        tabsNavigation.scrollTo({
                            top: 0,
                            left: offsetLeft - 20,
                            behavior: 'smooth'
                        });
                    }
                } else {
                    btn.classList.remove('active');
                }
            });
        }
        navBtns.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                const category = btn.getAttribute('data-category');
                if (!category) return;
                setActiveBtn(category);
                chooseCategory(category);
            });
        });

        if (navBtns.length > 0) {
            chooseCategory(navBtns[0].getAttribute('data-category'));
        }

        slider.on('slideChangeTransitionEnd', function() {
            const slides = Array.from(item.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)'));
            const activeSlide = slides[slider.realIndex];

            setActiveBtn(activeSlide.getAttribute('data-category'));
        });
    });
}
