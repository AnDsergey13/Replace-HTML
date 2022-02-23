"use strict";


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function test(){
	console.log("Рыбка");
	
	// while (1){
		let buttons = document.querySelectorAll(".minus:not([title])");

		for (let button of buttons)
		{
			button.setAttribute("title", "минус");
		}
		// sleep(1000);
	// }
	
	// while (1){	
		// let first_button = document.querySelector(".minus");
		// if (!first_button.hasAttribute("title"))
		// {
		// 	first_button.setAttribute("title", "минус");
		// 	continue;
		// }

		// if (first_button == null) break;
	// }
}


let html_site = document.documentElement.outerHTML;
let url = document.documentURI;

if (url == "https://e-dostavka.by/catalog/8149.html")
{
	test();
	
}
else{
	console.log(url);
}