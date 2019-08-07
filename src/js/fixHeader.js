export default function() {
    const header = document.querySelector('.js-page-header');

    if (!header) return;

    let headerStart = header.offsetTop;

    function fixHeader() {
        
        const scrollTop = window.pageYOffset;

        if (scrollTop > headerStart) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }

        console.log('Header starts at', headerStart);
        console.log('Scrolled from top', scrollTop);
    }

    window.addEventListener('scroll', fixHeader);

    window.addEventListener('resize', function() {
        header.classList.remove('fixed');
        headerStart = header.offsetTop;
    })
}
