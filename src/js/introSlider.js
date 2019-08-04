export default function() {
    const introSlider = document.querySelector('.js-intro-slider');

    if (!introSlider) return;

    // Основные переменные

    const slides = Array.from(introSlider.querySelector('.js-intro-slider-slides').children);
    const paginationItems = Array.from(introSlider.querySelector('.js-intro-slider-pagination').children);
    let activeSlideIndex = 0;
    let activeMark;
    let autoplayEnabled = true;
    const autoplayInterval = 3000;

    // Создание метки активного элемента

    activeMark = document.createElement('span');
    activeMark.className = 'intro-slider__pagination-active-slide-mark';
    paginationItems[0].appendChild(activeMark);
    activeMark.style.transform = `translateX(${activeSlideIndex * 100}%)`;

    // Функция установки активного слайда

    function setActiveSlide(index) {
        if (index === activeSlideIndex) return;
        slides[activeSlideIndex].classList.remove('active');
        activeSlideIndex = index;
        slides[activeSlideIndex].classList.add('active');
        console.log(`Setting active index ${activeSlideIndex}`);
        activeMark.style.transform = `translateX(${activeSlideIndex * 100}%)`;
    }

    // Функция автоплея

    function autoplay() {
        if (!autoplayEnabled) return;

        let nextPaginationItem;
        let nextActiveIndex;
        if (activeSlideIndex + 2 <= slides.length) {
            nextActiveIndex = activeSlideIndex + 1;
        } else {
            nextActiveIndex = 0;
        }

        nextPaginationItem = paginationItems[nextActiveIndex];

        const animationEndHandler = () => {
            nextPaginationItem.classList.remove('incoming');
            nextPaginationItem.style.animationDuration = '';
            nextPaginationItem.removeEventListener('animationend', animationEndHandler);
        };
        nextPaginationItem.addEventListener('animationend', animationEndHandler);
        nextPaginationItem.style.animationDuration = `${autoplayInterval / 1000}s`;
        nextPaginationItem.classList.add('incoming');

        setTimeout(function() {
            setActiveSlide(nextActiveIndex);
            autoplay();
        }, autoplayInterval);
    }


    autoplay();



    // Обработчики событий на ссылки пагинации слайдера

    paginationItems.forEach((item, index) => {
        const link = item.querySelector('a');

        link.addEventListener('click', function(event) {
            event.preventDefault();
            autoplay = false;
            setActiveSlide(index);
        });
    });
}
