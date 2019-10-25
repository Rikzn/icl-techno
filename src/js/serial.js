import DriverSearch from './classes/DriverSearch';


export default function() {
    const serials = Array.from(document.querySelectorAll('.js-serial'));

    serials.forEach(serial => new DriverSearch(serial))
}

