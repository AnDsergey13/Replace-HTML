"use strict";

// Асинхронная задержка
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function replace_elements(array_elements){
	for (let element of array_elements)
	{
		element.setAttribute("title", "_____________минус");
	}
}

async function loop_eventss()
{
	while(true)
	{
		let array_elements = document.querySelectorAll("button.minus:not([title])");
		if (array_elements.length != 0)
		{
			await replace_elements(array_elements);
		}
		await sleep(3000);
	}
}

function getDomenName()
{
	return document.domain
}




// Очищаем консоль, чтобы остальной код не мешался
console.clear();

console.log("Запущено 1");

// let a = ["e-dostavka.by",[
// 			["button.minus","_____________минус"],
// 			["button.plus","______________плюс"]], 
// 		"tut.by",[
// 			["button.link","ссылка"],
// 			["button.link","ссылка"]
// 		]
// ];

// https://itchief.ru/javascript/json

// const rules = {
// 	sites: 
// 	name: ['Bob', 'Smith'],
// 	age: 32,
// };


// console.log(a[2]);

console.log("Запущено 2");
// let domenName = getDomenName();


// let url = document.documentURI;
// console.log("Запущено");
// loop_eventss();
// console.log(getDomenName() + "____ Доменное имя");


