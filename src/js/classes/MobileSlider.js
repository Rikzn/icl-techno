import Swiper from 'swiper/dist/js/swiper.js';

class MobileSlider {
    constructor(element, breakpoint, options = {}) {
        if (!(element instanceof Element)) {
            throw new TypeError(`Expected to receive HTML DOM element`);
        }
        this.slider = null;
        this.options = options;
        this.breakpoint = breakpoint;
        this.swiperContainer = element;
        this.swiperWrapper = this.swiperContainer.firstElementChild;
        if (!this.swiperWrapper) {
            throw new Error('No swiper wrapper present');
        }
        this.swiperSlides = Array.from(this.swiperWrapper.children);
        if (this.swiperSlides.length === 0) {
            console.log('No swiper slides present');
            return;
        }
        this.originalClassnames = {
            container: this.swiperContainer.className,
            wrapper: this.swiperWrapper.className,
            slide: this.swiperSlides[0].className
        };
        this.initialize();
    }

    getSliderInstance = () => {
        return this.slider;
    };

    mountSlider = () => {
        const { swiperContainer, swiperWrapper, swiperSlides } = this;
        swiperContainer.className = 'swiper-container';
        swiperWrapper.className = 'swiper-wrapper';
        swiperSlides.forEach(slide => {
            slide.className = 'swiper-slide';
        });
        this.slider = new Swiper(swiperContainer, this.options);
    };

    destroySlider = () => {
        if (this.slider) {
            const { swiperContainer, swiperWrapper, swiperSlides } = this;
            swiperContainer.className = this.originalClassnames.container;
            swiperWrapper.className = this.originalClassnames.wrapper;
            swiperSlides.forEach(slide => {
                slide.className = this.originalClassnames.slide;
            });
            this.slider.destroy();
            this.slider = null;
        }
    };

    initialize = () => {
        const widthChange = mq => {
            if (mq.matches) {
                this.mountSlider();
            } else if (!mq.matches) {
                this.destroySlider();
            }
        };

        if (matchMedia) {
            const mq = window.matchMedia(`(max-width: ${this.breakpoint}px)`);
            mq.addListener(widthChange);
            widthChange(mq);
        }
    };
}

export default MobileSlider;
