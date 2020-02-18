export default function() {
    document.addEventListener('click', event => {
        const increaseButtonClicked = event.target.matches('.amount-btn__increase') || event.target.closest('.amount-btn__increase');
        const decreaseButtonClicked = event.target.matches('.amount-btn__decrease') || event.target.closest('.amount-btn__decrease');
        if (increaseButtonClicked) {
            event.preventDefault();
            const button = event.target.matches('.amount-btn__increase') ? event.target : event.target.closest('.amount-btn__increase');
            const number = button.previousElementSibling;
            if (!number) return;
            number.value++;
        } else if (decreaseButtonClicked) {
            event.preventDefault();
            const button = event.target.matches('.amount-btn__decrease') ? event.target : event.target.closest('.amount-btn__decrease');
            const number = button.nextElementSibling;
            if (!number || number.value == 0) return;
            number.value--;
        }
    });
}
