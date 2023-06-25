const back = "../resources/back.png";
const items = ["../resources/cb.png","../resources/co.png","../resources/sb.png",
				"../resources/so.png","../resources/tb.png","../resources/to.png"];
var game = new Vue({
	el: "#game_id",
	data: {
		username: "",
		current_card: [],
		items: [],
		num_cards: 2,
		bad_clicks: 0,
		pointsBC: 10, //Punts que es resten si "bad_click"
		tempsMostra: 1200,
		nivell_actual: 0,
		nivell_maxim: 0

	},
	created: function(){
		this.nivell_maxim = sessionStorage.getItem("nivell_maxim");
		this.username = sessionStorage.getItem("username","unknown");
		this.num_cards = sessionStorage.getItem("numCards");
		this.pointsBC = sessionStorage.getItem("pointsBC");
		this.tempsMostra = sessionStorage.getItem("tempsMostra");
		this.items = items.slice(); // Copiem l'array
		this.items.sort(function(){return Math.random() - 0.5}); // Array aleatòria
		this.items = this.items.slice(0, this.num_cards); // Agafem els primers numCards elements
		this.items = this.items.concat(this.items); // Dupliquem els elements
		this.items.sort(function(){return Math.random() - 0.5}); // Array aleatòria
		
		for (var i = 0; i < this.items.length; i++){
			this.current_card.push({done:true, texture: this.items[i]});
		}
		
			setTimeout(() => {
				for (var i = 0; i < this.items.length; i++){
					Vue.set(this.current_card, i, {done: false, texture: back}); //Així el Vue s'entera del canvi.
				}
			}, this.tempsMostra); 
	},
	methods: {
		clickCard: function(i){
			if (!this.current_card[i].done && this.current_card[i].texture === back)
				Vue.set(this.current_card, i, {done: false, texture: this.items[i]});
		}
	},
	watch: {
		current_card: function(value){
			
			var front = null;
			var i_front = -1;
			for (var i = 0; i < this.current_card.length; i++){
				if (!this.current_card[i].done && this.current_card[i].texture !== back){
					if (front){
						if (front.texture === this.current_card[i].texture){
							front.done = this.current_card[i].done = true;
							this.num_cards--;
							console.log(this.num_cards);
							if (this.num_cards <= 0){
								this.nivell_maxim++;
								sessionStorage.setItem("nivell_maxim",this.nivell_maxim);
							}
						}
						else{
							Vue.set(this.current_card, i, {done: false, texture: back});
							Vue.set(this.current_card, i_front, {done: false, texture: back});
							this.bad_clicks++;
							break;
						}
					}
					else{
						front = this.current_card[i];
						i_front=i;
					}
				}
			}
			if (num_cards <= 0){
				console.log("work");
			}
		}
	},
	computed: {
		score_text: function(){
			return 100 - this.bad_clicks * this.pointsBC;
		}
	}
});
