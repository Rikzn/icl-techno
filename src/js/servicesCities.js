import jump from 'jump.js';

export default function() {
    const servicesCities = Array.from(document.querySelectorAll('.js-services-cities'));

    servicesCities.forEach(element => {
        const tabButtons = Array.from(element.querySelectorAll('.services__cities-link'));
        const tabItems = Array.from(element.querySelectorAll('.services__city-card'));


        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabItems.forEach(item => item.classList.remove('active'));

        tabButtons.forEach(btn => {
            btn.addEventListener('click', function(event) {
                event.preventDefault();
                if (btn.hasAttribute('data-target-city')) {
                    const cityName = btn.getAttribute('data-target-city');
                    const cityCard = tabItems.find(element => element.hasAttribute('data-city') && element.getAttribute('data-city') === cityName);

                    if (cityCard) {
                        tabItems.forEach(item => {
                            item.classList.remove('active');
                        });
                        tabButtons.forEach(btn => {
                            btn.classList.remove('active');
                        })
                        cityCard.classList.add('active');
                        btn.classList.add('active');
                        if (window.matchMedia("(max-width: 768px)").matches) {
                           
                            jump(cityCard, {
                                offset: -1 * document.querySelector('.page-header').offsetHeight
                            });
                        }
                        return true;
                    } else {
                        console.warn('Card has not been found');
                        return false;
                    }
                } else {
                    console.warn("No 'data-target-city' attribute on button");
                    return false;
                }
            });
        });

        tabButtons[0].click();
    });
}
