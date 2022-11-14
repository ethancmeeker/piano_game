const jumping_music_notes = [];
const select_usr = new Sprite(select_usr_btn, 350, 300, 80, 300);
const create_usr = new Sprite(create_usr_btn, 350, 400, 80, 300);
once_through = new Boolean(false);
loaded = new Boolean(false);
page_loaded = new Boolean(false);
backdrop_once_through = new Boolean(false);
level_start_button_vis = new Boolean(false);
const back_button = new Sprite(back_btn, 0, 0, 50, 50)
const start_button = new Sprite(start_btn, 525, 400, 50, 400);
var obj;
var ppl_list = [];
var btn_list = [];
var lvl_btn_list = [];
var page_counter = 0;
var name_x = 100;
var name_y = 100;
var lvl_btn_yloc = 80;
var list_length = 0;
var page_dex = 0;
var page_index_mult = 0;
var lvl_per_pg = 0;
var curr_select = -1;


var levels = [treb_space_lvl1, treb_line_lvl1, treb_all_lvl1, bass_space_lvl1, bass_line_lvl1, bass_all_lvl1, mid_lvl1];
var level_backdrops = ['treb', 'treb', 'treb', 'bass', 'bass', 'bass', 'mid']
var level_names = ['Treble Clef Space Notes Level 1', 'Treble Clef Line Notes Level 1', 'Treble Clef All Notes Level 1', 
				   'Bass Clef Space Notes Level 1', 'Bass Clef Line Notes Level 1', 'Bass Clef All Notes Level 1', 'Middle of the Staff Notes Level 1'];
var level_page_num = 0;

const up_arw = new Sprite(up_btn, 50, 10, 50, 400);
const down_arw = new Sprite(down_btn, 50, 435, 50, 400);

fetch('http://localhost:8000/profiles')
  .then(res => res.json())
  .then(data => {
    obj = data;
   })
  .then(() => {
    console.log(obj);
	loaded = true;
   });


function mm() {
	if (main_menu_active == true && once_through == false) {
		ctx.clearRect(0, 0, stage.width, stage.height);
		once_through = true;
		if (main_menu.complete) {
			console.log('comp');
			btx.drawImage(main_menu, 0, 0, stage.width, stage.height);
		} 
		else {
			console.log('try');
			main_menu.onload = function () {
				btx.drawImage(main_menu, 0, 0, stage.width, stage.height);   
			}
		}
		btx.save();
		
	}
}

function lms() {
	if (lvl_select_menu_active == true && backdrop_once_through == false) {	
		if (level_page.complete) {
			btx.drawImage(level_page, 0, 0, stage.width, stage.height);
			backdrop_once_through = true;
		} 
		else {
			tcbd.onload = function () {
				btx.drawImage(level_page, 0, 0, stage.width, stage.height); 
				backdrop_once_through = true;				
			};
		}
		btx.save();
		backdrop_once_through = true;
	}
	if (page_loaded == false) {
		lvl_btn_list = []
		page_loaded = true;
		ctx.clearRect(0, 0, stage.width, stage.height);
		page_index_mult = what_page(page_dex);
		up_arw.draw();
		down_arw.draw();
		back_button.draw();
		if (4 + page_index_mult > levels.length) {
			lvl_per_pg = levels.length - page_index_mult;
		}
		else {
			lvl_per_pg = 4;
		}
		for (let i = 0, len = lvl_per_pg; i < len; i++) {
			console.log(lvl_per_pg)
			const lvl_btn = new Sprite(levels[i + page_index_mult], 50, lvl_btn_yloc, 50, 400);
			lvl_btn.draw()
			lvl_btn_list.push(lvl_btn);
			lvl_btn_yloc += 95;
		}
		
	}


}

function what_page(num) {
	return num * 4;
}

function um() {
	if (once_through == false) {
		ctx.clearRect(0, 0, stage.width, stage.height);	
		once_through = true;
		ctx.font = "bold 20px sans-serif";
		ctx.fillStyle = "white";
		if (user_page.complete) {
			btx.drawImage(user_page, 0, 0, stage.width, stage.height);
		} 
		else {
			console.log('try');
			main_menu.onload = function () {
				btx.drawImage(user_page, 0, 0, stage.width, stage.height);   
			}
		}
	}
	if (page_loaded == false && loaded == true) {
		back_button.draw()
		page_loaded = true; 
		if (obj.length < 8) {
			console.log('small list');
			list_length = obj.length;
		}
		else {
			list_length = 8;
			//ctx.
		}
		for (let i = 0, len = list_length + page_dex; i < len; i++) {
			ctx.fillText(obj[i].Name, name_x, name_y);
			ppl_list.push(obj[i].Name);
			const user_button = new Sprite(user_btn, name_x + 200, name_y - 30, 55, 55);
			user_button.draw()
			btn_list.push(user_button);
			if (name_y < 400) {
				name_y += 100;
			}
			else {
				name_x += 450;
				name_y = 100;
			}
		}
	}
}

