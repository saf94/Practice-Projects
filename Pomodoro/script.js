window.onload = function() {
    var innercircle = document.getElementById("innercircle");
    var innercircletext = document.getElementById("innercircletext");
    var firstdigits = document.getElementById("sessionlength").innerHTML;
    var seconddigits = document.getElementById("seconddigits").innerHTML;
    var sessionadd = document.getElementById("sessionadd").innerHTML;
    var pause = 1;

    console.log(firstdigits);
    console.log(seconddigits);
    
    document.getElementById("firstdigits").innerHTML = firstdigits;
    
    
    function starttimer() {
    
    pause++
    clearInterval(myInt);
    
    var myInt = setInterval(function() {
    if (pause % 2 === 0) {
           if (firstdigits >= 0) {
            if (seconddigits === "00" || seconddigits === 0) {
            firstdigits = parseInt(firstdigits, 10) - 1;
            document.getElementById("firstdigits").innerHTML = firstdigits;
            document.getElementById("seconddigits").innerHTML = "59";
            seconddigits = 58;
            
        } else if (seconddigits > 9) {
            document.getElementById("seconddigits").innerHTML = seconddigits;
            seconddigits = seconddigits - 1;
            console.log(firstdigits, seconddigits);
        } else if (seconddigits < 10 && seconddigits > 0) {
            document.getElementById("seconddigits").innerHTML = "0" + seconddigits;
            seconddigits = seconddigits - 1;
            console.log(firstdigits, seconddigits);        
        }
            
        } if (firstdigits === 0 && seconddigits === 0) {
            document.getElementById("firstdigits").innerHTML = 0;
            document.getElementById("seconddigits").innerHTML = "00";
            firstdigits = -1;
        }
        
        document.getElementById("innercircle").addEventListener("click", paused, false);
        
    } else {
        clearInterval(myInt);
    }   
     
            
        }, 1000)
    
    myInt();
    
    }
    
    function addsession() {
        document.getElementById("firstdigits").innerHTML = parseInt(firstdigits, 10) + 1;
        firstdigits = parseInt(firstdigits, 10) + 1;
        document.getElementById("sessionlength").innerHTML = firstdigits;
    }
    
    function minussession() {
        document.getElementById("firstdigits").innerHTML = parseInt(firstdigits, 10) - 1;
        firstdigits = parseInt(firstdigits, 10) - 1;
        document.getElementById("sessionlength").innerHTML = firstdigits;
    }
    
    
    document.getElementById("sessionadd").addEventListener("click", addsession, false);
    
    document.getElementById("sessionminus").addEventListener("click", minussession, false);

    document.getElementById("innercircle").addEventListener("click", starttimer, false);

};

