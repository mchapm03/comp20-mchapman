function parse() {
	request = new XMLHttpRequest();
	request.open('GET', 'data.json', true);

	request.send();
	request.onreadystatechange = function(){
		parsedata(JSON.parse(request.responseText));
	}
}

function parsedata(jsontext) {
	console.log("jsontext");
}