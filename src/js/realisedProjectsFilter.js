export default function() {
    const filters = Array.from(document.querySelectorAll('.js-realised-projects-filter'));
    console.log('Filters', filters);
    filters.forEach(item => {
        const btns = Array.from(item.querySelectorAll('.js-realised-projects-filter-btns .tabs-block__tabs-navigation-btn'));
        const initialBtnIndex = 0;
        const checkboxes = Array.from(item.querySelectorAll('.js-realised-projects-filter-year input[type="checkbox"]'));
        const cards = Array.from(item.querySelectorAll('.realised-projects__list-item'));

        function filterItems() {
            const activeBtns = btns.filter(btn => btn.classList.contains('active'));
            const activeCheckboxes = checkboxes.filter(checkbox => checkbox.checked);

            const selectedCategories = activeBtns.map(btn => btn.getAttribute('data-category'));

            const selectedYears = activeCheckboxes.map(box => box.value);

            console.log('Selected categories', selectedCategories);

            console.log('Selected years', selectedYears);

            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                const cardYear = card.getAttribute('data-year');

                if (selectedCategories.includes(cardCategory) && selectedYears.includes(cardYear)) {
                    console.log('Item is shown', card);
                    card.classList.remove('hidden');
                } else {
                    console.log('Item is hidden', card);
                    card.classList.add('hidden');
                }
            });
        }

        btns.forEach((btn, btnIndex) => {
            btn.classList.remove('active');
            if (btnIndex === initialBtnIndex) {
                btn.classList.add('active');
            }

            btn.addEventListener('click', event => {
                event.preventDefault();
                btns.forEach(item => item.classList.remove('active'));
                btns[btnIndex].classList.add('active');

                filterItems();
            });
        });

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', filterItems);
        });

        filterItems();
    });
}
