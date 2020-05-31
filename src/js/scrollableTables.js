import PerfectScrollbar from 'perfect-scrollbar';

export default function() {
    function wrapTable(element) {
        const tableBlock = document.createElement('div');
        tableBlock.className = 'table-block';
        const tablePaddingWrapper = document.createElement('div');
        tablePaddingWrapper.className = 'table-block__padding-wrapper';
        const tableScrollContainer = document.createElement('div');
        tableScrollContainer.className = 'table-block__scroll-container';

        element.parentElement.insertBefore(tableBlock, element);
        tableBlock.appendChild(tablePaddingWrapper);
        tablePaddingWrapper.appendChild(tableScrollContainer);
        tableScrollContainer.appendChild(element);

        return tableScrollContainer;
    }

    const scrollableTables = Array.from(document.querySelectorAll('.default-content table'));
  

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
        const tableScrollContainer = wrapTable(table);
      

        new PerfectScrollbar(tableScrollContainer, {
            maxScrollbarLength: 105
        });

        addDragScrollHandlers(tableScrollContainer);
    });
}
