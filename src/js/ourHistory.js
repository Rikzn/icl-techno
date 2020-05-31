import Swiper from 'swiper';


export default function() {
    const ourHistorySliders = Array.from(document.querySelectorAll('.js-our-history'));
    ourHistorySliders.forEach(slider => {
       
        const historySliderMain = slider.querySelector('.js-our-history-info-slider');
        const historySliderThumbs = slider.querySelector('.js-our-history-range-slider');

        if (!historySliderMain) {
            console.error('No main container in history slider');
            return;
        }

        const containerMain = historySliderMain.querySelector('.swiper-container');
        if (!containerMain) {
            console.error('No swiper container for: ', slider);
            return;
        }

        const sliderOptions = {
            spaceBetween: 40,
            autoHeight: true,
            navigation: {
                prevEl: slider.querySelector('.js-history-slider-prev'),
                nextEl: slider.querySelector('.js-history-slider-next')
            },
            thumbs: {}
        };

        const historySliderThumbnailsToMove = Array.from(slider.querySelectorAll('.our-history__hidden-thumb-container .our-history__range-slider-block'));

        if (historySliderThumbs && historySliderThumbnailsToMove.length !== 0) {
            const containerThumbs = historySliderThumbs.querySelector('.swiper-container');
            const wrapperThumbs = historySliderThumbs.querySelector('.swiper-wrapper');


            historySliderThumbnailsToMove.forEach(thumbCard => {
                const swiperSlide = document.createElement('div');
                swiperSlide.className = 'swiper-slide';
                swiperSlide.appendChild(thumbCard);
                thumbCard.parentElement.remove();
                wrapperThumbs.appendChild(swiperSlide);
            })

            sliderOptions.thumbs.swiper = new Swiper(containerThumbs, {
                slidesPerView: 'auto',
                spaceBetween: 24,
                threshold: 10,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                freeMode: true
            });
        }

        new Swiper(containerMain, sliderOptions);
    });
}
