function parse() {
	request = new XMLHttpRequest();
	request.open('GET', 'data.json', true);

	request.send();
	request.onreadystatechange = parsedata();
}

function parsedata() {
	messages = JSON.parse(request.responseText);
	//console.log("messages.content");
}