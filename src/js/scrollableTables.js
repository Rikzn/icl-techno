import PerfectScrollbar from 'perfect-scrollbar';

export default function() {
    const scrollableTables = Array.from(document.querySelectorAll('.table-scroll-container'));
    console.log('Scrollable tables', scrollableTables);

    function addDragScrollHandlers(element) {
        var pressed = false;
        var startX;
        var scrollLeft;
        element.addEventListener('mousedown', function(event) {
            pressed = true;
            element.classList.add('active');
            startX = event.pageX - element.offsetLeft;
            scrollLeft = element.scrollLeft;
        });
        element.addEventListener('mouseleave', function() {
            pressed = false;
            element.classList.remove('active');
        });
        element.addEventListener('mouseup', function() {
            pressed = false;
            element.classList.remove('active');
        });
        element.addEventListener('mousemove', function(event) {
            if (!pressed) {
                return;
            }
            event.preventDefault();
            var x = event.pageX - element.offsetLeft;
            var walk = x - startX;
            element.scrollLeft = scrollLeft - walk;
        });
    }

    scrollableTables.forEach(table => {
        new PerfectScrollbar(table, {
            maxScrollbarLength: 105
        });

        addDragScrollHandlers(table);
    });
}
