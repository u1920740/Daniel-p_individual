function start_game(){
	name = prompt("Player name");
	sessionStorage.setItem("username",name);
	if(!sessionStorage.getItem("numCards")) sessionStorage.setItem("numCards",2);
	loadpage("./html/game.html");
}

function exit (){
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	name = "";
}

function options(){
	// TODO: Open options menu
	loadpage("./html/options.html");
}
