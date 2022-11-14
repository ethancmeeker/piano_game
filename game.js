//------------
//System Vars
//------------
var current_user = '';
var users_character = '';
var user_information = '';
var stage = document.getElementById("gameCanvas");
stage.width = STAGE_WIDTH;
stage.height = STAGE_HEIGHT;
var ctx = stage.getContext("2d");
var backdrop = document.getElementById("backdropCanvas");
backdrop.width = STAGE_WIDTH;
backdrop.height = STAGE_HEIGHT;
var btx = backdrop.getContext("2d");
ctx.font = GAME_FONTS;
var last_update = Date.now();
var start_time = 0;
var end_time = 0;
var bug_list = [bug1, bug1, bug1, bug1, bug1, bug1, bug1, bug1, bug1, bug1, bug2, bug2, bug2, bug2, bug2, bug2, bug2, bug2, bug2, bug2];
var char_rocco = [rocco, rocco_neg, rocco_pos, rocco_talk, rocco_worry, rocco_worry_open];
var b = 3;
var mistake_counter = 0;
const player = 'rocco'
var victory_banner_w = 0
var victory_banner_h = 0
var star_1_size = 0;
var star_2_size = 0;
var star_3_size = 0;
var mistake_counter = 0;
bugs_left = 0;


//-------------
//Conditionals
//-------------
treb_clef_game_start_space = new Boolean(false);
treb_clef_game_start_line = new Boolean(false);
bass_clef_game_start_space = new Boolean(false);
bass_clef_game_start_line = new Boolean(false);

levels_to_choose = [treb_clef_game_start_space, treb_clef_game_start_line, treb_clef_game_start_line, bass_clef_game_start_space, bass_clef_game_start_line, 
					bass_clef_game_start_line, treb_clef_game_start_space]

bug_movem = new Boolean(true);
bug_timer = new Boolean(false);
pressed = new Boolean(false);
instructions = new Boolean(false);
pos_emotion = new Boolean(false);
neg_emotion = new Boolean(false);
able = new Boolean(true);
clicked = new Boolean(false);
paused_game = new Boolean(false);
active_game = new Boolean(false);
countdown = new Boolean(true);
reteach = new Boolean(false);
instruct = new Boolean(false);
victory = new Boolean(false);
countdown_started = new Boolean(false);
loss = new Boolean(false);
main_menu_active = new Boolean(true);
lvl_select_menu_active = new Boolean(false);
user_select_menu_active = new Boolean(false);
user_create_menu_active = new Boolean(false);
level_info_showing = new Boolean(false);
ready = new Boolean(false);
drawed_backdrop = new Boolean(false);


const paz_btn = new Sprite(t_paz, 10, 2, 30, 30);
const b_btn = new Sprite(t_g, 225, 380, 100, 100);
const d_btn = new Sprite(t_g, 375, 380, 100, 100);
const g_btn = new Sprite(t_g, 525, 380, 100, 100);
var stars = 0;
var one = 0;
var two = 0;
var three = 0;
//-----------------
//Browser Detection
//-----------------
navigator.sayswho= (function(){
    var N= navigator.appName, ua= navigator.userAgent, tem;
    var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M= M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];

    return M;
})();

function is_inside(posx, posy, butn){
    return posx > butn.x && posx < butn.x+butn.width && posy < butn.y+butn.height && posy > butn.y;
}


var browser;
if (navigator.sayswho[0] == "Firefox")
	browser="f";
else if (navigator.sayswho[0] == "Chrome")
	browser="c";
else if (navigator.sayswho[0] == "Safari")
	browser="s";
else  if (navigator.sayswho[0] == "Microsoft")
	browser="m";
else
	browser="f";

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

var gameloop, mouseX, mouseY, bugxpos, spacelist, trebspaceword, linelist, treblineword, selection, guess, answer, bar_pos;
mouseX = 0; //default values
mouseY = 0; //default values
bugxpos = STAGE_WIDTH - 120;
spacelist = [188, 133, 78, 24];
trebspaceword = ["f", "a", "c", "e"];
treblineword = ["e", "g", "b", "d", "f"];
bassspaceword = ["a", "c", "e", "g"];
basslineword = ["g", "b", "d", "f", "a"];
linelist = [217, 162, 107, 51, -4];
guess = 'h';
answer = 'a';
bar_pos = 520;

