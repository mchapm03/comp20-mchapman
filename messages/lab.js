function parse() {
	request = new XMLHttpRequest();
	request.open("GET", "data.json", true);

	request.sent();
	//console.log(request.responseHtml);

}