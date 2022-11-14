var t_line_note_sentence = '${TREB_LINE_SENTENCE[0]} ${TREB_LINE_SENTENCE[1]} ${TREB_LINE_SENTENCE[2]} ${TREB_LINE_SENTENCE[3]} ${TREB_LINE_SENTENCE[4]}.';

var treble_space_dialog_lvl1 = ['Welcome to the treble skies.', 'Wow, look at the rainbow', 'That is the treble staff rainbow. It plays all the notes of \nthe treble staff.',
								'Always wanted to see this but did not expect all of the\nmusic sucking bugs', 'They\'ve over taken the Treble Staff Rainbow. It\'s up to\nyou to save it',
								'I don\'t know how though.', 'Hey, do not even worry. I can teach you.', 'let\'s look at the space notes. That\'s\nthe way the bugs are coming',
								'', 'The first space is F, the second space is A, then C, and\nlast but not least, E.', 'F-A-C-E. Now that I think about it...', 'That spells the word FACE.',
								'So if you are ever lost, just spell FACE on the spaces', 'F-A-C-E, Face.', 'That makes remembering those note names much easier.', 
								'We better hurry the bugs are coming!', 'We are coming for the music. HAHAHA!', 'Remember, F-A-C-E starting from the bottem going up.',
								'I\'m ready, these bugs are nothing. I can get rid of them\nall.', 'That\'s the spirit, now let\'s getting to crushing\nthose bugs.'];
var treble_space_speakers_lvl1 = ['happy_candy', 'player', 'candy', 'player', 'candy', 'worry_player', 'happy_candy', 'candy', 'action', 'candy', 'think_candy', 'happy_candy', 
							      'candy', 'candy', 'worry_player', 'hard_candy', 'bug', 'candy', 'player', 'hard_candy'];
							  
var treble_line_dialog_lvl1 = ['We\'re in the treble skies but the\nbugs, there aren\'t in the spaces this time.', 'Those sneaky bugs, they can\'t stick to one thing. Not\nto worry, we can still take them on.',
							   'How do we get rid of the bugs on the line?', 'I know the note names!', '', 'It\'s E-G-B-D-F', 'How am I supposed to remember that?', 'That\'s a good question...', 
							   'I know! Let\'s do an acronym', 'What\'s that?', 'It\'s a phrase that can help you remember something.', 'Oh, I see, What will the acronym be?', 'How about...',
							   t_line_note_sentence, 'E for ${TREB_LINE_SENTENCE[0]}, G for ${TREB_LINE_SENTENCE[1]}, B for\n${TREB_LINE_SENTENCE[2]], D for ${TREB_LINE_SENTENCE[3]}, F for ${TREB_LINE_SENTENCE[4].',
							   'Oh, that\'s much easier to remember.', 'exactly.', 'Here comes the bugs. Let\'s get to stomping them', 'We are going to take over all the music. Try and stop us', 
							   'With pleasure', 'Alright, just remember\n${t_line_note_sentence}'];
var treble_line_speakers_lvl1 = ['player', 'candy', 'worry_player', 'happy_candy', 'action', 'candy', 'worry_player', 'think_candy', 'happy_candy', 'player', 'candy', 'player', 'think_candy',
							     'happy_candy', 'candy', 'player', 'candy', 'hard_candy', 'bug', 'player', 'candy'];
								 
var reteaching = ['Maybe you need a refresher', 'The bugs will be coming across and you have to\npress the correct button', 'I believe in you'];

var retraching_sprites = ['candy', 'candy', 'hard_candy'];
								 

var speak_order = 0
var bubble_order = 0;
var talk_time = 0;
var lineheight = 15;
var action_order = 0;

const player_order = [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]; 
const candy_order = [candy_standard, candy_standard, candy_standard, candy_standard, candy_standard, candy_standard, candy_standard, candy_standard, candy_standard, candy_standard, candy_open_mouth, candy_open_mouth, candy_open_mouth, candy_open_mouth, candy_open_mouth, candy_standard, candy_blink, candy_blink, candy_blink, candy_blink, candy_standard, candy_standard, candy_open_mouth, candy_open_mouth, candy_open_mouth, candy_open_mouth, candy_open_mouth, candy_standard, candy_standard, candy_standard, candy_standard, candy_standard, candy_standard, candy_standard, candy_standard, candy_open_mouth, candy_open_mouth, candy_open_mouth, candy_open_mouth, candy_open_mouth, candy_open_mouth, candy_open_mouth, candy_open_mouth];
const candy_happy_order = [candy_happy, candy_happy, candy_happy, candy_happy, candy_happy, candy_happy, candy_happy, candy_happy, candy_happy, candy_happy, candy_happy_open_mouth, candy_happy_open_mouth, candy_happy_open_mouth, candy_happy_open_mouth, candy_happy_open_mouth];
const candy_hard_order = [candy_hard, candy_hard, candy_hard, candy_hard, candy_hard_open, candy_hard_open, candy_hard_open, candy_hard_open, candy_hard_open, candy_hard_open, candy_hard_open, candy_hard_open, candy_hard_open, candy_hard_open, candy_hard, candy_hard, candy_hard, candy_hard];
const candy_think_order = [candy_think, candy_think, candy_think, candy_think, candy_think_q, candy_think_open_q, candy_think_open_q, candy_think_open_q, candy_think_open_q, candy_think_open_q, candy_think_open, candy_think_open, candy_think];
const player_worry_order = [4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]