//------------
//Button Creators
//------------
function space_buttons(which_one) {
	var init_move;
	init_move = new_selection(spacelist, 4);
	selection = spacelist[init_move];
	answer = which_one[init_move];
}


function line_buttons(which_one) {
	var init_move;
	init_move = new_selection(linelist, 5);
	selection = linelist[init_move];
	answer = which_one[init_move];
}

function treb_space_bd(){
	if (tcbd.complete) {
		btx.drawImage(tcbd, 0, 0, stage.width, stage.height);
	} 
	else {
		tcbd.onload = function () {
			btx.drawImage(tcbd, 0, 0, stage.width, stage.height);   
		};
	}
	drawed_backdrop = false;
	btx.save();
}

if (treb_clef_game_start_line == true) {
	line_buttons();
	if (tcbd.complete) {
		btx.drawImage(tcbd, 0, 0, stage.width, stage.height);
	} 
	else {
		tcbd.onload = function () {
			btx.drawImage(tcbd, 0, 0, stage.width, stage.height);   
		};
	}
	btx.save();
}


var numbers = [treb_three, treb_two, treb_one];

var speed;
speed = 5;


gameloop = setInterval(update, 33);			
stage.addEventListener("click", canvasClick, false);


function canvasClick(event)
{	
	if (browser == "f" || browser == "m")
	{
		mouseX = event.clientX - stage.offsetLeft + document.documentElement.scrollLeft;
		mouseY = event.clientY - stage.offsetTop + document.documentElement.scrollTop;
	}
	else //"s" or "c"
	{
		thing = false
		mouseX = event.clientX - stage.offsetLeft + document.body.scrollLeft;
		mouseY = event.clientY - stage.offsetTop + document.body.scrollTop;
		mouseY = event.clientY - stage.offsetTop + document.body.scrollTop;
		thing = true
		
	}
}	

function new_selection(list, number) {
	var rd, nn;
	rd = Math.floor(Math.random() * number);
	return rd;
}


	
function bug(whatlist, whatanswers, number) {
	if (bug_movem == true) {
		ctx.drawImage(bug_list[b], bugxpos, selection, 90, 90);
		bugxpos = bugxpos - speed;
		console.log('heddo')
		b += 1
		if (b >= 19) {
			b = 0;
		}
		if (answer == guess && pressed == true) {
			var next_move;
			wait_time = last_update;
			end_time = last_update + 3;
			console.log(wait_time);
			console.log(end_time);
			guess = '';
			end_time = last_update + 1500;
			pos_emotion = true;
			bug_movem = false;
			bug_timer = true;
			pressed = false;
			able = false;
			mistake_counter = 0;
			bar_pos += 100;
			bugxpos = STAGE_WIDTH - 120;
			next_move = new_selection(whatlist, number);
			selection = whatlist[next_move];
			answer = whatanswers[next_move];
			console.log(answer);
		}
		else if (answer != guess && pressed == true) {
			var next_move;
			guess = '';
			pressed = false;
			neg_emotion = true;
			end_time = last_update + 1500;
			bug_movem = false;
			bug_timer = true;
			able = false;
			bugxpos = STAGE_WIDTH - 120;
			next_move = new_selection(whatlist, number);
			selection = whatlist[next_move];
			answer = whatanswers[next_move];
			mistake_counter += 1;
			bar_pos -= 2;
			console.log(answer);
		}
		if (bugxpos <= 20) {
			var next_move;
			guess = '';
			neg_emotion = true;
			end_time = last_update + 1500;
			bug_movem = false;
			bug_timer = true;
			able = false;
			bugxpos = STAGE_WIDTH - 120;
			next_move = new_selection(whatlist, number);
			selection = whatlist[next_move];
			answer = whatanswers[next_move];
			bar_pos -= 2;
			mistake_counter += 1
			console.log(answer);
			
		}
	}
	else {
		set_inter_bug(end_time);
	}
}

function set_inter_bug(end_time) {
	if (bug_timer == true) {
		if (last_update >= end_time){
			bug_movem = true;
			bug_timer = false;
			pos_emotion = false;
			neg_emotion = false;
			guess = '';
			able = true;
		}
	}
}

function time_for_refresher(num) {
	if (num > 7 && bar_pos < 600) {
		active_game = false;
		reteach = true;
	}
}

function reteach_time() {
}
	

