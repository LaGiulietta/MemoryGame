// Registrazione delle azioni da fare alla chiusura delle box e al riempimento del canvas 

window.onload = function(){
	document.getElementById('close').onclick = function(){
        
        document.getElementById("boxAbout").style.display="none";
        document.getElementById("boxHelp").style.display="none";
        document.getElementById("boxOptions").style.display="none";
        document.getElementById("firstPage").style.opacity="1";
        enableAllButtonAbove();
        return false;
    	};
    
    document.getElementById('close2').onclick = function(){
        document.getElementById("boxAbout").style.display="none";
        document.getElementById("boxHelp").style.display="none";
        document.getElementById("boxOptions").style.display="none";
        document.getElementById("firstPage").style.opacity="1";
        enableAllButtonAbove();
        return false;
    	};
    
    document.getElementById('close3').onclick = function(){
        document.getElementById("boxAbout").style.display="none";
        document.getElementById("boxHelp").style.display="none";
        document.getElementById("boxOptions").style.display="none";
        document.getElementById("firstPage").style.opacity="1";
        enableAllButtonAbove();
        return false;
    	};

    document.getElementById('close4').onclick = function(){
        var answer = confirm ("Sei sicuro di voler abbandonare la partita?");
        if (answer){
            document.getElementById("boxAbout").style.display="none";
            document.getElementById("boxHelp").style.display="none";
            document.getElementById("boxOptions").style.display="none";
            document.getElementById("boxGame").style.display="none";
            //document.getElementById("via").style.display="none";
            document.getElementById("firstPage").style.opacity="1";
            clearDiv();
            enableAllButtonAbove();
            return false; 
            }
    	};
    

    document.getElementById('close5').onclick = function (){
        
            document.getElementById("boxAbout").style.display="none";
            document.getElementById("boxHelp").style.display="none";
            document.getElementById("boxOptions").style.display="none";
            document.getElementById("ciao").style.display="none";
            document.getElementById("time").style.display="none";
            document.getElementById("fine").style.display="none";
            document.getElementById("star1").style.display="none";
            document.getElementById("star2").style.display="none";
            document.getElementById("star3").style.display="none";
            document.getElementById("star1").style.display="&star;";
            document.getElementById("star2").style.display="&star;";
            document.getElementById("star3").style.display="&star;";
            document.getElementById("time").innerHTML="Hai completato il memory in: "; 
            document.getElementById("firstPage").style.opacity="1";
            clearDiv();
            enableAllButtonAbove();
        };

    document.getElementById('restart').onclick = function(){

        document.getElementById("boxAbout").style.display="none";
        document.getElementById("boxHelp").style.display="none";
        document.getElementById("boxOptions").style.display="none";
        document.getElementById("fine").style.display="none";
        document.getElementById("ciao").style.display="none";
        document.getElementById("time").style.display="none";
        document.getElementById("star1").style.display="none";
        document.getElementById("star2").style.display="none";
        document.getElementById("star3").style.display="none";
        document.getElementById("star1").style.display="&star;";
        document.getElementById("star2").style.display="&star;";
        document.getElementById("star3").style.display="&star;";
        document.getElementById("time").innerHTML="Hai completato il memory in: "; 
        document.getElementById("firstPage").style.opacity="1"; 
        clearDiv();
        myStartAfterSettingsFunction();
    };


    fillCanvas();

};