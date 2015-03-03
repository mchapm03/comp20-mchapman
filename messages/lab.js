function parse() {
	request = new XMLHttpRequest();
	request.open('GET', 'data.json', true);

	request.send();
	//console.log(request.responseHtml);

}