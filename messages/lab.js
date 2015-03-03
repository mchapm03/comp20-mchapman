function parse() {
	request = new XMLHttpRequest();
	request.open('GET', 'data.json', true);

	request.send();
	request.onreadystatechange = parsedata();
}

function parsedata() {
	console.log("In parsedata.");
}