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

// functions

//generate the initial bracket on page load

function generateBracket() {
	output_panel('generating the initial bracket');

	//count the number of players in the array
	var number_of_players = players.length;
	output_panel('there are currently ' + number_of_players + ' players in the tournament')

	//create the number of brackets needed based on the number of players
	var totalBrackets = (number_of_players/2);
	output_panel('building ' + totalBrackets + ' brackets for round 1');
	for (var i = 1; i < totalBrackets + 1; i++) {
		output_panel('building bracket ' + i);
		$('.round-1').append(round_1_bracket_html);
	}
	/*$.each(players, function(playerNumber, playerName) {
      console.log(playerNumber + ': ' + playerName);
   	});*/
     output_panel('populating the brackets with ' + number_of_players + ' players');
	$('.player-name p').each(function(i) {
     	$(this).text(players[i]);
     	var playerName = $(this).text();
     	output_panel('adding player: ' + playerName);
   	});
}

/* edit a player's name */
function edit_player_name($this) {
	var player_name = $this.text();
	
	output_panel('clicked to edit ' + player_name);

	//sets the input value equal to the current player name
	$this.parent('.player-name').siblings(".player-input").children("input").attr('value', player_name);
	
	//hides the current player text
	$this.parent('.player-name').addClass('hidden');

	//show the editable input field
	$this.parent('.player-name').siblings(".player-input").removeClass('hidden');

	//select the text in the input field ready for editing
	$this.parent('.player-name').siblings(".player-input").children("input").select();
	
	output_panel('ready to edit ' + player_name);
	
	//find the player number in the list
  	var player_index = $(".player-name p").index($this);
  	output_panel("array players[" + player_index + '] is currently being edited');

  	//var newPlayer = new Player(player_index+player_name);
  	//console.log("my new player is " + newPlayer.getName());
  	//players.push(newPlayer);
}

/* save a player's name */
function save_player_name($this) {
	output_panel('save button was clicked');

	//get the player number in the list
	var player_index = $(".save-button").index($this);
  	output_panel("array players[" + player_index + '] is currently being saved');

  	//set player_name equal to the new player name input value
	var player_name = $this.siblings("input").val();

	//set the input value to the new player name
	$this.siblings("input").attr('value', player_name);
	output_panel('newly saved player name is ' + player_name);
	
	//set the player name text equal to the new player name 
	$this.parent().siblings('.player-name').children('p').text(player_name);

	//replace the player value inside of the players array
	players[player_index] = player_name;
	var allPlayers = players.valueOf();
	output_panel('new player list:  ' + allPlayers);

	//hide the player name editable input field
	$this.parent('.player-input').addClass('hidden');
	
	// show the player name text
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

/* output panel functions */

function output_panel (message) {
	$('.output-panel h2').after('<p>: ' + message + '</p>');
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

//begin experimenting

/*
function bracket (round, topName, bottomName) {
	this.round = round;
	this.topName = topName;
	this.bottomName = bottomName;
}
*/
/*
var bracket01 = new bracket("round1","dave","nate");

console.log(bracket01.round);
console.log(bracket01.topName);
console.log(bracket01.bottomName);
*/

//var p1 = new Player('dave');
//players.push(p1);

//var allPlayers = players.valueOf();
//console.log(allPlayers);

//returning html
/*
Player.prototype.getNameHTML = function() {
	return'<p>'+this._name+'</p>';
}
*/