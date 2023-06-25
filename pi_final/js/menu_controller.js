function start_game(){
	loadpage("./mode1/index.html");
}

function exit (){
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	name = "";
}

function mode2(){
	// TODO: Open options menu
	loadpage("./mode2/index.html");
}
