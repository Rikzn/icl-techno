import izimodal from 'izimodal';

export default function popap() {

    const popap = document.querySelector('.modal');
    console.log(popap);
    if (popap) {
        $(".modal").iziModal({
            width: 682,
            overlayColor: 'rgba(0, 0, 0, 0.8)',
            appendTo: 0,
            zindex: 1400
        });
    }


}