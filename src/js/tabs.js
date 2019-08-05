export default function() {
    const tabs = Array.from(document.querySelectorAll('.js-tabs'));

    tabs.forEach(item => {
        const tabButtons = Array.from(item.querySelector('.js-tabs-navigation').children);
        const tabItems = Array.from(item.querySelector('.js-tabs-list').children);
        let activeTabIndex;

        if (tabButtons && tabItems) {
            if (tabButtons.length !== tabItems.length) {
                console.log('Количество элементов управления не равно количеству табов');
                return;
            }
            activeTabIndex = tabButtons.findIndex(element => {
                return element.classList.contains('active');
            });
            if (activeTabIndex != -1) {
                activeTabIndex = 0;
            }

            setActiveTab(activeTabIndex);

            function setActiveTab(nextIndex, previousIndex) {
                if (arguments.length >= 2) {
                    tabButtons[previousIndex].classList.remove('active');
                    tabItems[previousIndex].classList.remove('active');
                }
                tabButtons[nextIndex].classList.add('active');
                tabItems[nextIndex].classList.add('active');
                activeTabIndex = nextIndex;
            }

            tabButtons.forEach((button, index) => {
                button.addEventListener('click', function(event) {
                    event.preventDefault();
                    if (index === activeTabIndex) {
                        return;
                    }
                    setActiveTab(index, activeTabIndex);
                })
            });
        } else {
            console.log('Отсутвуют кнопки или табы');
            return;
        }
    });
}
