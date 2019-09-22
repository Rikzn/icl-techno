import 'picturefill';
import objectFitImages from 'object-fit-images';
import detectIt from 'detect-it';
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

document.addEventListener('DOMContentLoaded', function() {
    // Полифилл .contains для IE 11

    if (!SVGElement.prototype.contains) {
        SVGElement.prototype.contains = HTMLDivElement.prototype.contains;
    }

    // Полифилл для CSS свойства ObjectFit (заполнение контейнера изображением)
    
    objectFitImages();

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

        window.onload = function() {
            appendStyle(styles);
        };
    }

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

});
