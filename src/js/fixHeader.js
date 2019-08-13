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

        // console.log('Header starts at', headerStart);
        // console.log('Scrolled from top', scrollTop);
    }

    window.addEventListener('scroll', fixHeader);

    // window.addEventListener('resize', function() {
    //     header.classList.remove('fixed');
        
    //     headerStart = header.offsetTop;
    // })





    const burgerBtn = document.querySelector('.js-burger-btn');

    if (!burgerBtn) return;

    let burgerMenuOpen = false;

    burgerBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (burgerMenuOpen) {
            document.documentElement.classList.remove('burger-menu-shown');
            burgerMenuOpen = false;
            // console.log('PageYOffset', window.pageYOffset);
            // console.log('Header Start', headerStart);
            if (window.pageYOffset <= headerStart) {
                header.classList.remove('fixed');
            }
        } else {
            document.documentElement.classList.add('burger-menu-shown');
            header.classList.add('fixed');
            burgerMenuOpen = true;
        }
    })
}
