function start_game(){
	if(!sessionStorage.getItem("nivell_maxim")) sessionStorage.setItem("nivell_maxim",0);
	if(!sessionStorage.getItem("nivell_actual")) sessionStorage.setItem("nivell_actual",0);
	if(!sessionStorage.getItem("numCards")) sessionStorage.setItem("numCards",2);
	if(!sessionStorage.getItem("pointsBC")) sessionStorage.setItem("pointsBC",10);
	if(!sessionStorage.getItem("tempsMostra")) sessionStorage.setItem("tempsMostra",1200);
	if (sessionStorage.getItem( "nivell_maxim") == 0){
		name = prompt("Player name");
		sessionStorage.setItem("username",name);
	}
	else if (sessionStorage.getItem("nivell_actual") != sessionStorage.getItem("nivell_maxim")){
		//Pujar dificultat en +1 parella de cartes al seguent nivell
		cards = sessionStorage.getItem("numCards");
		cards++;
		if (cards >= 5) cards = 5;  //Maximo 5 cartas
		sessionStorage.setItem("numCards",cards);
		//Augmentar penalització
		points = sessionStorage.getItem("pointsBC");
		console.log(points);
		points ++;
		console.log(points);
		sessionStorage.setItem("pointsBC",points);
		//Actualitzar nivell actual.
		actual = sessionStorage.getItem("nivell_actual");
		actual++;
		sessionStorage.setItem("nivell_actual",actual);
	}
	loadpage("./html/game.html");
}

function reset (){
	sessionStorage.setItem("nivell_maxim",0);
	sessionStorage.setItem("nivell_actual",0);
	sessionStorage.setItem("numCards",2);
	sessionStorage.setItem("pointsBC",10);
	sessionStorage.setItem("tempsMostra",1200);
}

function exit (){
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	name = "";
}


