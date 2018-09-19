

$(document).ready(function() {

	
});


function performSearch() {
	console.log("[function] performSearch");
	var searchQuery = "";
	searchQuery = $("#search").text();
	console.log("sdfsdfd: " + searchQuery);
	if(searchQuery != "" || searchQuery != "Search") {
		// Get body text as string
		var bodyText = $("body").text();
		console.log("Text of body: " + bodyText);
	}
	else {
		console.log("No search string");
	}
}