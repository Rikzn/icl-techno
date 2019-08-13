import Swiper from 'swiper/dist/js/swiper.js';

export default function() {
    const aboutCompanySlider = document.querySelector('.js-about-company-slider');

    if (!aboutCompanySlider) return;

    let sliderInstance = null;
    const sliderShowBreakpoint = 768;

    const swiperContainer = aboutCompanySlider;
    const swiperContainerOriginalClassName = aboutCompanySlider.className;
    const swiperWrapper = aboutCompanySlider.querySelector('.about-company__advantages-slider-wrapper');
    const swiperWrapperOriginalClassName = swiperWrapper.className;
    const swiperSlides = Array.from(swiperWrapper.querySelectorAll('.about-company__advantages-column'));
    const swiperSlideOriginalClassName = swiperSlides[0].className;

    function mountSlider() {
        swiperContainer.className = 'swiper-container';
        swiperWrapper.className = 'swiper-wrapper';
        swiperSlides.forEach(slide => {
            slide.className = 'swiper-slide';
        });

        sliderInstance = new Swiper(swiperContainer, {
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            on: {
                beforeResize() {
                    if (window.innerWidth <= 768) {
                        sliderInstance.slides.css('width', '');
                    }
                }
            }
        });
    }

    function destroySlider() {
        if (sliderInstance) {
            swiperContainer.className = swiperContainerOriginalClassName;
            swiperWrapper.className = swiperWrapperOriginalClassName;
            swiperSlides.forEach(slide => {
                slide.className = swiperSlideOriginalClassName;
            });

            sliderInstance.destroy();
            sliderInstance = null;
        }
    }

    if (matchMedia) {
        const mq = window.matchMedia(`(max-width: ${sliderShowBreakpoint}px)`);
        mq.addListener(widthChange);
        widthChange(mq);
    }

    function widthChange(mq) {
        if (mq.matches) {
            mountSlider();
        } else if (!mq.matches) {
            destroySlider();
        }
    }
}
