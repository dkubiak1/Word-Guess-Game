var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 

var wordBank = ["BANANA", "APPLE", "ORANGE", "WATERMELON", "KIWI", "PINEAPPLE", "MANGO", "CHERRY", "STRAWBERRY", "PEACH", "PEAR", "RASPBERRY", "BLUEBERRY"];

var correctGuess = 0;

var incorrectGuess = 0;

var totalCorrect = 0;

var wordChoice = " ";

var lives = 7;

var letterGuess = [ ];

function chooseWord() {
    var rand = Math.floor(Math.random() * wordBank.length); 
    wordChoice = wordBank[rand]; 
 
}    

function reset() {
    correctGuess = 0;
    incorrectGuess = 0;
}

chooseWord();

var remainingLetters = wordChoice.length;

 if (wordChoice.length < 1) {
            document.getElementById("c1").style.display = "none";
        }
        if (wordChoice.length < 2) {
            document.getElementById("c2").style.display = "none";
        }
        if (wordChoice.length < 3) {
            document.getElementById("c3").style.display = "none";
        }
        if (wordChoice.length < 4) {
            document.getElementById("c4").style.display = "none";
        }
        if (wordChoice.length < 5) {
            document.getElementById("c5").style.display = "none";
        }
       if (wordChoice.length < 6) {
            document.getElementById("c6").style.display = "none";
        }
        if (wordChoice.length < 7) {
            document.getElementById("c7").style.display = "none";
        }
        if (wordChoice.length < 8) {
            document.getElementById("c8").style.display = "none";
        }
        if (wordChoice.length < 9) {
            document.getElementById("c9").style.display = "none";
        }
        if (wordChoice.length < 10) {
            document.getElementById("c10").style.display = "none";
        }

document.onkeyup = function(event){
    reset();
    var keyPress = event.key;

    var userKey = keyPress.toUpperCase();

    for (i = 0; i < wordChoice.length; i++) {
            
    
            if (wordChoice[i] === userKey) {
                correctGuess++;
              
            }

            if (wordChoice[i] === userKey && letterGuess.indexOf(userKey) == -1) {
                  totalCorrect++;  

            }
            

            else if (alphabet.indexOf(userKey) > -1 && wordChoice[i] != userKey) {
                incorrectGuess++;
            } 

    }   
            
         function lifelost() {
    
                if (correctGuess == 0 && incorrectGuess > 0 && letterGuess.indexOf(userKey) == -1) {  
                lives--;
                }

        }        
        function remain() {
            if (letterGuess.indexOf(userKey) === -1) {
            remainingLetters = remainingLetters - correctGuess;
            }
        }

        remain();
        lifelost(); 
        if (alphabet.indexOf(userKey) > -1 && letterGuess.indexOf(userKey) == -1) {
        letterGuess.push(userKey);
        }    
        
        if (wordChoice[0] === userKey) {
        document.getElementById("let1").style.display = "block";
        }
        if (wordChoice[1] === userKey) {
        document.getElementById("let2").style.display = "block";
        }
        if (wordChoice[2] === userKey) {
        document.getElementById("let3").style.display = "block";
        }
        if (wordChoice[3] === userKey) {
        document.getElementById("let4").style.display = "block";
        }        
        if (wordChoice[4] === userKey) {
        document.getElementById("let5").style.display = "block";
        }
        if (wordChoice[5] === userKey) {
        document.getElementById("let6").style.display = "block";
        }
        if (wordChoice[6] === userKey) {
        document.getElementById("let7").style.display = "block";
        }
        if (wordChoice[7] === userKey) {
        document.getElementById("let8").style.display = "block";
        }
        if (wordChoice[8] === userKey) {
        document.getElementById("let9").style.display = "block";
        }
        if (wordChoice[9] === userKey) {
        document.getElementById("let10").style.display = "block";
        }
        
        var html = "This word contains " + correctGuess + " letter " + userKey;
        var html2 = "This word contains " + incorrectGuess + " letters that are not " + userKey; 
        var html3 = "You have " + lives + " remaining lives";
        var html4 = "Guessed Letters: " + letterGuess;
        var html5 = "Total Correct: " + totalCorrect;
        var html6 = "Remaining Letters: " + remainingLetters;


        document.getElementById("correct").innerHTML = html; 
        document.getElementById("incorrect").innerHTML = html2; 
        document.getElementById("lives").innerHTML = html3; 
        document.getElementById("guessed").innerHTML = html4;
        document.getElementById("total").innerHTML = html5;
        document.getElementById("remain").innerHTML = html6;
        
        function won() {
            if (remainingLetters === 0) {
                alert ("YOU WON!!!");
                location.reload();
            }
        }
        setTimeout(won,2000);
        function lose() {
            if (lives === 0) {
            alert("YOU LOST!!");
            location.reload();
            }    
        }
        setTimeout(lose,2000);
}

function generate() {
   
    document.getElementById("let1").innerHTML = wordChoice[0]; 
    document.getElementById("let2").innerHTML = wordChoice[1]; 
    document.getElementById("let3").innerHTML = wordChoice[2]; 
    document.getElementById("let4").innerHTML = wordChoice[3]; 
    document.getElementById("let5").innerHTML = wordChoice[4]; 
    document.getElementById("let6").innerHTML = wordChoice[5]; 
    document.getElementById("let7").innerHTML = wordChoice[6]; 
    document.getElementById("let8").innerHTML = wordChoice[7]; 
    document.getElementById("let9").innerHTML = wordChoice[8]; 
    document.getElementById("let10").innerHTML = wordChoice[9];  
    

}   


generate();

console.log(wordChoice);

