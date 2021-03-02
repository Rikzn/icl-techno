import axios from 'axios';

class DriverSearch {
    constructor(rootElement) {
        this.elements = {
            rootElement,
            searchResultsContainer: rootElement.querySelector('.js-driver-search-results'),
            searchForm: rootElement.querySelector('.js-driver-search-form')
        };
        this.state = {
            data: []
        };

    
        this.checkElements();
        this.addListeners();
        this.initialize();
    }

    checkElements() {
        for (let key of Object.keys(this.elements)) {
            const element = this.elements[key];
            if (!element) throw new Error(`No element ${key} is present`);
        }
    }

    initialize() {
        this.elements.searchResultsContainer.innerHTML = '';
    }

    setState = newState => {
        const oldState = this.state;
        this.state = {
            ...oldState,
            ...newState
        };
    };

    tableRowTemplate(title, size, link) {
        return `
        <tr>
            <td data-th="Название">${title}</td>
            <td data-th="Размер">${size}</td>
            <td data-th="Файл"><a href="${link}">Скачать</a></td>
        </tr>
        `;
    }

    tableTemplate(tableRows) {
        return `
        <table>
            <thead>
                <tr>
                    <th>Название</th>
                    <th>Размер</th>
                    <th>Файл</th>
                </tr>
            </thead>
            <tbody>
                ${tableRows}
            </tbody>
        </table>
        `;
    }

    errorTemplate(message) {
        return `
            <div class="serial__error-message">
                <svg width="60" height="60" aria-hidden="true" class="icon-arrow-cross">
                    <use xlink:href="#cross"></use>
                </svg>
                ${message}
            </div>
        `;
    }

    spinnerTemplate() {
        return `
            <div class="serial__search-preloader">
                <svg viewBox="0 0 140 140">
                    <circle cx="70" cy="70" r="66"></circle>
                </svg>
                Поиск драйверов...
            </div>
        `;
    }

    insertElement = async elementTemplate => {
        if (this.elements.searchResultsContainer.firstElementChild) {
            await this.removeElement(this.elements.searchResultsContainer.firstElementChild);
        }

        const wrapper = document.createElement('div');
        wrapper.className = 'serial__search-results-animation-wrapper';
        wrapper.innerHTML = elementTemplate;

        wrapper.classList.add('serial-fade-in');
        setTimeout(function() {
            wrapper.addEventListener('animationend', function() {
                wrapper.classList.remove('serial-fade-in');
                wrapper.classList.remove('serial-fade-in-playing');
            });
            wrapper.classList.add('serial-fade-in-playing');
        }, 50);

        this.elements.searchResultsContainer.appendChild(wrapper);
    };

    removeElement = element =>
        new Promise((resolve, reject) => {
            
            element.classList.add('serial-fade-out');
            setTimeout(function() {
                element.addEventListener('animationend', function() {
                    element.remove();
                    resolve('removed');
                });
                element.classList.add('serial-fade-out-playing');
            }, 50);
        });

    renderResults = async () => {
        let rows = '';
        let table = '';

        this.state.data.forEach(driver => {
            const row = this.tableRowTemplate(driver.Comment, driver.DriverSize, driver.DriverName);
            rows = rows + row;
        });

        table = this.tableTemplate(rows);

        await this.insertElement(table);
    };

    showLoader = async () => {
        await this.insertElement(this.spinnerTemplate());
    };

    showError = async (message) => {
        await this.insertElement(this.errorTemplate(message));
    };

    handleFormSubmit = async event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const serial = formData.get('serial').replace(/ /g, '');

        await this.showLoader();
        let response;

        try {
            response = await this.makeAPIcall(serial);
           
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400 || error.response.status === 404) {
                    await this.showError(`<span>По данному запросу ничего не найдено, пожалуйста свяжитесь с службой поддержки по адресу: <a href="mailto:getdrivers@icl.kazan.ru">getdrivers@icl.kazan.ru</a> с указанием серийного номера изделия.</span>`);
                    
                } else {
                    await this.showError(`Ошибка ${error.response.status}`);
                }
            } else if (error.request) {
                await this.showError('Сервер не отвечает');
            } else {
                await this.showError('Произошла ошибка');
            }
            return;
        }

        this.setState({
            data: response.data
        });
        await this.renderResults();
    };

    makeAPIcall(serial) {
        return axios.get(`https://drivers.icl-techno.ru/drivers.json.php?&sn=${serial}`);
    }

    addListeners() {
        this.elements.searchForm.addEventListener('submit', this.handleFormSubmit);
    }
}

export default DriverSearch;
