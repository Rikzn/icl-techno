import 'picturefill';
import objectFitImages from 'object-fit-images';
import 'objectFitPolyfill';
import detectIt from 'detect-it';
import smoothscroll from 'smoothscroll-polyfill';
import introSlider from './introSlider';
import fixHeader from './fixHeader';
import tabs from './tabs';
import equipmentSlider from './equipmentSlider';
import search from './search';
import homeNewsSlider from './homeNewsSlider';
import aboutCompanySlider from './aboutCompanySlider';
import realisedProjectsSlider from './realisedProjects';
import submenus from './submenus';
import ourClientsSlider from './ourClientsSlider';
import inlineVideo from './inlineVideo';
import textInsertionSlider from './textInsertionSlider';
import scrollableTables from './scrollableTables';
import gallerySlider from './gallerySlider';
import accordeons from './accordeons';
import ourHistory from './ourHistory';
import serialMasking from './serialInputsMasking';
import documentsSlider from './documentsSlider';
import formValidation from './formValidation';
import configurator from './configurator';
import serial from './serial';
import amountBtns from './amountBtns';
import modals from './modals';
import map from './map';
import customSelects from './customSelects';
import servicesCities from './servicesCities';
import teamModals from './teamModals';
import showAll from './showAll';
import realisedProjectsFilter from './realisedProjectsFilter';
import videoLazyLoading from './videosLazyLoading';
import '@fancyapps/fancybox';
import stickyBanner from './stickyBanner';
import openInModals from './openInModal';
import onlyNumericInput from './onlyNumericInput';
import hover from './hover';
import hoverBg from './hoverBg';
import imageShitch from './imageShitch';
import sliderProject from './sliderProject';
import sliderProduct from './sliderProduct';
import popap from './popap';
import AOS from 'aos';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";




import mediaModals from './mediaModals';
import scrollStandaloneMenu from './scrollStandaloneMenu';


const AosItem = document.querySelectorAll('.product-block');

if (AosItem) {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
}






document.addEventListener('DOMContentLoaded', function () {
    // Полифилл .contains для IE 11

    if (!SVGElement.prototype.contains) {
        SVGElement.prototype.contains = HTMLDivElement.prototype.contains;
    }

    // Полифилл для CSS свойства ObjectFit (заполнение контейнера изображением)

    objectFitImages();

    // попап окно

    popap();

    // Слайдер Реализованные проекты

    sliderProject();

    // Слайдер у карточки товара


    imageShitch();

    // Ховер эффект для блока "Решения"

    hover();

    // Ховер эффект для блока "Решения" фон

    hoverBg();

    // Полифилл для метода element.matches();

    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
    }

    // Полифилл метода element.closest();

    (function (ELEMENT) {
        ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
        ELEMENT.closest =
            ELEMENT.closest ||
            function closest(selector) {
                if (!this) return null;
                if (this.matches(selector)) return this;
                if (!this.parentElement) {
                    return null;
                } else return this.parentElement.closest(selector);
            };
    })(Element.prototype);


    // Полифилл функций скроллинга

    smoothscroll.polyfill();

    // Определение тач устройств

    if (detectIt.hasTouch) {
        document.body.classList.remove('no-touch');
        document.body.classList.add('touch');

        function appendStyle(styles) {
            var css = document.createElement('style');
            css.type = 'text/css';

            if (css.styleSheet) css.styleSheet.cssText = styles;
            else css.appendChild(document.createTextNode(styles));

            document.getElementsByTagName('head')[0].appendChild(css);
        }

        var styles = '* {cursor: pointer; }';

        window.onload = function () {
            appendStyle(styles);
        };
    }

    // Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/append()/append().md
    (function (arr) {
        arr.forEach(function (item) {
            if (item.hasOwnProperty('append')) {
                return;
            }
            Object.defineProperty(item, 'append', {
                configurable: true,
                enumerable: true,
                writable: true,
                value: function append() {
                    var argArr = Array.prototype.slice.call(arguments),
                        docFrag = document.createDocumentFragment();

                    argArr.forEach(function (argItem) {
                        var isNode = argItem instanceof Node;
                        docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                    });

                    this.appendChild(docFrag);
                },
            });
        });
    })([Element.prototype, Document.prototype, DocumentFragment.prototype]);



    // Ленивая загрузка видео

    videoLazyLoading();

    // Слайдер наверху главной страницы

    introSlider();

    // Фиксируем хедер на скролл

    fixHeader();

    // Табы

    tabs();

    // Слайдер оборудования

    equipmentSlider();

    // Поиск

    search();

    // Слайдер новостей на главной, который появляется только в мобильной версии

    homeNewsSlider();

    // Слайдер о компании на главной, который появляется только начиная с планшетной версии

    aboutCompanySlider();

    // Слайдер реализованных проектов на главной, который появляется только начиная с мобильной версии

    realisedProjectsSlider();

    // Субменю на мобильной ширине

    submenus();

    // Слайдер блока Наши клиенты

    ourClientsSlider();

    // Инлайновые видео

    inlineVideo();

    // Слайдер текстовой вставки

    textInsertionSlider();

    // Таблицы со скроллингом

    scrollableTables();

    // Слайдеры блоков галерей

    gallerySlider();

    // Аккордеоны

    accordeons();

    // Слайдер Наша история

    ourHistory();

    // Маска ввода серийного номера

    serialMasking();

    // Слайдер документов

    documentsSlider();

    // Валидация форм

    formValidation();

    // Скрипты конфигуратора

    configurator();

    // Поиск по серийному номеру

    serial();

    // Увеличить/уменьшить количество товара

    amountBtns();

    // Модальные окна

    modals();

    // Карты в контактах

    map();

    // Кастомные селекты

    customSelects();

    // Города с сервисами

    servicesCities();

    // Модалки команды

    teamModals();

    // Показать все

    showAll();

    // Фильтрация реализованных проектов

    realisedProjectsFilter();

    // Модалки слайдер галереи

    mediaModals();

    // Открытие в модалках по выбору

    openInModals();

    // Только числовой ввод для type="number"

    onlyNumericInput();


    // Скроллинг до активного пункта меню

    scrollStandaloneMenu();

    // Слайдер мобильной версии страницы "Нацпроект"

    sliderProduct();
});


window.addEventListener('load', function () {
    document.body.classList.add('loaded');

    stickyBanner();
});


$('.js-bg-layers').unwrap();
$('.js-services').unwrap();
$('.js-product-header').unwrap();


   

