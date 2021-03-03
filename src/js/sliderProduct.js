import Swiper, { Navigation, Pagination } from 'swiper';


export default function sliderProduct() {
    const completedProjects = document.querySelectorAll('.product-block__slider');
        if (completedProjects) {
            Swiper.use([Navigation, Pagination]);
            const mySwiper = new Swiper('.product-block-slider', {
                loop: true,
              
                // If we need pagination
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
              
                // Navigation arrows
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              })
        }
}
