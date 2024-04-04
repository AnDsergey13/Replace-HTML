// ==UserScript==
// @name         Заменяет атрибуты тегов для сайта edostavka.by
// @namespace    https://github.com/AnDsergey13/WCAG-Edostavka
// @version      0.2.1
// @description  Это необходимо для корректной работы скринридеров(NVDA, Jaws)
// @author       femto
// @match        https://edostavka.by/*
// @grant        none
// @icon         https://raw.githubusercontent.com/AnDsergey13/WCAG-Edostavka/master/edostavka_by.ico
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


// Чтобы сделать сайт более доступным для людей, использующих скринридеры как NVDA, можно применить следующие практики через Tampermonkey:

//     Добавить осмысленный alt текст для изображений:

// document.querySelectorAll('img').forEach(img => {
//   if (!img.alt) {
//     img.alt = 'Описание изображения';
//   }
// });

//     Исправить заголовки, чтобы они шли по порядку (h1, h2, h3 и т.д.):

// const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
// let level = 0;

// headers.forEach(header => {
//   const headerLevel = parseInt(header.tagName.slice(1));
  
//   if (headerLevel - level > 1) {
//     header.outerHTML = `<h${level + 1}>${header.innerHTML}</h${level + 1}>`;
//   }
  
//   level = parseInt(header.tagName.slice(1));
// });

//     Добавить aria-label для ссылок и кнопок, где текст не очевиден:

// document.querySelectorAll('a, button').forEach(el => {
//   if (!el.textContent.trim()) {
//     el.setAttribute('aria-label', 'Описание ссылки или кнопки');
//   }
// });

//     Добавить пропуск к основному контенту через роль "main":

// const mainContent = document.querySelector('.main-content');
// if (mainContent) {
//   mainContent.setAttribute('role', 'main');
// }

//     Сделать фокус видимым для интерактивных элементов:

// const style = document.createElement('style');
// style.textContent = `
//   a:focus, button:focus, input:focus, select:focus, textarea:focus {
//     outline: 2px solid blue;
//   }
// `;
// document.head.append(style);

//     Добавить aria-live регионы для динамически обновляемого контента:

// const dynamicContent = document.querySelector('.dynamic-content');
// if (dynamicContent) {
//   dynamicContent.setAttribute('aria-live', 'polite');
//   dynamicContent.setAttribute('aria-atomic', 'true');
// }

//     Исправить семантику, заменив <div> на более подходящие элементы ( <nav>, <article>, <section> и т.д.):

// document.querySelectorAll('.menu').forEach(menu => {
//   menu.outerHTML = `<nav>${menu.innerHTML}</nav>`;
// });

// Это основные моменты, которые можно улучшить через Tampermonkey. Конкретный код будет зависеть от структуры сайта. Главное - использовать семантические элементы, добавлять альтернативный текст, aria-атрибуты, управлять фокусом и порядком контента. Это сделает сайт гораздо более доступным для скринридеров. 


// ---------------


// Для пожилого человека с нарушениями зрения и легкой деменцией можно применить дополнительные меры для улучшения доступности и удобства использования сайта:

//     Увеличить размер и контрастность шрифта:

// const style = document.createElement('style');
// style.textContent = `
//   body {
//     font-size: 24px !important;
//     color: #000 !important;
//     background-color: #fff !important;
//   }
// `;
// document.head.append(style);

//     Упростить навигацию, оставив только основные разделы:

// const nav = document.querySelector('nav');
// if (nav) {
//   nav.innerHTML = `
//     <ul>
//       <li><a href="/">Главная</a></li>
//       <li><a href="/catalog">Каталог</a></li>
//       <li><a href="/cart">Корзина</a></li>
//     </ul>
//   `;
// }

//     Добавить голосовое сопровождение для ключевых действий:

// function speak(text) {
//   const utterance = new SpeechSynthesisUtterance(text);
//   speechSynthesis.speak(utterance);
// }

// document.querySelectorAll('a, button').forEach(el => {
//   el.addEventListener('focus', () => {
//     speak(`Элемент ${el.textContent} в фокусе`);
//   });
// });

//     Упростить формы, оставив только необходимые поля с четкими метками:

// document.querySelectorAll('form').forEach(form => {
//   form.innerHTML = `
//     <label for="search">Поиск:</label>
//     <input type="text" id="search" name="search">
//     <button type="submit">Найти</button>
//   `;
// });

//     Добавить подсказки и инструкции для основных действий:

