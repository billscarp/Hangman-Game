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
    console.log(selectedWord);
}
 




// call functions

GameStart();