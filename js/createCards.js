var background="images/rainbow01.jpg";

function my_3x4(){
	var box=document.getElementById('table');
	var w=box.style.width;
	var h=box.style.height;
	console.log(w);
	console.log(h);
	
	var wInt = parseInt(document.getElementById('table').style.width);
	var hInt = parseInt(document.getElementById('table').style.height);
	var lato = hInt/4 - 5;
	
	var id=0;
	
	for(x=0; x<3;x++) {
		var br = document.createElement('div');
		br.style.width=lato;
		br.style.height=lato+20;
		br.className = "space";
		for(y=0; y<4;y++) {
			var vertical = document.createElement('img');
			vertical.style.width=lato;
		    vertical.style.height=lato;
		    vertical.id=id;
		    vertical.style.marginTop = "33px";
		    vertical.style.marginLeft = "120px";
		    vertical.style.cursor = "pointer";
			id++;
			vertical.src=background;
		    vertical.className = "cards";
	    	document.getElementById('table').appendChild(vertical);
		}document.getElementById('table').appendChild(br);
	}
}

function my_4x5(){
	var box=document.getElementById('table');
	var w=box.style.width;
	var h=box.style.height;
	console.log(w);
	console.log(h);
	
	var wInt = parseInt(document.getElementById('table').style.width);
	var hInt = parseInt(document.getElementById('table').style.height);
	var lato = hInt/5 - 10;

	var id=0;
	
	for(x=0; x<4;x++) {
		var br = document.createElement('div');
		br.style.width=lato;
		br.style.height=lato+20;
		br.className = "space";
		for(y=0; y<5;y++) {
			var vertical = document.createElement('img');
			vertical.style.width=lato;
		    vertical.style.height=lato;
	   		vertical.id=id;
	   		vertical.style.marginTop = "27px";
		    vertical.style.marginLeft = "100px";
		    vertical.style.cursor = "pointer";
			id++;
			vertical.src=background;
		    
		   	vertical.className = "cards";
	    	document.getElementById('table').appendChild(vertical);
		}document.getElementById('table').appendChild(br);
	}
}

function my_5x6(){
	var box=document.getElementById('table');
	var w=box.style.width;
	var h=box.style.height;
	console.log(w);
	console.log(h);
	
	var wInt = parseInt(document.getElementById('table').style.width);
	var hInt = parseInt(document.getElementById('table').style.height);
	var lato = hInt/6 - 10;
	
	var id=0;
	
	for(x=0; x<5;x++) {
		var br = document.createElement('div');
		br.style.width=lato;
		br.style.height=lato+20;
		br.className = "space";
		for(y=0; y<6;y++) {
			var vertical = document.createElement('img');
			vertical.id=id;
			id++;
			vertical.style.width=lato;
		    vertical.style.height=lato;
		    vertical.style.marginTop = "20px";
		    vertical.style.marginLeft = "86px";
		    vertical.style.cursor = "pointer";
		    vertical.className = "cards";
			vertical.src=background;
		    
	    	document.getElementById('table').appendChild(vertical);
		}document.getElementById('table').appendChild(br);
	}

	

}


