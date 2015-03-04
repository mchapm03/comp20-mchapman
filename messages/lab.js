function parse() {
	request = new XMLHttpRequest();
	request.open('GET', 'data.json', true);

	request.send();
	request.onreadystatechange = function(){
		if(request.readyState == 4){
			parsedata(JSON.parse(request.responseText));
		}
	};
}

function parsedata(jsontext) {
	console.log(jsontext);
}