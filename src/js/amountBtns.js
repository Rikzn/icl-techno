export default function() {
    const amountBtns = Array.from(document.querySelectorAll('.js-amount-btn'));

    amountBtns.forEach(container => {
        container.addEventListener('click', event => {
            const increaseButtonClicked = event.target.matches('.amount-btn__increase') || event.target.closest('.amount-btn__increase');
            const decreaseButtonClicked = event.target.matches('.amount-btn__decrease') || event.target.closest('.amount-btn__decrease');

            console.log('Target on amount btns', event.target);
            console.log('Target on amount btns', event.target.closest('.amount-btn__increase'));
            if (increaseButtonClicked) {
                event.preventDefault();
                const button = event.target.matches('.amount-btn__increase') ? event.target : event.target.closest('.amount-btn__increase');
                const number = button.previousElementSibling;
                if (!number) return;
                number.value++;
                console.log('Increased', number);
            } else if (decreaseButtonClicked) {
                event.preventDefault();
                const button = event.target.matches('.amount-btn__decrease') ? event.target : event.target.closest('.amount-btn__decrease');
                const number = button.nextElementSibling;
                if (!number || number.value == 0) return;
                number.value--;     
                console.log('Decreased', number); 
            }
        });
    });

    // amountBtns.forEach(btn => {
    //     const minus = btn.querySelector('.amount-btn__decrease');
    //     const plus = btn.querySelector('.amount-btn__increase');
    //     const input = btn.querySelector('.amount-btn__number');

    //     const minValue = input.hasAttribute('min') ? input.getAttribute('min') : 0;

    //     if (input.value === minValue) {
    //         minus.setAttribute('disabled', '');
    //     }

    //     function handleClick(event, action) {
    //         event.preventDefault();

    //         if (action === 'plus') {
    //             input.value++;
    //             if (input.value > minValue) {
    //                 minus.removeAttribute('disabled');
    //             }
    //         } else if (action === 'minus' && input.value - 1 >= minValue) {
    //             input.value--;

    //             if (input.value === minValue) {
    //                 minus.setAttribute('disabled', '');
    //             }
    //         }
    //     }

    //     minus.addEventListener('click', handleClick.bind(minus, event, 'minus'));
    //     plus.addEventListener('click', handleClick.bind(plus, event, 'plus'));
    // });
}
