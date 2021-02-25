import Swiper from 'swiper';

export default function sliderProject() {
    const completedProjects = document.querySelectorAll('.completed-projects');
    if (completedProjects) {

        const swiper = new Swiper('.swiper-container', {
            
            direction: 'horizontal',
            slidesPerView: 1,
            loop: true,
          
            
            pagination: {
              el: '.swiper-pagination',
            },
          
            
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
