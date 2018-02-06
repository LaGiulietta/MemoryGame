var set=[];
var partita=false; // booleano per decidere come gestire la pressione del tasto "Escape"	
var settaggio=false; // booleano per decidere come gestire la pressione del tasto "Invio"	

var background="images/rainbow01.jpg";

// Funzioni per mostrare o nascondere il div ricevuto per parametro
function mostra(idElem){ 
	idElem.style.display='block'; 
} 

function mostraIn(idElem){ 
	idElem.style.display='inline'; 
}

function nascondi(idElem){ 
	idElem.style.display='none';
} 


// disattivare le animazioni
function stopAnimations(idElem){
	idElem.style.animation="none";
}

// disabilitazione dei bottoni sottostanti
function disableAllButtonAbove(){
	var start = document.getElementById('sb');
	start.disabled=true;
	var about = document.getElementById('about');
	about.disabled=true;
	var help = document.getElementById('help');
	help.disabled=true;
}

// abilitazione dei bottoni sottostanti
function enableAllButtonAbove(){
	var start = document.getElementById('sb');
	start.disabled=false;
	var about = document.getElementById('about');
	about.disabled=false;
	var help = document.getElementById('help');
	help.disabled=false;
}

/// BUTTONS FUNCTIONS

function myAboutFunction() {
   	var element = document.getElementById('firstPage');
	element.style.opacity = "0.2";
	element.style.filter  = 'alpha(opacity=20)';
	var id= document.getElementById('about');
	stopAnimations(id);
	disableAllButtonAbove();
	var box=document.getElementById('boxAbout');
	mostra(box);	
}

function myHelpFunction() {
   	var element = document.getElementById('firstPage');
	element.style.opacity = "0.2";
	var id= document.getElementById('help');
	stopAnimations(id);
	disableAllButtonAbove();
	var box=document.getElementById('boxHelp');
	mostra(box);	
}

function myStartFunction() {
	partita=false;
	settaggio=true;
	// opacità della homePage
	var element = document.getElementById('firstPage');
	element.style.opacity = "0.2";
	// si ferma l'animazione iniziale del bottone (mymove)
	var id= document.getElementById('sb');
	stopAnimations(id);
	// si disabilitano i bottoni dell'homePage
	disableAllButtonAbove();
	// si mostra il div con le opzioni
	var box=document.getElementById('boxOptions');
	mostra(box);
}

function myStartAfterSettingsFunction() {
	//Opacizzo
   	var element = document.getElementById('firstPage');
	element.style.opacity = "0";
	var element2 = document.getElementById('boxOptions');
	nascondi(boxOptions);

	settaggio=false;
	var id= document.getElementById('sb');
	stopAnimations(id);
	disableAllButtonAbove();
	// si mostra il div del gioco
	var box=document.getElementById('boxGame');
	box.style.animation="fadeIn 2s";
	mostra(box);
	difficulty();

	var startTime = new Date(); // memorizzo il tempo iniziale
	console.log("START:" + startTime);

	console.log("Initial array: "+ array.toString());
	var numCouple=array.length/2;

	// GIOCO
	game(startTime);
	
}



// Si vede quale mazzo è stato selezionato dall'utente e si preleva il set di carte
function viewSetCards(){
	if (document.getElementById('animals').checked){
		deck=0;
		var basePath="images/Animals/";
		var animalsImages = ['Balm-cricket.png', 'Bee.png', 'Bird.png','Brown-bear.png', 'Butterfly.png', 'Cat.png','Cobra.png', 'Cock.png', 'Colibrì.png','Crocodile.png', 'Dog01.png', 'Dog02.png','Elephant.png', 'Giraffe.png', 'Globefish.png','Goat.png','Grapus.png', 'Hamster.png','Hippo.png', 'Koala.png', 'Lion.png', 'LittleBird.png','LittleFish.png', 'LittleRedFish.png', 'Ox.png', 'Panda.png', 'Parrot.png','Pig.png','Polar-bear.png','Rhinoceros.png','Shark.png', 'Sheep.png', 'Tiger.png', 'TigerCub.png','Turtle.png', 'Whale.png' ];

		set=animalsImages;
	}
	else if (document.getElementById('numbers').checked){
		deck=1;
		var basePath="images/Numbers/";
		var numbersImages=['01.png', '02.png', '03.png', '04.png', '05.png', '06.png', '07.png','08.png', '09.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png'];

		set=numbersImages;
	} else if (document.getElementById('fruits').checked){
		deck=2;
		var basePath="images/Fruits/";
		var fruitsImages=['Apple.png', 'Apricot.png', 'Banana.png', 'Carrot.png', 'Cucumber.png', 'Eggplant.png', 'Onion.png','Orange.png', 'Pear.png', 'Pepper.png', 'Plum.png', 'Potato.png', 'Salad.png', 'Strawberry.png', 'Tomato.png'];

		set=fruitsImages;
	}
	return basePath;
}