function main_menu_buttons(s, c) {
	select_usr.draw();
	create_usr.draw();
}

function back_to_menu_btn(buttn, old_bool) {
	homeclicked = is_inside(mouseX, mouseY, buttn)
	if (homeclicked == true) {
		old_bool = false;
		main_menu_active = true;
		once_through = false;
		page_loaded = false;
		name_x = 100;
		name_y = 100;
		ppl_list = [];
		btn_list = [];
		lvl_btn_yloc = 80;
		page_dex = 0;
		backdrop_once_through = false;
	}
}

function level_start_button(buttn, dex) {
	levelclicked = is_inside(mouseX, mouseY, buttn);
	if (levelclicked == true) {
		lvl_select_menu_active = false;
		instruct = true;
		if (dex == 0) {
			treb_clef_game_start_space = true;
		}
		else if (dex == 1) {
			treb_clef_game_start_line = true;
		}
		
		level_info_showing = false;
		console.log(treb_clef_game_start_space);
	}
}
	
function nubtnclick(buttn){
	menuclicked = is_inside(mouseX, mouseY, buttn);
	if (menuclicked == true) {
		main_menu_active = false;
		user_create_menu_active = true;
		once_through = false;
		console.log(main_menu_active)
	}
}
function subtnclick(buttn){
	menuclicked = is_inside(mouseX, mouseY, buttn);
	if (menuclicked == true) {
		main_menu_active = false;
		user_select_menu_active = true;
		once_through = false;
		console.log(main_menu_active)
	}
}

function usersbtnclick(buttn, usrname, index){
	usrclicked = is_inside(mouseX, mouseY, buttn);
	if (usrclicked == true) {
		console.log(usrname);
		current_user = usrname;
		users_character = obj[index].Character;
		user_information = obj[index];
		console.log(user_information);
		user_select_menu_active = false;
		lvl_select_menu_active = true;
		page_loaded = false;
		mouseX = 9999;
		mouseY = 9999;
		once_through = false;
	}
}

function downbuttonpress(buttn) {
	usrclicked = is_inside(mouseX, mouseY, buttn);
	if (usrclicked == true) {
		if (page_dex >= Math.ceil((levels.length / 4) - 1)) {
		}
		else {
			lvl_btn_yloc = 80;
			page_dex += 1;
			page_loaded = false;
			mouseX = 9999;
			mouseY = 9999;
		}
	}
}

function upbuttonpress(buttn) {
	usrclicked = is_inside(mouseX, mouseY, buttn);
	if (usrclicked == true) {
		if (page_dex <= 0) {
		}
		else {
			lvl_btn_yloc = 80;
			page_dex -= 1;
			page_loaded = false;
			mouseX = 9999;
			mouseY = 9999;
		}
	}
}


function level_information(buttn, backdrop, lvl_stars, name, index) {
	lvlclicked = is_inside(mouseX, mouseY, buttn);
	if (lvlclicked == true) {
		curr_select = index;
		console.log(current_user)
		lvl_btn_yloc = 80;
		page_loaded = false;
		level_start_button_vis = true
		ctx.font = "bold 25px sans-serif";
		ctx.fillStyle = "black";
		ctx.fillText(name, 550, 300);
		if (backdrop == 'treb') {
			ctx.drawImage(tcbd, 500, 50, 450, 225);
		}
		else if (backdrop == 'bass') {
			ctx.drawImage(bcbd, 500, 50, 450, 225);
		}
		else if (backdrop == 'mid') {
			ctx.drawImage(mcbd, 500, 50, 450, 225);
		}
		if (lvl_stars == 0) {
			ctx.drawImage(blank_star, 600, 330, 60, 60);
			ctx.drawImage(blank_star, 700, 330, 60, 60);
			ctx.drawImage(blank_star, 800, 330, 60, 60);
		}
		else if (lvl_stars == 1) {
			ctx.drawImage(name_star, 600, 330, 60, 60);
			ctx.drawImage(blank_star, 700, 330, 60, 60);
			ctx.drawImage(blank_star, 800, 330, 60, 60);
		}
		else if (lvl_stars == 2) {
			ctx.drawImage(name_star, 600, 330, 60, 60);
			ctx.drawImage(name_star, 700, 330, 60, 60);
			ctx.drawImage(blank_star, 800, 330, 60, 60);
		}
		else {
			ctx.drawImage(name_star, 600, 330, 60, 60);
			ctx.drawImage(name_star, 700, 330, 60, 60);
			ctx.drawImage(name_star, 800, 330, 60, 60);
		}
		start_button.draw();
		level_info_showing = true;
	}
}
