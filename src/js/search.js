export default function() {
    const searchBtn = document.querySelector('.js-search-btn');
    const searchInput = document.querySelector('.js-search-input');
    const pageHeader = document.querySelector('.js-page-header');
    let searchOpen = false;

    if (!searchBtn || !searchInput || !pageHeader) return;

    const outsideClickListener = event => {
        if (!searchBtn.parentElement.contains(event.target) && searchOpen) { 
            pageHeader.classList.remove('search-open');
            searchOpen = false;
            document.documentElement.removeEventListener('click', outsideClickListener);
        }
    };

    searchBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (!searchOpen) {
            pageHeader.classList.add('search-open');
            document.documentElement.addEventListener('click', outsideClickListener);
            searchOpen = true;
        } else {
            pageHeader.classList.remove('search-open');
            document.documentElement.removeEventListener('click', outsideClickListener);
            searchOpen = false;
        }
    });
}