function countdown_timer(end_time1, end_time2, end_time3) {
	countdown_started = true;
	if (last_update < end_time1) {
		ctx.drawImage(numbers[0], STAGE_WIDTH / 2.5, STAGE_HEIGHT / 4, 200, 200);}
	if (last_update >= end_time1 && last_update < end_time2) {
		ctx.drawImage(numbers[1], STAGE_WIDTH / 2.5, STAGE_HEIGHT / 4, 200, 200);}
	if (last_update >= end_time2 && last_update < end_time3) {
		ctx.drawImage(numbers[2], STAGE_WIDTH / 2.5, STAGE_HEIGHT / 4, 200, 200);}
	if (last_update >= end_time3) {
		bug_movem = true;
		countdown_started = false;
		countdown = false;
		active_game = true;
	}
		
}


function btnclick(buttn, return_val){
	clicked = is_inside(mouseX, mouseY, buttn);
	if (clicked == true && able == true) {
		console.log(return_val);
		mouseX = 9999;
		mouseY = 9999;
		guess = return_val
		pressed = true;
		return return_val;
	}
	if (clicked == true && able == false) {
		console.log('no')
		mouseX = 9999;
		mouseY = 9999;
		clicked == false;
		guess = '';
	}
}

function pause_btn_treb_click(bttn) {
	paz_click = is_inside(mouseX, mouseY, bttn);
	if (paz_click == true && paused_game == false) {
		mouseX = 9999;
		mouseY = 9999;
		paused_game = true;
	}
	else if (paz_click == true && paused_game == true) {
		paused_game = false;
		mouseX = 9999;
		mouseY = 9999;
	}
}
		
function bubble_clicking() {
	if (mouseX < 1000 && mouseX > 0) {
		bubble_order += 1;
		mouseX = 9999;
	}
}

function character_express(character) {
	if (pos_emotion == true) {
		ctx.drawImage(character[2], -75, 250, 400, 400);}
	else if (neg_emotion == true) {
		ctx.drawImage(character[1], -75, 250, 400, 400);}
	else {
		ctx.drawImage(character[0], -75, 250, 400, 400);}
}

function text_color (color, sentence, x, y) {
	ctx.fillStyle = color;
	ctx.fillText(sentence, x, y);
}

function Treble_Clef_Space(){ 
	//Clear Canvas
	stars = 0;
	ctx.clearRect(0, 0, stage.width, stage.height);		
	ctx.drawImage(t_bar, bar_pos, 0, 230, 40);
	ctx.drawImage(meter, 750, 0, 230, 40);
	ctx.drawImage(t_hider, 520, 0, 230, 40);
	ctx.drawImage(blank_star, 770, -5, 50, 50);
	ctx.drawImage(blank_star, 860, -5, 50, 50);
	ctx.drawImage(blank_star, 950, -5, 50, 50);
	ctx.drawImage(clef_treb, 15, 33, 80, 250);
	f_btn_treb_s.draw();
	a_btn_treb_s.draw();
	c_btn_treb_s.draw();
	e_btn_treb_s.draw();
	paz_btn.draw();
	if (bar_pos > 560) {
		ctx.drawImage(name_star, 770, -5, 50, 50);
		speed = 7;
		stars = 1;
	}
	if (bar_pos > 654) {
		ctx.drawImage(name_star, 860, -5, 50, 50);
		speed = 10;
		stars = 2;
	}
	if (bar_pos > 742) {
		ctx.drawImage(name_star, 950, -5, 50, 50);
		stars = 3;
		victory = true;
		active_game = false;
	}
	//[188, 133, 78, 24];
	if (bar_pos <= 560) {
		ctx.font = GAME_FONTS;
		text_color('#0cba00', 'E', 35, 95);
		text_color('purple', 'C', 35, 150);
		text_color('#f25500', 'A', 35, 205);
		text_color('gold', 'F', 35, 260);
	}
	time_for_refresher(mistake_counter);
	if (active_game == false) {
		if (instruct == true) {
			treble_space_txt_lvl1(char_rocco);
			bubble_clicking();
		}
		else if (countdown == true) {
			if (countdown_started == false) {
				one = last_update + 3000;
				two = last_update + 2000;
				three = last_update + 1000;
				countdown_timer(three, two, one);
				space_buttons(trebspaceword);
			}
			else {
				countdown_timer(three, two, one);
				space_buttons(trebspaceword);
			}
		}
		else if (victory == true) {
			victory_time(red_victory, name_star);
		}
		else if (reteach == true) {
			reteach_time()
		}
		else if (loss == true) {
		}
	}
	else {
		pause_btn_treb_click(paz_btn);
		if (paused_game == false) {
			ctx.font = "bold 50px sans-serif";
			btnclick(f_btn_treb_s, 'f');
			btnclick(a_btn_treb_s, 'a');
			btnclick(c_btn_treb_s, 'c');
			btnclick(e_btn_treb_s, 'e');
			bug(spacelist, trebspaceword, 4);
			character_express(char_rocco);
		}
		else if (paused_game == true) {
			ctx.drawImage(red_paused, STAGE_WIDTH / 4, STAGE_HEIGHT / 4, 600, 160);
		}
	}
	
}

