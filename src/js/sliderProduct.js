import Swiper from 'swiper';

export default function sliderProject() {
    const completedProjects = document.querySelectorAll('.product-block');

    if (window.matchMedia('(max-width:700px)').matches) {
        if (completedProjects) {

            const swiper = new Swiper('.swiper-container', {
                
                direction: 'horizontal',
                slidesPerView: 1,
                loop: true,
              
                
                pagination: {
                  el: '.swiper-pagination',
                  type: 'bullets',
                },
              
              });
        }
    }

    



}
