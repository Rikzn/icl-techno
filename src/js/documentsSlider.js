import MobileSlider from './classes/MobileSlider';

export default function() {
    const documentsSliders = Array.from(document.querySelectorAll('.js-documents-slider'));
    const breakpoint = 768;
    const options = {
        slidesPerView: 'auto',
        spaceBetween: 20,
    }

    documentsSliders.forEach(element => {
        new MobileSlider(element, breakpoint, options);
    })
}