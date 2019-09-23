import MobileSlider from "./classes/MobileSlider";

export default function() {
    const aboutCompanySliders = Array.from(document.querySelectorAll('.js-about-company-slider'));
    const breakpoint = 768;
    const options = {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    };

    aboutCompanySliders.forEach(element => {
        new MobileSlider(element, breakpoint, options);
    });

}
