$(document).ready(function() {
	//begin ready
	console.log('hello tournament');

	$('.round-1-bracket .round-1-player-top').on('click',function() {
		console.log('edit player top');
		var player_name = $(this).children("p").text();
		var input_player_name = $(this).children("input").val();
		console.log(player_name);
		console.log(input_player_name);
		$(this).children("p").hide();
		$(this).children("input").show();
	});


	//end ready
});