function line_breaker(txt, x, y) {
	var lines = txt.split('\n');
	for (var i = 0; i < lines.length; i++) {
		ctx.fillText(lines[i], x, y + (i*lineheight) );
	}
}

function treble_space_txt_lvl1(player_sprite) {
	ctx.font = "bold 20px sans-serif";
	ctx.drawImage(text_bubble, 202, 360, 630, 125);
	if (bubble_order > treble_space_dialog_lvl1.length - 1) {
		console.log('g')
		instruct = false;
		countdown = true;
	}
	else {
		line_breaker(treble_space_dialog_lvl1[bubble_order], 250, 390);
		sprite_talker(treble_space_speakers_lvl1, player_sprite)
	}
	
}

function treble_line_txt_lvl1(player_sprite) {
	ctx.font = "bold 20px sans-serif";
	ctx.drawImage(text_bubble, 202, 360, 630, 125);
	if (bubble_order > treble_line_dialog_lvl1.length - 1) {
		console.log('g')
		instruct = false;
		countdown = true;
	}
	else {
		line_breaker(treble_line_dialog_lvl1[bubble_order], 250, 390);
		sprite_talker(treble_line_speakers_lvl1, player_sprite)
	}
	
}

function sprite_talker(ls, p_s) {
	if (ls[bubble_order] == 'candy') {
		ctx.fillStyle = "#692a3d";
		candy_talking(p_s);
	}
	else if (ls[bubble_order] == 'happy_candy') {
		ctx.fillStyle = "#692a3d";
		candy_talking_happy(p_s);
	}
	else if (ls[bubble_order] == 'player') {
		ctx.fillStyle = "black";
		player_talking(p_s);
	}
	else if (ls[bubble_order] == 'think_candy') {
		ctx.fillStyle = "#692a3d";
		candy_talking_think(p_s);
	}
	else if (ls[bubble_order] == 'hard_candy') {
		ctx.fillStyle = "#692a3d";
		candy_talking_hard(p_s);
	}
	else if (ls[bubble_order] == 'worry_player') {
		ctx.fillStyle = "black";
		player_talking_worry(p_s);
	}
}


function candy_talking_think(player_sprite) {
	speak_order += 1
	if (speak_order > candy_think_order.length - 1) {
		speak_order = 0;
	}
	ctx.drawImage(candy_think_order[speak_order], 715, 250, 400, 400);
	ctx.drawImage(player_sprite[0], -75, 250, 400, 400);
}


function candy_talking_hard(player_sprite) {
	speak_order += 1
	if (speak_order > candy_hard_order.length - 1) {
		speak_order = 0;
	}
	ctx.drawImage(candy_hard_order[speak_order], 715, 250, 400, 400);
	ctx.drawImage(player_sprite[0], -75, 250, 400, 400);
}

function candy_talking_happy(player_sprite) {
	speak_order += 1
	if (speak_order > candy_happy_order.length - 1) {
		speak_order = 0;
	}
	ctx.drawImage(candy_happy_order[speak_order], 715, 250, 400, 400);
	ctx.drawImage(player_sprite[0], -75, 250, 400, 400);
}

function candy_talking(player_sprite) {
	speak_order += 1
	if (speak_order > candy_order.length - 1) {
		speak_order = 0;
	}
	ctx.drawImage(candy_order[speak_order], 715, 250, 400, 400);
	ctx.drawImage(player_sprite[0], -75, 250, 400, 400);
}

function player_talking(player_sprite) {
	speak_order += 1;
	if (speak_order > player_order.length - 1) {
		speak_order = 0;
	}
	var speak_spot = player_order[speak_order];
	ctx.drawImage(candy_standard, 715, 250, 400, 400);
	ctx.drawImage(player_sprite[speak_spot], -75, 250, 400, 400);
}

function player_talking_worry(player_sprite) {
	speak_order += 1;
	if (speak_order > player_worry_order.length - 1) {
		speak_order = 0;
	}
	var speak_spot = player_worry_order[speak_order];
	ctx.drawImage(candy_standard, 715, 250, 400, 400);
	ctx.drawImage(player_sprite[speak_spot], -75, 250, 400, 400);
}

