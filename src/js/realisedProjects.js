import Swiper from 'swiper';


export default function() {
    const realisedProjectsSlider = document.querySelector('.js-realised-projects-slider');
    

    if (!realisedProjectsSlider) return;

    const elementsToMove = Array.from(realisedProjectsSlider.querySelectorAll('.realised-projects__list-item--large'));
    let outsideCardsList;
   
    let cardsMoved = false;

    function moveLargeCardsOutside() {
        if (cardsMoved) return;

        outsideCardsList = document.createElement('ul');
        outsideCardsList.className = 'realised-projects__outside-cards-list';

        elementsToMove.forEach(element => {
            outsideCardsList.appendChild(element);
        })

        realisedProjectsSlider.parentElement.parentElement.insertBefore(outsideCardsList, realisedProjectsSlider.parentElement)

        cardsMoved = true;
    }

    function moveLargeCardsInside() {
        if (!cardsMoved) return;
        elementsToMove.forEach(element => {
            
            realisedProjectsSlider.firstElementChild.insertBefore(element, realisedProjectsSlider.firstElementChild.firstElementChild);
        })

        outsideCardsList.remove()

        cardsMoved = false;
    }

    

    

    let sliderInstance = null;
    const sliderShowBreakpoint = 768;

    const swiperContainer = realisedProjectsSlider;
    const swiperContainerOriginalClassName = realisedProjectsSlider.className;
    const swiperWrapper = realisedProjectsSlider.querySelector('.realised-projects__list');
    const swiperWrapperOriginalClassName = swiperWrapper.className;
    const swiperSlides = Array.from(swiperWrapper.querySelectorAll('.realised-projects__list-item:not(.realised-projects__list-item--large)'));
    const swiperSlideOriginalClassName = swiperSlides[0].className;

    function mountSlider() {
        moveLargeCardsOutside();

        swiperContainer.className = 'swiper-container';
        swiperWrapper.className = 'swiper-wrapper';
        swiperSlides.forEach(slide => {
            slide.className = 'swiper-slide';
        });

        sliderInstance = new Swiper(swiperContainer, {
            slidesPerView: 'auto',
            spaceBetween: 15,
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
            moveLargeCardsInside();

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
