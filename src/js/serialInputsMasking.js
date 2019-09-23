import Inputmask from 'inputmask';

export default function() {
    const serialInputs = Array.from(document.querySelectorAll('.js-serial-masking'));

    serialInputs.forEach(input => {
        var im = new Inputmask('9 9 9 9 9 9 9 9 9 9 9 9', { placeholder: '' });
        im.mask(input);
    });
}