// document.querySelectorAll('.add-to-cart').forEach(button => {
//   button.setAttribute('aria-describedby', 'add-to-cart-description');
//   button.insertAdjacentHTML('afterend', '<p id="add-to-cart-description">Чтобы добавить товар в корзину, нажмите на кнопку "В корзину"</p>');
// });

//     Реализовать управление с клавиатуры для всех интерактивных элементов:

// document.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     const focusedElement = document.activeElement;
//     if (focusedElement.tagName === 'A' || focusedElement.tagName === 'BUTTON') {
//       focusedElement.click();
//     }
//   }
// });

//     Предоставить возможность переключения в упрощенную версию сайта:

// const simpleModeButton = document.createElement('button');
// simpleModeButton.textContent = 'Включить упрощенный режим';
// simpleModeButton.addEventListener('click', () => {
//   // Применить все вышеописанные изменения и дополнительно упростить дизайн
// });
// document.body.prepend(simpleModeButton);

// Эти изменения направлены на максимальное упрощение интерфейса, увеличение удобочитаемости, предоставление голосовых подсказок и упрощение навигации и взаимодействия для пользователя с нарушениями зрения и когнитивными проблемами. Конечно, идеальным решением будет разработка отдельной версии сайта, оптимизированной для таких пользователей, но предложенные изменения через Tampermonkey могут значительно улучшить доступ 

// ===================================

// // ==UserScript==
// // @name         Accessibility Enhancements
// // @namespace    https://edostavka.by/
// // @version      1.0
// // @description  Улучшения доступности для пожилых пользователей с нарушениями зрения и легкой деменцией
// // @match        https://edostavka.by/*
// // @grant        none
// // ==/UserScript==

// (function() {
//     'use strict';
  
//     // Увеличение размера и контрастности шрифта
//     const style = document.createElement('style');
//     style.textContent = `
//       body {
//         font-size: 24px !important;
//         color: #000 !important;
//         background-color: #fff !important;
//       }
//     `;
//     document.head.append(style);
  
//     // Упрощение навигации
//     const nav = document.querySelector('nav');
//     if (nav) {
//       nav.innerHTML = `
//         <ul>
//           <li><a href="/">Главная</a></li>
//           <li><a href="/catalog">Каталог</a></li>
//           <li><a href="/cart">Корзина</a></li>
//         </ul>
//       `;
//     }
  
//     // Голосовое сопровождение для ключевых действий
//     function speak(text) {
//       const utterance = new SpeechSynthesisUtterance(text);
//       speechSynthesis.speak(utterance);
//     }
  
//     document.querySelectorAll('a, button').forEach(el => {
//       el.addEventListener('focus', () => {
//         speak(`Элемент ${el.textContent} в фокусе`);
//       });
//     });
  
//     // Упрощение форм
//     document.querySelectorAll('form').forEach(form => {
//       form.innerHTML = `
//         <label for="search">Поиск:</label>
//         <input type="text" id="search" name="search">
//         <button type="submit">Найти</button>
//       `;
//     });
  
//     // Подсказки и инструкции для основных действий
//     document.querySelectorAll('.add-to-cart').forEach(button => {
//       button.setAttribute('aria-describedby', 'add-to-cart-description');
//       button.insertAdjacentHTML('afterend', '<p id="add-to-cart-description">Чтобы добавить товар в корзину, нажмите на кнопку "В корзину"</p>');
//     });
  
//     // Управление с клавиатуры для всех интерактивных элементов
//     document.addEventListener('keydown', (event) => {
//       if (event.key === 'Enter') {
//         const focusedElement = document.activeElement;
//         if (focusedElement.tagName === 'A' || focusedElement.tagName === 'BUTTON') {
//           focusedElement.click();
//         }
//       }
//     });
  
//     // Переключение в упрощенную версию сайта
//     const simpleModeButton = document.createElement('button');
//     simpleModeButton.textContent = 'Включить упрощенный режим';
//     simpleModeButton.addEventListener('click', () => {
//       // Применить все вышеописанные изменения и дополнительно упростить дизайн
//       document.body.classList.add('simple-mode');
//     });
//     document.body.prepend(simpleModeButton);
  
//     // Добавление alt текста для изображений
//     document.querySelectorAll('img').forEach(img => {
//       if (!img.alt) {
//         img.alt = 'Описание изображения';
//       }
//     });
  
//     // Исправление порядка заголовков
//     const headers = document.querySelectorAll('h1, h2, h3, h4, h5