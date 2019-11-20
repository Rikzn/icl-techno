export default function() {
    const amountBtns = Array.from(document.querySelectorAll('.js-amount-btn'));

    amountBtns.forEach(btn => {
        const minus = btn.querySelector('.amount-btn__decrease');
        const plus = btn.querySelector('.amount-btn__increase');
        const input = btn.querySelector('.amount-btn__number');

        const minValue = input.hasAttribute('min') ? input.getAttribute('min') : 0;

        if (input.value === minValue) {
            minus.setAttribute('disabled', '');
        }

        function handleClick(event, action) {
            event.preventDefault();
            
            if (action === 'plus') {  
                input.value++;
                if (input.value > minValue) {
                    minus.removeAttribute('disabled');
                }
            } else if (action === 'minus' && input.value - 1 >= minValue) {
                input.value--;

                if (input.value === minValue) {
                    minus.setAttribute('disabled', '');
                }
            }
        }

        minus.addEventListener('click', handleClick.bind(minus, event, 'minus'));
        plus.addEventListener('click', handleClick.bind(plus, event, 'plus'));
    });
}
