// import * as general_rules from './General_rules.html';
// 
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

let input2 = document.querySelector("iframe").contentWindow.document.querySelector("span");
// let input2 = document.querySelector("iframe");
// let input2 = document.getElementsByName("gen_rules");
// for (let inpu of input2)
// 	{
// 		console.log(inpu);
// 		console.log("one");
// 	}
// console.log(data);
console.log(input2);

// console.log(general_rules);

console.log("Запущено 3");

// let domenName = getDomenName();




// let url = document.documentURI;
// console.log("Запущено");
// loop_eventss();
// console.log(getDomenName() + "____ Доменное имя");


