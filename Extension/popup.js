
function hello() {
	// Can't use because of: https://developer.chrome.com/extensions/contentSecurityPolicy
  // chrome.tabs.executeScript({
  //   file: 'alert.js'
  // }); 
  alert("dsfdsfdf");
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {  
  document.getElementById('searchButton').addEventListener('click', hello);

  // var app = chrome.runtime.getBackgroundPage();
});

// searchButton.onclick = function(element) {
// 	let color = element.target.value;
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 		chrome.tabs.executeScript(
// 			tabs[0].id,
// 			{code: 'console.log("sfdsfdfdsfd");'});
// 	});
// };

