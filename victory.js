function victory_time(victory_color, star_type) {
	ctx.drawImage(red_victory, 505 - (victory_banner_w / 2), 155 - (victory_banner_h / 2), victory_banner_w, victory_banner_h);
	if (victory_banner_w < 900) {
		victory_banner_w += 10;
	}
	if (victory_banner_h < 360) {
		victory_banner_h += 4;
	}
	else if (victory_banner_h >= 360 && victory_banner_w >= 900 && bar_pos > 560) {
		ctx.drawImage(name_star, 350 - (star_1_size / 2), 240 - (star_1_size / 2), star_1_size, star_1_size);
		if (star_1_size < 100) {
			star_1_size += 2;
		}
		else if (star_1_size >= 100) {
			if (bar_pos > 654) {
				ctx.drawImage(name_star, 500 - (star_2_size / 2), 260 - (star_2_size / 2), star_2_size, star_2_size);
				if (star_2_size < 100) {
					star_2_size += 2;
				}
				else if (star_2_size >= 100) {
					if (bar_pos > 742) {
					ctx.drawImage(name_star, 640 - (star_3_size / 2), 240 - (star_3_size / 2), star_3_size, star_3_size);
					if (star_3_size < 100) {
						star_3_size += 2;
					}
					else if (star_3_size >= 100) {
						console.log('hi');
				}
			}}}
		}
	}
	
}