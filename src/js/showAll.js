export default function() {
    const showAll = Array.from(document.querySelectorAll('.js-show-all'));

    showAll.forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
           
            element.classList.toggle('active');
            element.textContent = element.classList.contains('active') ? 'Скрыть' : 'Показать все'
           
        })
    })
}