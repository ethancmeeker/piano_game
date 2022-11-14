//-------------
//Sprite Class
//-------------
class Sprite {
	constructor(name, xpos, ypos, height, width){
		this.name = name;
		this.x = xpos;
		this.y = ypos;
		this.height = height;
		this.width = width;
	}
	
	draw() {
		ctx.drawImage(this.name, this.x, this.y, this.width, this.height);
	}

}

const f_btn_treb_s = new Sprite(t_f, 225, 380, 100, 100);
const a_btn_treb_s = new Sprite(t_a, 375, 380, 100, 100);
const c_btn_treb_s = new Sprite(t_c, 525, 380, 100, 100);
const e_btn_treb_s = new Sprite(t_e, 675, 380, 100, 100);
const e_btn_treb_l = new Sprite(t_e, 215, 380, 90, 90);
const g_btn_treb_l = new Sprite(t_g, 315, 380, 90, 90);
const b_btn_treb_l = new Sprite(t_b, 415, 380, 90, 90);
const d_btn_treb_l = new Sprite(t_d, 515, 380, 90, 90);
const f_btn_treb_l = new Sprite(t_f, 615, 380, 90, 90);

const a_btn_bass_s = new Sprite(b_a, 225, 380, 100, 100);
const c_btn_bass_s = new Sprite(b_c, 375, 380, 100, 100);
const e_btn_bass_s = new Sprite(b_e, 525, 380, 100, 100);
const g_btn_bass_s = new Sprite(b_g, 675, 380, 100, 100);
const g_btn_bass_l = new Sprite(b_g, 215, 380, 90, 90);
const b_btn_bass_l = new Sprite(b_b, 315, 380, 90, 90);
const d_btn_bass_l = new Sprite(b_d, 415, 380, 90, 90);
const f_btn_bass_l = new Sprite(b_f, 515, 380, 90, 90);
const a_btn_bass_l = new Sprite(b_a, 615, 380, 90, 90);