// Si crea l'array cardsImages della dimensione del mazzo associata alla difficoltà 
// estraendo le carte da set in maniera random (almeno variano nel corso delle diverse partite)
	
function addImages(numElements, basePath){
	
	var cardsImages = [];
	for (i=0; i<numElements; i++) {
		var randNum = Math.floor(Math.random() * set.length);
		console.log("lunghezza:" + set.length);
		console.log("numero random:" + randNum);
		var randImg= set[randNum];
	    var image = document.createElement("img");
	    image.src = basePath+randImg;

	    set.splice(randNum, 1);
	    console.log("Array: "+set);	
	    cardsImages.push(image);
	    //document.getElementById('table').appendChild(image);
	    console.log("Number of elements:" + set.length );
	    console.log("Number of cards images:" + cardsImages.length);	    
    }
    // controllo dalla console le carte estratte
    console.log("CARDS;");
    for (i=0; i<cardsImages.length;i++){
    	console.log(cardsImages[i].src);
    }
	return cardsImages;
}


///* GAME FUNCTIONS *///

var array=[];
var diff=-1; // per vedere la difficoltà settata
var deck=-1; // per vedere il tipo di mazzo scelto

// Funzione cardine del gioco, vedo cos'è stato settato dall'utente ed imposto il gioco
function difficulty(){
	// Vedo quale mazzo prendere
	//viewSetCards();
	// Vedo quale difficoltà è stata impostata (FIXME: crea una funzione ad hoc)
	if (document.getElementById('easy').checked) {
		var cards=6;
		diff=0;
		rate_value = document.getElementById('easy').id;
		// Preparo la griglia
		my_3x4();
		var path=viewSetCards();
		// Ottengo l'insieme di carte da usare (6)
		var setImages=addImages(cards, path);
		// Associo le carte agli id generati, da 0 a 11
		array=matchCardsWithId(setImages, 3);
	}
	else if (document.getElementById('medium').checked) {
		var cards=10;
		diff=1;
		rate_value = document.getElementById('medium').id;
		my_4x5();

		var path=viewSetCards();
		var setImages=addImages(cards, path);
		array=matchCardsWithId(setImages, 4);
	}
			
	else if (document.getElementById('hard').checked) {
		var cards=15;
		diff=2;
		rate_value = document.getElementById('hard').id;
		my_5x6();
		
		var path=viewSetCards();
		var setImages=addImages(cards, path);
		array=matchCardsWithId(setImages, 5);
	}
	
}


// svuoto e rimuovo il div table (ad ogni partita viene ricreato)
function clearDiv(){
	var div = document.getElementById('table');
	while(div.firstChild)
    div.removeChild(div.firstChild);
}


// associo le carte in modo casuale
function matchCardsWithId(setImages, n){
	var element = document.getElementById("table");
	var numElements= element.childElementCount-n;
	console.log("Number of childs:" + numElements);
	// Creo l'array degli id
	var arrId=new Array();
	for (i=0; i<numElements; i++) {
		arrId.push(i);
	}

	var matched=new Array(numElements);
	console.log("matched: "+matched.toString());
	console.log("ids: "+arrId.toString());

	for (i=0; i<setImages.length; i++) {
		var img=setImages[i].src;
		console.log("Ciclo:" + i +" Immagine:" + setImages[i].src);

		// Genero un numero/indice random
		var ranNum1 = Math.floor(Math.random() * arrId.length);
		var index=arrId[ranNum1];
		matched[index]=img;
	    arrId.splice(ranNum1, 1);

		// Genero un altro numero/indice random
		var ranNum2 = Math.floor(Math.random() * arrId.length);	
		var index2=arrId[ranNum2];
		matched[index2]=img;
	    arrId.splice(ranNum2, 1);	 

	    console.log("------")   
	}
	
	return matched;
}

