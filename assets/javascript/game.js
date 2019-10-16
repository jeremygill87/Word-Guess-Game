$(document).ready(function hangmanGame() {
    var words = ["pizza", "michelangelo", "leonardo", "donatello", "raphael", "splinter", "krang", "shredder", "bebop", "rocksteady", "technodrome", "april"];
    var guessingWord = words[Math.floor(Math.random() * words.length)];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 6;
    var spaces = new Array(guessingWord.length).fill("_");
    var userGuess = "";
    var usedLetters = [];
    
    
    function reset(){
        guessingWord = words[Math.floor(Math.random() * words.length)];
        guessesLeft = 6;
        var spaces = new Array(guessingWord.length).fill("_");
        usedLetters = [];
        $("#blanks").text(spaces.join(" "));
        usedLetters = [];
        $("#letters-guessed").text(usedLetters);
        console.log(guessingWord)
    }
    
    
    console.log(guessingWord);
    $("#blanks").text(spaces.join(" "));
    $("#guesses-left").text("Guesses left: " + guessesLeft)
    $("#win-loss-record").text("Wins: "+ wins + " Losses: " + losses);
    
    
    // reads user input for guess
    document.onkeyup = function (event) {
        space = spaces.join(" ")
        userGuess = event.key.toLowerCase();
    
        if (usedLetters.indexOf(userGuess) === -1) {
            usedLetters.push(userGuess);
            $("#letters-guessed").text(usedLetters);
            // guessesLeft--;
            // $("#guesses-left").text(guessesLeft);
                if(guessesLeft === 0){
                    alert("You lost.  Idiot");
                    losses++;
                    $("#win-loss-record").text("Wins: "+ wins + " Losses: " + losses);
                    reset();
                }
        } 
        else{
            alert("You already used that letter!")
        }
        
        // cycle through guessingWord and check for a match
        if (guessingWord.indexOf(userGuess) !== -1) {
            for (var i = 0; i < guessingWord.length; i++) {
                if (guessingWord[i] === userGuess) {
                    spaces[i] = userGuess;
                    console.log(spaces + " " + userGuess);
                    $("#blanks").text(spaces.join(" "));
                        if(spaces.join("") === guessingWord){
                            alert("COWABUNGA!");
                            
                            wins++
                            $("#win-loss-record").text("Wins: "+ wins + " Losses: " + losses);
                        }
                }
            }
        }
        else {
            guessesLeft--;
            $("#guesses-left").text(guessesLeft);
        }
    
    }
    
    $(".reset").click(function(){
        reset();
    })
});
   