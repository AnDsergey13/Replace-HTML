// https://learn.javascript.ru/searching-elements-dom
// https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Selectors
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension


// https://learn.javascript.ru/function-basics
// about:debugging#/runtime/this-firefox
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

