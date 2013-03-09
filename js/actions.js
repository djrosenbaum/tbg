$(document).ready(function() {
	//begin ready
	console.log('hello tournament');

	$('.round-1-bracket .round-1-player-top .player-name').on('click',function() {
		console.log('edit player top');
		var player_name = $(this).children("p").text();
		console.log(player_name);
		$(this).addClass('hidden');
		$(this).siblings(".player-input").removeClass('hidden');
/*		var input_player_name = $(this).find("input").val();
		console.log(input_player_name);

*/
	});

	$('.save-button').on('click',function() {
		console.log('save button was clicked');
		var player_name = $(this).siblings("input").val();
		$(this).siblings("input").attr('value', player_name);
		console.log(player_name);
		var new_player_name = $(this).parent().siblings('.player-name').children('p').text();
		console.log(new_player_name);
		console.log(new_player_name);
		$(this).parent('.player-input').addClass('hidden');
		$(this).parent().siblings('.player-name').children('p').text(player_name);
		$(this).parent().siblings('.player-name').removeClass('hidden');
	});


	//end ready
});