function Treble_Clef_Line(){ 
	//Clear Canvas
	stars = 0;
	ctx.clearRect(0, 0, stage.width, stage.height);	
	ctx.drawImage(t_bar, bar_pos, 0, 230, 40);
	ctx.drawImage(meter, 750, 0, 230, 40);
	ctx.drawImage(t_hider, 520, 0, 230, 40);
	ctx.drawImage(blank_star, 770, -5, 50, 50);
	ctx.drawImage(blank_star, 860, -5, 50, 50);
	ctx.drawImage(blank_star, 950, -5, 50, 50);
	ctx.drawImage(clef_treb, 15, 33, 80, 250);
	f_btn_treb_l.draw();
	g_btn_treb_l.draw();
	b_btn_treb_l.draw();
	e_btn_treb_l.draw();
	d_btn_treb_l.draw();
	paz_btn.draw();
	if (bar_pos > 560) {
		ctx.drawImage(name_star, 770, -5, 50, 50);
		speed = 7;
		stars = 1;
	}
	if (bar_pos > 654) {
		ctx.drawImage(name_star, 860, -5, 50, 50);
		speed = 10;
		stars = 2;
	}
	if (bar_pos > 742) {
		ctx.drawImage(name_star, 950, -5, 50, 50);
		stars = 3;
		victory = true;
		active_game = false;
	}
	//[217, 162, 107, 51, -4]
	if (bar_pos <= 560) {
		ctx.font = "bold 40px sans-serif";
		text_color('white', TREB_LINE_SENTENCE[0], 73, 283);
		text_color('white', TREB_LINE_SENTENCE[1], 68, 227);
		text_color('white', TREB_LINE_SENTENCE[2], 54, 171);
		text_color('white', TREB_LINE_SENTENCE[3], 64, 116);
		text_color('white', TREB_LINE_SENTENCE[4], 56, 63);
	}
	time_for_refresher(mistake_counter);
	if (active_game == false) {
		if (instruct == true) {
		}
		else if (countdown == true) {
			if (countdown_started == false) {
				one = last_update + 3000;
				two = last_update + 2000;
				three = last_update + 1000;
				countdown_timer(three, two, one);
				line_buttons(treblineword);
			}
			else {
				countdown_timer(three, two, one);
				line_buttons(treblineword);
			}
		}
		else if (victory == true) {
		}
		else if (reteach == true) {
			candy_reteach();
		}
	}
	else {
		pause_btn_treb_click(paz_btn);
		if (paused_game == false) {
			btnclick(f_btn_treb_l, 'f');
			btnclick(g_btn_treb_l, 'g');
			btnclick(b_btn_treb_l, 'b');
			btnclick(e_btn_treb_l, 'e');
			btnclick(d_btn_treb_l, 'd');
			bug(linelist, treblineword, 5);
			character_express(char_rocco);
		}
		else if (paused_game == true) {
			ctx.drawImage(red_paused, STAGE_WIDTH / 4, STAGE_HEIGHT / 4, 600, 160);
		}
	}
	
}

