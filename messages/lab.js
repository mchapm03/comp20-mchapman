function parse() {
	request = new XMLHttpRequest();
	request.open('GET', 'data.json', true);

	request.send();
	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200){
			parsedata(JSON.parse(request.responseText));
		}
	};
}

function parsedata(jsontext) {
	for(i in jsontext){
		document.getElementById("messages").innerHTML += "<p class='message'>" + jsontext[i].content + " <span class='author'>-" + jsontext[i].username + "</span></p>";
	}
}