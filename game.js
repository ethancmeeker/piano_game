//------------
//System Vars
//------------
treb_clef_game_start = new Boolean(true);
var stage = document.getElementById("gameCanvas");
stage.width = STAGE_WIDTH;
stage.height = STAGE_HEIGHT;
var ctx = stage.getContext("2d");
ctx.fillStyle = "grey";
ctx.font = GAME_FONTS;
let btn = document.createElement("button");


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

function Is_Inside(pos, butn){
    return pos.x > butn.x && pos.x < butn.x+butn.width && pos.y < butn.y+butn.height && pos.y > butn.y
}

class gg {
	constructor(sizey, sizex, dx, dy, img) {
		this.sizey = sizey;
		this.sizex = sizex;
		this.img = img;
		
			
}}

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

var gameloop, mouseX, mouseY, bugxpos, spacelist, spaceword, linelist, selection;
mouseX = 300; //default values
mouseY = 300; //default values
bugxpos = STAGE_WIDTH - 120;
spacelist = [188, 133, 78, 24];
spaceword = ["f", "a", "c", "e"];
linelist = [100]
selection = spacelist.random();

var speed;
speed = 10;

gameloop = setInterval(update, TIME_PER_FRAME);			
stage.addEventListener("click", canvasClick, false);

var canvas = document.getElementById('viewport');
var movement = 400;
context = canvas.getContext('2d');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

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
		mouseX = event.clientX - stage.offsetLeft + document.body.scrollLeft - 60;
		mouseY = event.clientY - stage.offsetTop + document.body.scrollTop - 60;
		thing = true
		
	}
}	

function new_selection(list) {
	var rd, nn;
	console.log(length.list);
	rd = Math.floor(Math.random() * 4);
	console.log(nn);
	return rd;
}

function bug() {
	ctx.drawImage(newImage, bugxpos, selection, 90, 90);
	bugxpos = bugxpos - speed;
	if (bugxpos <= 20) {
		var next_move;
		bugxpos = STAGE_WIDTH - 120;
		next_move = new_selection(spacelist)
		console.log(next_move);
		selection = spacelist[next_move];
		console.log(selection);
		answer = spaceword[next_move];
		console.log(answer);
		sleep(4000)
	}
}	




function Treble_Clef_Space(){ 
	//Clear Canvas
	ctx.fillStyle = "pink";
	ctx.fillRect(0, 0, stage.width, stage.height);	
	ctx.drawImage(tcbd, 0, 0, STAGE_WIDTH, STAGE_HEIGHT);
	ctx.drawImage(t_f, 225, 380, 100, 100);
	ctx.drawImage(t_a, 375, 380, 100, 100);
	ctx.drawImage(t_c, 525, 380, 100, 100);
	ctx.drawImage(t_e, 675, 380, 100, 100);
	ctx.drawImage(candy, mouseX, mouseY, 100, 100);
	ctx.fillStyle = "white";
	//heddo(l);
	bug();
	if (mouseX < 100 && mouseY < 100) {
		console.log("gnsuigbiu");
		mouseX = 500
	}
}

//------------
//Game Loop
//------------
function update()
{		
	if (treb_clef_game_start == true){
		Treble_Clef_Space();
	}
	
	
	//console.log(p)
	
}


//ctx.lineWidth = 1;
//ctx.strokeStyle = '#003300';
//ctx.stroke();

	
	