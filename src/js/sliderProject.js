import Swiper from 'swiper';

export default function sliderProject() {
    const completedProjects = document.querySelectorAll('.completed-projects');
    if (completedProjects) {

        const swiper = new Swiper('.swiper-container', {
            
            direction: 'horizontal',
            slidesPerView: 3,
            loop: true,
          
            
            pagination: {
              el: '.swiper-pagination',
            },
          
            
            navigation: {
              nextEl: '.completed-projects__slider-next',
              prevEl: '.completed-projects__slider-prev',
            },
          
          });
    }



}
