$(document).ready(function() {
	//begin ready
	console.log('hello tournament');

	/* functions */

	function edit_player_name() {
		//console.log('edit player top');
		var player_name = $(this).text();
		$(this).parent('.player-name').siblings(".player-input").children("input").attr('value', player_name);
		//console.log(player_name);
		$(this).parent('.player-name').addClass('hidden');
		$(this).parent('.player-name').siblings(".player-input").removeClass('hidden');
		$(this).parent('.player-name').siblings(".player-input").children("input").select();
	}

	function save_player_name() {
		//console.log('save button was clicked');
		var player_name = $(this).siblings("input").val();
		$(this).siblings("input").attr('value', player_name);
		//console.log(player_name);
		var new_player_name = $(this).parent().siblings('.player-name').children('p').text();
		//console.log(new_player_name);
		$(this).parent().siblings('.player-name').children('p').text(player_name);
		$(this).parent('.player-input').addClass('hidden');
		$(this).parent().siblings('.player-name').removeClass('hidden');		
	}

	/* event listeners */

	$('.player-name p').click(edit_player_name);

	$('.save-button').click(save_player_name);

	//end ready
});