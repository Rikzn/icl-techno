import Swiper, { Navigation, Pagination } from 'swiper';


export default function sliderProduct() {
    if (window.matchMedia('(max-width:500px)').matches) {
      console.log('Ghbdtn');
      const completedProjects = document.querySelectorAll('.product-block__slider');
        if (completedProjects) {
            Swiper.use([Navigation, Pagination]);
            const mySwiper = new Swiper('.product-block__image', {
                loop: false,

                pagination: {
                  el: '.product__image-pagination',
                  clickable: true,
                },

              })
        }
    }
    
}
