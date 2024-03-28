// ==UserScript==
// @name         Заменяет атрибуты тегов для сайта edostavka.by
// @namespace    https://codeberg.org/femto/Replace-HTML
// @version      0.2
// @description  Это необходимо для корректной работы скринридеров(NVDA, Jaws)
// @author       femto
// @match        https://edostavka.by/*
// @grant        none
// @icon         https://raw.githubusercontent.com/AnDsergey13/Replace-HTML/master/edostavka_by.ico
// ==/UserScript==

(function() {
    'use strict';

    var iconElement = document.querySelector('i.icon.icon-chevron-12.module_heading__icon__L_lpZ');
    if (iconElement) {
        iconElement.setAttribute('aria-label', 'Самое популярное ссылка');
    }
})();
 
// для скрытия озвучки
// aria-hidden="true"

// Для автоматического автофокуса на элементе при перезагрузке страницы
// <h1 autofocus>Заголовок страницы</h1>

// Изменяем последовательность озвучки
// <div tabindex="2">Элемент 2</div>
// <div tabindex="1">Элемент 1</div>
// <div tabindex="3">Элемент 3</div>
// <div tabindex="4">Элемент 4</div>
// <div tabindex="6">Элемент 6</div>
// <div tabindex="7">Элемент 7</div>
// <div tabindex="8">Элемент 8</div>
// <div tabindex="5">Элемент 5</div>
// <div tabindex="9">Элемент 9</div>
// <div tabindex="10">Элемент 10</div>

// https://youtu.be/U4dSWJFIQ0A?t=1744
// ожидание загрузки страницы
// window.addEventListener('load', function() {
//     //code
// });