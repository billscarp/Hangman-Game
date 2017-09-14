// Create Variables

var wordOptions = ["porsche", "bmw", "mercedes", "bugatti", "lamborghini", "corvette", "charger", "mustang" ];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// counters

var winCount = 0;
var LossCount = 0;
var guessesLeft = 9;

// functions

function GameStart () {

    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    // reset area

    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Associate right or wrong letters with blanks

    for (var i=0; i < numBlanks; i++){
        blanksAndSuccesses.push("_");
    }



    // test area

    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);

}
 




// call functions

GameStart();