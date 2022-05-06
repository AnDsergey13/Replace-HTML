// https://learn.javascript.ru/searching-elements-dom
// https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Selectors
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension


// https://learn.javascript.ru/function-basics
// about:debugging#/runtime/this-firefox
// https://github.com/gorhill/uBlock
"use strict"; // Будем использовать современный код. Если убрать директиву, то будет работать только для старого

const MY_NAME = "Семён";
const MY_AGE = 18;
let message = "Hello мир";

// Перезапись переменной происходит как в python

// let message = '6566 мир';
// alert("Привет мир"); появляется окно с надписью Привет мир
// alert(`Меня зовут ${MY_NAME}, мне ${MY_AGE}`); // Изменяемые строки ``
// let isGreater = 4 > 1;
// alert(isGreater)
// typeof("foo") // "string"  // аналог в питоне type("fool")
// alert(`Меня зовут ${MY_NAME}, мне ${MY_AGE}`);
// [1, 2].forEach(alert);

// Для ввода пароля
// let mess = prompt("Введите пароль", "")
// alert(mess)

// Возвращает правду или ложь
// mess = confirm("Ты записался добравольцем?");
// alert(mess)

// let value = true
// value = Number(value)
// value = String(value)
// value = Boolean(value)
// alert(typeof value + " " + value)

// let value = true, str = "5647"
// value = +value  // +value = Number(value)
// // alert(typeof value + " " + value)
// alert(value + +str) //5647 + 1 = 5648

// let val = 45;
// let a = val++; // Сначала записывает в переменную, а потом прибавляет +1
// // let a = ++val;
// alert(a + " " + val);

// alert( 'ааб' > 'аба')

// let b = "";
// alert( Boolean(b) )

// if (1) { // 1 это true
//   alert("Выполнится всегда")
// }

// тернарный оператор
// let age = 4
// let go_to_club = (age > 18) ? "Входите" : "Нужно подрасти";
// alert(go_to_club)

// let x;
// false || (x = 1); // Если сделать true, то x=1 вычислятся не будет
// alert(x); // 1

// let value = true;
// // value != value;
// value = !value; // Для инвертирования булевых значений, лучше использовать этот вариант
// alert(value)

// let value = "non"
// let a = !!value
// let b = Boolean(value)
// alert(a + " " + b)
// // значения а и b будут одинаковы. Так как !! и Boolean, это одинаковые механизимы

// let height = 0;
// alert(height || 100); // 100
// alert(height ?? 100); // 0

// while(1){
// 	let pass = prompt("Введите пароль", "");
// 	if (+pass == 1234) break;
// 	alert("Не верно!")
// }

// let i = 0; // мы уже имеем объявленную i с присвоенным значением
// for (; i < 3; i++) { // нет необходимости в "начале"
//   alert( i ); // 0, 1, 2
// }

// метки. Не понял. Выход из нескольких циклов 
// https://learn.javascript.ru/while-for

// let arg = prompt("Введите число?");
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'Один или ноль' );
//     break;

//   case 3:
//     alert( 'Никогда не выполнится!' );
//     break;
//   default:
//     alert( 'Неизвестное значение' );
// }


// ===================================================
// const fs = require('fs')

// console.log("второй");

// fs.readFile('rules_gen.json', 'utf-8', (err, jsonString) => {
// 	if (err){
// 		console.log(err);
// 	}
// 	else
// 	{
// 		const data = JSON.parse(jsonString)
// 		console.log(data.address);
// 	}
// });


// if (window.File && window.FileReader && window.FileList && window.Blob) {
//   alert("Киргиз хочет кушать")
// } else {
//   alert('File API не поддерживается данным браузером');
// }



// console.log("третий");
// console.log(customer);
// alert("Курить документацию")

// let html_site = document.documentElement.outerHTML;

// var fs = require('fs');
// var file = fs.readFileSync('rules.json', 'utf8');
// var jsObj = JSON.parse(file);
// console.log(jsObj + "+++++++++++")

// let request = new XMLHttpRequest();
// request.open('GET', "file:///C:/Users/Janna/Documents/+Folder_Sergey/Replace-HTML/rules.json", true);
// request.responseType = 'json';
// console.log( request.getAllResponseHeaders() + "+++++++++++++++++");

// // JSON - JavaScript Object Notation
// fetch("./rules.json")
// 	.then(response => response.json())
// 	.then(data => {console.log(data)})


// let rulesObject =require(rules);
// console.log(rulesObject);

// localStorage.setItem('test', "Оригинал");

// console.log("Запущено 2");

// console.log(localStorage.getItem('test'));

// https://itchief.ru/javascript/json

///////////////////////////////
//c:\Users\Janna\AppData\Roaming\Mozilla\Firefox\Profiles\55z6214r.default-release\extensions\uBlock0@raymondhill.net.xpi\js\
///
e-dostavka.by/catalog/##button.minus

//https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#html-filters
//https://github.com/gorhill/uBlock/wiki/Procedural-cosmetic-filters
//https://help.eyeo.com/en/adblockplus/snippet-filters-tutorial#snippets-refs
//https://help.eyeo.com/en/adblockplus/how-to-write-filters#elemhide_basic
//https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#extended-syntax

/// replace-attr.js
/// advanced
(function() {
	let name_func = '{{1}}';
	let tag_and_attr = '{{2}}';
    let add_title = '{{3}}';
	if (name_func === 'replace-attr')
	{
		console.log("Мой чудный скрипт запустился!!! 195");
	}
})();