
    //assign variables
    //create wordbank
    var wordbank= ["pizza", "leonardo", "cowabunga", "raphael", "michelangelo", "shredder", "krang"];
   
   //picking a word
    var targetWord = wordbank[Math.floor(Math.random() * wordbank.length)];
    
    // answer array
    var answer = [];
    for (var i = 0; i < wordbank.length; i++){
        answer[i]= "_ ";
    }
    var remainingLetters = targetWord.length;

    //actual code
    while (remainingLetters > 0) {
        var guess = prompt("Guess a letter");
        for (var j = 0; j < wordbank.length; j++) {
            if (wordbank[j] === guess) {
                answer[j] = guess;
                remainingLetters--;
            }
        }
        // player input
        // Update answer and remainingLetters
    }
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var wrongletters = [];
    var wins = 0;
    var losses = 0;
    var counter = 0;
    var imagebank = [];

    var showWins = document.getElementById("wins");
    
    console.log (nextUp);
    
    $("target-word").append(spaces);

    //prototype of keydown function 
    document.onkeydown = function(event){
        var userInput = event.key;

    // generate a word from wordbank

    //While the word hasn't been guessed {
        //show progress
        //get input/guess
    }

    //if player guesses correct {
        //generate letter into appropriate spot in spaces variable
    }
    //else {
        //generate letter into wrongletters array
    }
    }