import MobileSlider from "./classes/MobileSlider";

export default function() {
    const homeNewsSliders = Array.from(document.querySelectorAll('.js-home-news-slider'));
    const breakpoint = 768;
    const options = {
        slidesPerView: 'auto',
        spaceBetween: 15,
    }

    homeNewsSliders.forEach(element => {
        new MobileSlider(element, breakpoint, options)
    })
}