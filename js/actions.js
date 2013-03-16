$(document).ready(function() {
	//begin ready
	console.log('hello tournament');
	console.log(round1_bracket_length);

	/* event listeners */

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
		console.log(round1_bracket_length);
	});

	/* end event listeners */

	//end ready
});