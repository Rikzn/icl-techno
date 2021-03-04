import Swiper, { Navigation, Pagination } from 'swiper';

export default function sliderProject() {
    const completedProjects = document.querySelectorAll('.completed-projects');
    if (completedProjects) {
        Swiper.use([Navigation, Pagination]);
        const mySwiper = new Swiper('.completed-projects-slider-container', {
            
            direction: 'horizontal',
            slidesPerView: 1,
            loop: true,

            navigation: {
              nextEl: '.completed-projects__slider-next',
              prevEl: '.completed-projects__slider-prev',
            },
            breakpoints: {
              370: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1240: {
                slidesPerView: 3,
              }
            }
          
          });
    }



}