function Bass_Clef_Space(){ 
	//Clear Canvas
	stars = 0;
	ctx.clearRect(0, 0, stage.width, stage.height);		
	ctx.drawImage(b_bar, bar_pos, 0, 230, 40);
	ctx.drawImage(meter, 750, 0, 230, 40);
	ctx.drawImage(b_hider, 520, 0, 230, 40);
	ctx.drawImage(blank_star, 770, -5, 50, 50);
	ctx.drawImage(blank_star, 860, -5, 50, 50);
	ctx.drawImage(blank_star, 950, -5, 50, 50);
	ctx.drawImage(clef_bass, 15, 33, 80, 250);
	f_btn_treb_s.draw();
	a_btn_treb_s.draw();
	c_btn_treb_s.draw();
	e_btn_treb_s.draw();
	paz_btn.draw();
	if (bar_pos > 560) {
		ctx.drawImage(name_star, 770, -5, 50, 50);
		speed = 7;
		stars = 1;
	}
	if (bar_pos > 654) {
		ctx.drawImage(name_star, 860, -5, 50, 50);
		speed = 10;
		stars = 2;
	}
	if (bar_pos > 742) {
		ctx.drawImage(name_star, 950, -5, 50, 50);
		stars = 3;
		victory = true;
		active_game = false;
	}
	//[188, 133, 78, 24];
	if (bar_pos <= 560) {
		ctx.font = "bold 40px sans-serif";
		text_color('orange', BASS_SPACE_SENTENCE[0], 73, 260);
		text_color('orange', BASS_SPACE_SENTENCE[1], 68, 205);
		text_color('orange', BASS_SPACE_SENTENCE[2], 54, 150);
		text_color('orange', BASS_SPACE_SENTENCE[3], 64, 95);
	}
	time_for_refresher(mistake_counter);
	if (active_game == false) {
		if (instruct == true) {
			treble_space_txt_lvl1(char_rocco);
			bubble_clicking();
		}
		else if (countdown == true) {
			if (countdown_started == false) {
				one = last_update + 3000;
				two = last_update + 2000;
				three = last_update + 1000;
				countdown_timer(three, two, one);
				space_buttons(trebspaceword);
			}
			else {
				countdown_timer(three, two, one);
				space_buttons(trebspaceword);
			}
		}
		else if (victory == true) {
			victory_time(red_victory, name_star);
		}
		else if (reteach == true) {
			reteach_time()
		}
		else if (loss == true) {
		}
	}
	else {
		pause_btn_treb_click(paz_btn);
		if (paused_game == false) {
			ctx.font = "bold 50px sans-serif";
			btnclick(f_btn_treb_s, 'f');
			btnclick(a_btn_treb_s, 'a');
			btnclick(c_btn_treb_s, 'c');
			btnclick(e_btn_treb_s, 'e');
			bug(spacelist, trebspaceword, 4);
			character_express(char_rocco);
		}
		else if (paused_game == true) {
			ctx.drawImage(red_paused, STAGE_WIDTH / 4, STAGE_HEIGHT / 4, 600, 160);
		}
	}
	
}

function tick() {
    var now = Date.now();
    var dt = now - last_update;
    last_update = now;
}

//------------
//Game Loop
//------------

function update()
{		
	tick();
	if (main_menu_active == true) {
		mm()
		sel_a_user = subtnclick(select_usr);
		crt_a_user = nubtnclick(create_usr);
		main_menu_buttons(sel_a_user, crt_a_user);
	}
	else if (user_select_menu_active == true) {
		um()
		back_to_menu_btn(back_button, user_select_menu_active);
		for (let i = 0, len = btn_list.length; i < len; i++) {
			usersbtnclick(btn_list[i], ppl_list[i], i);
		}
	}
	else if (lvl_select_menu_active == true) {
		lms();
		downbuttonpress(down_arw);
		upbuttonpress(up_arw);
		back_to_menu_btn(back_button, lvl_select_menu_active);
		for (let i = 0, len = lvl_per_pg; i < len; i++) {
			level_information(lvl_btn_list[i], level_backdrops[i + page_index_mult], Object.values(user_information)[i + 3 + page_index_mult], level_names[i + page_index_mult], (i + page_index_mult));
		}
		if (level_info_showing == true) {
			level_start_button(start_button, curr_select);
		}
				
	}
	else if (treb_clef_game_start_space == true){		
		Treble_Clef_Space();
		if (drawed_backdrop == false) {
			treb_space_bd()
		}
	}
	else if (treb_clef_game_start_line == true){		
		Treble_Clef_Line();
	}
	else if (bass_clef_game_start_space == true){		
		Treble_Clef_Line();
	}
	else if (bass_clef_game_start_line == true){		
		Treble_Clef_Line();
	}
	if (bar_pos < 520) {
		bar_pos = 520;
		}
	
	
	
	//console.log(p)
	
}

//ctx.lineWidth = 1;
//ctx.strokeStyle = '#003300';
//ctx.stroke();

	
	