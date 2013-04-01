$(document).ready(function() {
	//begin ready
	//console.log('hello tournament');
	//console.log(round1_bracket_length);

	output_panel('welcome to the tournament bracket generator');

	generateBracket();

	//console.log(player_index);

	/* event listeners */

/*	$(document).on('click', function(event) {
		var $target = $(event.target);
		if ( $target.is("button") ) {
			console.log('you clicked a button');
		}
		var target_class = $target.attr('class');
		//console.log('class name: ', target_class);	
		if ( $target.hasClass('red') ) {
			console.log('you clicked a red class');
		}
		else if ( $target.hasClass('page-wrap') ) {
			console.log('you clicked the page wrapper');
		}		
	});
*/
	
	$(document).on('click','.bracket-outline', function() {
		//console.log('clicked a bracket outline');
		var topPlayer = $(this).children('.player-top').children('.player-name').children('p').text();
		var bottomPlayer = $(this).children('.player-bottom').children('.player-name').children('p').text();
		//console.log(topPlayer);
		//console.log(bottomPlayer);
		//var thisBracket = new bracket('round_1',topPlayer,bottomPlayer);
		//console.log(thisBracket.round);
		//console.log(thisBracket.topName);
		//console.log(thisBracket.bottomName);
	});

	$(document).on('click','.player-name p', function() {
		edit_player_name($(this));
	});

	$(document).on('click','.save-button', function() {
		save_player_name($(this));
	});

	$(document).on('keypress','.player-input input', function(e) {
    	if(e.which == 13) {
    	var save_button = $(this).siblings('.save-button');
    	save_player_name(save_button);
    	}
	});

	$(document).on('click','.round-1-options .add-bracket', function() {
		add_round1_bracket();
		//console.log(round1_bracket_length);
	});

	/* end event listeners */

	//end ready
});