/**
function showImages(){
	var element = document.getElementById("table");
	var numElements= element.childElementCount-3;
	console.log("Number of childs:" + numElements);
	for(i=0;i<numElements;i++)
	{
		var elem=document.getElementById(
			i);
		console.log(elem.src);

	}
}
**/

var first=true;		// se è la prima la lascio girata
var idFirst=-1; 	// id prima carta girata
var idSecond=-1;	// id seconda carta girata
var numCouple=-1; 	
var canTurn=0; // 0: posso girare, 1: girata una carta, 2: girate due carte



function game(startTime){
	console.log("---> "+array.toString());

	
	partita=true;
	for(i=0;i<array.length;i++){
		var el = document.getElementById(i);
		numCouple=array.length/2;
		console.log("->elemento "+ i + " vale "+array[i]);

		el.onclick = function gira_rigira () { 
				
				var id=this.id;

				// controllo se è già stato rimosso ed in caso non faccio niente
				var el=document.getElementById(id);
				if (el.style.opacity=="0") {console.log("deleted");}
				else{
					// TODO: controllo che le altre carte siano entrambe rigirate altrimenti attendo
			    	if (canTurn!=2) 
			    		gira(id, startTime);					
		    	}
    	};
	}
}

function gira(id, startTime){
	// giro la carta
	document.getElementById(id).src=array[id];
	
	// se è la prima carta della coppia allora non si rigira
	if (first) {idFirst=id; console.log("first"); first=false; canTurn=1;}
	else{
		if (id == idFirst) {console.log("già fatto");}
		else{
    		idSecond=id;
    		canTurn=2;
    		
		var cols = document.getElementsByClassName('cards');
		for(i=0; i<cols.length; i++) {
		    cols[i].style.cursor="default";
		}
    		console.log("second"); 
    		first=true;

    		// Controllo se sono uguali: se lo sono allora va via altrimenti le rigiro entrambe
    		if(array[idFirst] == array[idSecond]) {
    			setTimeout(remove, 500, idSecond, idFirst, startTime);
    		}
			else {
				// rigiro le due carte
				var tmp1=idFirst;
				var tmp2=idSecond;
				console.log(idFirst + "--" +idSecond);
    			idFirst=idSecond=-1;
    			console.log(idFirst + "--" +idSecond);
    			setTimeout(rigira, 700, tmp1);	
    			setTimeout(rigira, 700, tmp2);
    			
			}
		}
	}	
}
	
var stars=-1;

function remove(idSecond, idFirst, startTime){
	console.log("Uguali"); 
	
	var el1=document.getElementById(idSecond);
	el1.style.animation="fadeOut 0.5s";
	el1.style.opacity="0";

	el1.style.cursor="default";
	el1.style.pointerevents="none";
	
	var el2=document.getElementById(idFirst);
	el2.style.animation="fadeOut 0.5s";
	el2.style.opacity="0";
	el2.style.cursor="default";
	el2.style.pointerevents="none";	
	canTurn=0;
	
	var cols = document.getElementsByClassName('cards');
	for(i=0; i<cols.length; i++) {
	    cols[i].style.cursor="pointer";
	}
	numCouple--;
	console.log(numCouple);
	if (numCouple==0){
		// Calcolo la durata della partita
		console.log("FINISH");
		setTimeout(goToEnd, 400, startTime);
		partita=false;
	}
}

function rigira(id) {
	var el = document.getElementById(id);
	el.src=background;
	canTurn=0;

	var cols = document.getElementsByClassName('cards');
	for(i=0; i<cols.length; i++) {
	    cols[i].style.cursor="pointer";
	}
}

function addZero(i){
	if (i<10) {
		i="0"+i;
	}
	return i;
}


