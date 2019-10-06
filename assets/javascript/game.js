$(document).ready(function hangmanGame() {
    var words = ["pizza", "leonardo", "donatello", "michelangelo", "raphael", "shredder", "krang"];
    var target = (Math.floor(Math.random() * words.length));
    var targetWord = words[target];
    var spaces = "_ ";
    var blankWord = [];
    var letters = [];
    var guess = "";
    var win = 0;
    var loss = 0;

    //guess array that holds letters that users have already guessed
    $("#blanks").append(spaces.repeat(targetWord.length)) ;

    for (var i = 0; i < targetWord.length; i++ ){
        blankWord.push("_ ");
    }
    

    document.onkeyup = function(event) {
        guess = event.key;
        (letters).push(guess);
        $("#letters-guessed").text(letters);

    if (targetWord.indexOf(guess) !== -1){
        for (var i = 0; i < targetWord.length; i++) {
            if (targetWord [i] === guess){
                blankWord[i] = guess;
            }
            $("#blanks").text(blankWord.join(""));
        }
    }
   var blankWordString = blankWord.join("");
   for (j = 0; j < 10; j++){
   if (blankWordString === targetWord && j <= 10) {
       win++;
       console.log("Wins: " + win)
       $("#win-loss-record").text("Wins: " + win + " Losses: " + loss);
   }
   else if (blankWordString !== targetWord && j == 10) {
       loss++;
       console.log("Losses: " + loss);
       $("#win-loss-record").text("Wins: " + win + " Losses: " + loss);
   }
    console.log("Wins: " + win);
    console.log("Losses: " + loss);
    }
    }
});
   