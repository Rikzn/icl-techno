export default function() {
    const navigationStandaloneList = document.querySelector('.navigation-standalone .main-nav__submenu-products');

    if (!navigationStandaloneList) return;

    const items = Array.from(navigationStandaloneList.querySelectorAll('.main-nav__submenu-products-item, .main-nav__submenu-products-item-more-link'));

    items.forEach(item => console.log('Item offset parent', item.offsetParent));

    const activeItem = items.find(element => element.classList.contains('active'));

    if (activeItem) {
        const offsetLeft = activeItem.offsetLeft;

        if (Element.prototype.scrollTo) {
            navigationStandaloneList.scrollTo({
                top: 0,
                left: offsetLeft
            });
        }

    }
}
