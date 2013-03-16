/* functions */

/* edit a player's name */
function edit_player_name($this) {
		//console.log('edit player top');
		var player_name = $this.text();
		$this.parent('.player-name').siblings(".player-input").children("input").attr('value', player_name);
		//console.log(player_name);
		$this.parent('.player-name').addClass('hidden');
		$this.parent('.player-name').siblings(".player-input").removeClass('hidden');
		$this.parent('.player-name').siblings(".player-input").children("input").select();
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
		//console.log(round_1_bracket_html);
		$('.round-1 .bracket').last().next('.clear').after(round_1_bracket_html);
		round1_bracket_length = round1_bracket_length + 1;
		if (round1_bracket_length % 2 == 0) {
			console.log("adding bracket to round 2");
			$('.round-2 .bracket').last().next('.clear').after(round_2_bracket_html);
		} 
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