function timeConversion(endTime, startTime) {
	var sm=startTime.getMinutes();
	var em=endTime.getMinutes();
	var dm=em-sm;
	var ss=startTime.getSeconds();
	var es=endTime.getSeconds();
    var ds=es-ss;
    
    // Caso: secondi finali maggiori dei secondi iniziali
    if (ds<0){
    	dm--;
    	ds=60-(ss-es);
    }

    // Caso: minuti finali maggiori dei minuti iniziali
    if (dm<0){
    	
    	dm=60-(sm-em);
    }
    console.log("dm:"+dm+"ds:"+ds);
    stars=-1;

    switch(diff) {
    case 0:
        if (ds <=20){//3stelle
        	stars=3;
        }
        else if (ds <=45){ //2stelle
			stars=2;
        }
        else {//1stella
        	stars=1;
        }
        break;
    case 1:
        if (ds <=40){//3stelle
			stars=3;
        }
        else if (ds <=70){ //2stelle
        	stars=2;
        }
        else {//1stella
        	stars=1;
        }
       break;
    case 2:
    	if (dm <= 1 && ds<=50 ){ //3stelle
			stars=3;
    	}
    	else if (dm <= 2) { //2stelle
    		stars=2;
    		console.log("due");
    	}
    	else { //1stella
    		stars=1;
    		console.log("una");
    	}
    default: {}
    }
    

    if (dm==0) return ds +" secondi";
    else if (dm==1) return dm+" minuto e "+ds +" secondi";
    else return dm+" minuti e "+ds +" secondi";

}	

function mostraStars(){
	var s1=document.getElementById('star1');
	var s2=document.getElementById('star2');
	var s3=document.getElementById('star3');
	setTimeout("mostraIn(star1)", 2500);
	setTimeout("mostraIn(star2)", 2700);
	setTimeout("mostraIn(star3)", 2900);

	setTimeout("mostraIn(fine)", 3250);
}

function goToEnd(startTime){
		var endTime = new Date();
		console.log("START: "+startTime + "END: "+endTime);
		
		//console.log(d + "date");
	    var out=timeConversion(endTime,startTime);
		
		// coloro le stelle
		if(stars==1){

			console.log("uno");
			document.getElementById("star1").innerHTML="&bigstar;";
			document.getElementById("star2").innerHTML="&star;";
			document.getElementById("star3").innerHTML="&star;";
		}
		else if (stars==2){
			console.log("due");
			document.getElementById("star1").innerHTML="&bigstar;";
			document.getElementById("star2").innerHTML="&bigstar;";
			document.getElementById("star3").innerHTML="&star;";
		}
		else if (stars==3) {

			console.log("tre");
			document.getElementById("star1").innerHTML="&bigstar;";
			document.getElementById("star2").innerHTML="&bigstar;";
			document.getElementById("star3").innerHTML="&bigstar;";
		}


		var box=document.getElementById('boxGame');
		box.style.animation="fadeOut 0.7s";
		
		setTimeout(goToStats,700, out, box);
}

function goToStats(out, box){
	nascondi(box);
	var text=document.getElementById('ciao');
	mostra(text);
	var timerBox=document.getElementById('time');
	timerBox.innerHTML+=out;
	setTimeout(mostra, 2000, timerBox);
	mostraStars();

}


function gestisciTasto(){
	var tasto = window.event.keyCode;
	if (tasto == 27) {
		returnToMain();
	}
	if (tasto == 13) {
		console.log("INVIO");
		if(settaggio) myStartAfterSettingsFunction();
	}
}

function returnToMain(){
	if (partita) {
			var answer = confirm ("Sei sicuro di voler abbandonare la partita?");
        	if (answer){
	            document.getElementById("boxAbout").style.display="none";
	            document.getElementById("boxHelp").style.display="none";
	            document.getElementById("boxOptions").style.display="none";
	            document.getElementById("boxGame").style.display="none";
	            document.getElementById("firstPage").style.opacity="1";
	            clearDiv();
	            enableAllButtonAbove();
	            partita=false;
	            return false; 
	        }
    	}
    else console.log("nulla");
    }


