
export default function hover() {
    const elements = Array.from(document.querySelectorAll('.js-services'));
    elements.forEach(element => {
        const cards = Array.from(element.querySelectorAll('.js-services-card'));
        const cardImg = Array.from(element.querySelectorAll('.js-services-img'));
        function setActiveCard(index) {
            cards.forEach(card => card.classList.remove('active'));
            if (typeof index !== 'undefined' && index !== null && cards[index]) {
                cards[index].classList.add('active');
                element.classList.add('card-hovered');
            } else {
                element.classList.remove('card-hovered');
            }
        }
        cards.forEach((card, cardIndex) => {
            card.addEventListener('mouseenter', () => {
                setActiveCard(cardIndex);
            });

            card.addEventListener('mouseleave', () => {
                setActiveCard(null);
            });
        });
    });
 
}
