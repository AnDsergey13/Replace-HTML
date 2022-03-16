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

console.log("Запущено");

let html_site = document.documentElement.outerHTML;

var fs = require('fs');
var file = fs.readFileSync('rules.json', 'utf8');
var jsObj = JSON.parse(file);
console.log(jsObj + "+++++++++++")

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

// let domenName = getDomenName();


// let url = document.documentURI;
// console.log("Запущено");
// loop_eventss();
// console.log(getDomenName() + "____ Доменное имя");


