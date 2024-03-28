// ==UserScript==
// @name         Замена aria-label для тега <i>
// @namespace    https://example.com
// @version      1.0
// @description  Заменяет aria-label для тега <i> на сайте https://edostavka.by/
// @match        https://edostavka.by/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var iconElement = document.querySelector('i.icon.icon-chevron-12.module_heading__icon__L_lpZ');
    if (iconElement) {
        iconElement.setAttribute('aria-label', 'Самое популярное ссылка');
    }
})();