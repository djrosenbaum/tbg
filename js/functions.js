// objects

//player object
function Player(name) {
	this._name = name;
}

Player.prototype.getName = function() {
	return this._name;
}

Player.prototype.setName = function(newName) {
	this._name = newName;
}

//player array container
var players = ['player 1', 'player 2', 'player 3', 'player 4'];
//var p1 = new Player('dave');
//players.push(p1);

// functions

//generate the initial bracket on page load

function generateBracket() {
	console.log('generating the initial bracket');
	//var allPlayers = players.valueOf();
	//console.log(allPlayers);

	//count the number of players in the array
	var number_of_players = players.length;
	console.log('there are ' + number_of_players + ' players')

	//create the number of brackets needed based on the number of players
	var totalBrackets = (number_of_players/2);
	console.log('building ' + totalBrackets + ' brackets');
	for (var i = 0; i < totalBrackets; i++) {
		console.log('building bracket ' + i);
		$('.round-1').append(round_1_bracket_html);
	}
	/*$.each(players, function(playerNumber, playerName) {
      console.log(playerNumber + ': ' + playerName);
   	});*/
     console.log('populating the brackets with players');
	$('.player-name p').each(function(i) {
     	$(this).text(players[i]);
     	var playerName = $(this).text();
     	console.log('adding player: ' + playerName);
   	});
}

/* edit a player's name */
function edit_player_name($this) {
		//console.log('edit player top');
		var player_name = $this.text();
		$this.parent('.player-name').siblings(".player-input").children("input").attr('value', player_name);
		//console.log(player_name);
		$this.parent('.player-name').addClass('hidden');
		$this.parent('.player-name').siblings(".player-input").removeClass('hidden');
		$this.parent('.player-name').siblings(".player-input").children("input").select();

		//player number in the list
	  	var player_index = $(".player-name p").index($this);
	  	//console.log("That was player #", player_index);

	  	var newPlayer = new Player(player_index+player_name);
	  	console.log("my new player is " + newPlayer.getName());
	  	players.push(newPlayer);
	}

/* save a player's name */
	function save_player_name($this) {
		//console.log('save button was clicked');
		var player_name = $this.siblings("input").val();
		$this.siblings("input").attr('value', player_name);
		//console.log(player_name);
		var new_player_name = $this.parent().siblings('.player-name').children('p').text();
		//console.log(new_player_name);
		$this.parent().siblings('.player-name').children('p').text(player_name);
		$this.parent('.player-input').addClass('hidden');
		$this.parent().siblings('.player-name').removeClass('hidden');
	}

/* add bracket to round 1 */
	function add_round1_bracket() {
		console.log('adding bracket to round 1');
		
		//count number of players in round 1
		var numPlayers = $('.player-name').length;
		console.log(numPlayers, "players in round 1");

		//console.log(round_1_bracket_html);
		$('.round-1 .bracket').last().next('.clear').after(round_1_bracket_html);
		round1_bracket_length = round1_bracket_length + 1;
		if (round1_bracket_length % 2 == 0) {
			console.log("adding bracket to round 2");
			$('.round-2 .bracket').last().next('.clear').after(round_2_bracket_html);
		}

		// refresh numPlayers variable to verify the variable updated
		var numPlayers = $('.player-name').length;
		console.log(numPlayers, "players in round 1");
	}

/* html blocks */

	var round_1_bracket_html = 
	    '<div class="bracket">' +
	        '<div class="bracket-outline">' +
	            '<div class="player-top">' +
	                '<div class="player-name">' +
	                    '<p>player name</p>' +
	                '</div>' +
	                '<div class="player-input hidden">' +
	                    '<input type="text" value="player name">' +
	                    '<span class="save-button hover">save</span>' +
	                '</div>' +
	            '</div>' +
	            '<div class="player-bottom">' +
	                '<div class="player-name">' +
	                    '<p>player name</p>' +
	                '</div>' +
	                '<div class="player-input hidden">' +
	                    '<input type="text" value="player name">' +
	                    '<span class="save-button hover">save</span>' +
	                '</div>' +
	            '</div>' +
	        '</div>' +
	    '</div>' +
	    '<div class="clear"></div>';

	var round_2_bracket_html = 
		'<div class="bracket">' +
            '<div class="bracket-outline">' +
            '</div>' +
        '</div>' +
        '<div class="clear"></div>';

/* end html blocks */

/* begin public variables */

var round1_bracket_length = $('#round_1 .bracket').length;

/* end public variables */

//begin objects

function bracket (round, topName, bottomName) {
	this.round = round;
	this.topName = topName;
	this.bottomName = bottomName;
}

/*
var bracket01 = new bracket("round1","dave","nate");

console.log(bracket01.round);
console.log(bracket01.topName);
console.log(bracket01.bottomName);
*/

//returning html
/*
Player.prototype.getNameHTML = function() {
	return'<p>'+this._name+'</p>';
}
*/

//end objects