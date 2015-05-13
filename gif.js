var canvas = document.getElementById("canvas") ;
var context = canvas.getContext("2d");
var section = $(".canvas");
var Obj = {
	flagMove : 0,
	flagStay : 0
};

function GIF(location,speed){
	var IMG = new Array();
	var WIDTH = section.width();
	var HEIGHT = section.height();
	var cav = $(".canvas");

	var step = parseInt(location * WIDTH / (15 * speed) );
	var j = 0;

	for (var i = 0; i < 18; i++) {
		var img = new Image();
		img.src = "img/people" + i + ".png";
		IMG.push(img);
	}

	function loop(){
		clearInterval(Obj.flagStay);
		clearInterval(Obj.flagMove);
		Obj.flagMove = setInterval(function(){
			update();
			drawPic();
		},1000/15);
	}

	loop();

	function drawPic(){
		if (j * step < location * WIDTH) {
			context.clearRect(0,0,400,600);
			context.drawImage(IMG[i],j * step ,0,HEIGHT / 1.5,HEIGHT);
		}else{
			clearInterval(Obj.flagMove);
			context.drawImage(IMG[17],j * step ,0,HEIGHT / 1.5, HEIGHT);
		}
		
	}

	function update(){
		if(cav.height() > cav.width()*0.45){
			cav.height(cav.width()*0.45);
			cav.css("bottom","22.5%");
		}
		WIDTH = section.width();
		HEIGHT = section.height();
		canvas.width = WIDTH;
		canvas.height = HEIGHT;
		i += 1;
		j += 1;
		if (i >= 18 - 1) {
			i = 0;
		}
	}

}
function GIFin(location){
	var IMG = new Array();
	var WIDTH = section.width();
	var HEIGHT = section.height();

	for (var i = 0; i < 18; i++) {
		var img = new Image();
		img.src = "img/people" + i + ".png";
		IMG.push(img);
	}

	function loop(){
		Obj.flagStay = setInterval(function(){
			update();
			drawPic();
		},1000/15);
	}

	loop();

	function drawPic() {
		setTimeout(function(){
			clearInterval(Obj.flagStay);
			context.clearRect(0, 0, canvas.width,canvas.height);
			context.drawImage(IMG[17],location * WIDTH ,0,HEIGHT / 1.5, HEIGHT);
		},6000);
		context.clearRect(0, 0, canvas.width,canvas.height);
		context.drawImage(IMG[i], location * WIDTH, 0, HEIGHT / 1.5, HEIGHT);
	}

	function update(){
		WIDTH = section.width();
		HEIGHT = section.height();
		canvas.width = WIDTH;
		canvas.height = HEIGHT;
		i += 1;
		if (i >= 18 - 1) {
			i = 0;
		}
	}
};
