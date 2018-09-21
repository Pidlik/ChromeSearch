
let changeColor = document.getElementById('changeColor');
let searchButton = document.getElementById('searchButton');

chrome.storage.sync.get('color', function(data) {
	changeColor.style.backgroundColor = data.color;
	changeColor.setAttribute('value', data.color);
});

// var app = chrome.runtime.getBackgroundPage();

function hello() {
  chrome.tabs.executeScript({
    file: 'alert.js'
  }); 
}

document.getElementById('searchButton').addEventListener('click', hello);



// let hello = function helloThere() {
// 	console.log("Hello There!");
// }

// searchButton.onclick = function(element) {
// 	let color = element.target.value;
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 		chrome.tabs.executeScript(
// 			tabs[0].id,
// 			{code: 'console.log("sfdsfdfdsfd");'});
// 	});
// };

