// Scrittura nel Canvas
function fillCanvas(){
	WebFont.load({ google: {families: ["Lato:100,300,400,700,900","Karla:rainbow01","Cookie:regular"]}});

	//Funzione che scrive il testo e lo riempe 
	var canvas = document.getElementById("canvas");
	console.log(canvas);
	var ctx = 	canvas.getContext("2d"), dashLen = 200, dashOffset = dashLen, speed = 25, 
				txt = "... oCChi o  aLLa  coPPi a!", x=50,	i = 0;

	canvas.width = window.innerWidth;
	canvas.height = 250;
	//Immagine usata per riempire la scritta
	var img = document.createElement("img");
	img.src="images/rainbow01.jpg";
	//Scrittura nel canvas
	img.onload= function(){
	  drawText(); 
	};


	// Disegno della scritta nel canvas
	function drawText() {
	ctx.font = "9em Cookie";
	ctx.lineWidth = 3; ctx.globalAlpha = 2/3;
	ctx.strokeStyle = ctx.fillStyle = "Black";

	ctx.fillStyle = ctx.createPattern(img, 'repeat');
	ctx.textAlign = 'center';
	

	(function loop() {
	  //ctx.clearRect(x, 0, 180, 180);
	  ctx.setLineDash([dashLen - dashOffset, dashOffset- speed]);  // create a long dash mask
	  dashOffset -= speed;                                         // reduce dash length
	  ctx.strokeText(txt[i], x, 180);                              // stroke letter

	  if (dashOffset > 0) requestAnimationFrame(loop);             // animate
	  else {
	    ctx.fillText(txt[i], x, 180);                              // fill final letter
	    dashOffset = dashLen;                                      // prep next char
	    x += ctx.measureText(txt[i++]).width + ctx.lineWidth;
	    if (i < txt.length) requestAnimationFrame(loop);
	  }
	})();
	}



}