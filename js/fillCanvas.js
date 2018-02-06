// Scrittura nel Canvas
function fillCanvas(){
	WebFont.load({ google: {families: ["Lato:100,300,400,700,900","Karla:rainbow01","Cookie:regular"]}});

	//Funzione che scrive il testo e lo riempe 
	var canvas = document.getElementById("canvas");
	console.log(canvas);
	var ctx = 	canvas.getContext("2d"), dashLen = 200, dashOffset = dashLen, speed = 25, 
				txt = "... oCChio  aLLa  coPPia!", x=50,	i = 0;

	canvas.width = window.innerWidth;
	canvas.height = 250;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
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
	ctx.lineWidth = 3; 
	ctx.globalAlpha = 2/3;
	ctx.strokeStyle = ctx.fillStyle = "Black";

	ctx.fillStyle = ctx.createPattern(img, 'repeat');
	ctx.textAlign = 'center';


	(function loop() {
	  //ctx.clearRect(x, 0, 180, 180);
	  ctx.setLineDash([dashLen - dashOffset, dashOffset- speed]);  // creo un tratteggìo
	  dashOffset -= speed;                                         // aggiorno
	  ctx.strokeText(txt[i], x, 180);                              // disegno la lettera txt[i] nella posizione (x, 180)

	  if (dashOffset > 0) requestAnimationFrame(loop);             // ciclo di animazione
	  else {
	    ctx.fillText(txt[i], x, 180);                              // fill final letter
	    dashOffset = dashLen; 
	    // Casi particolari - Kerning per caratteri particolari
	    if (txt[i] == "i") { // lettere "i"1
	    	x += ctx.measureText(txt[i++]).width + 20 + ctx.lineWidth;
	    }
    	else {
    		if (i==21) { // Seconda "P"
	    		x += ctx.measureText(txt[i++]).width -20 + ctx.lineWidth;
    		}
    		else{ //Distanzio le lettere troppo vicine
	    		if (i==4 || i==5 || i==18){
		    		x += ctx.measureText(txt[i++]).width +10 + ctx.lineWidth;
	    		}
	    		else                                  			   // Caso generale 
		    		x += ctx.measureText(txt[i++]).width + ctx.lineWidth;
		 	}   	
	    }
	    if (i < txt.length) requestAnimationFrame(loop); // ciclo di animazione
	  }
	})();
	}



}