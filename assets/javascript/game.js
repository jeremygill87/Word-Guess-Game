    function hangmanGame() {
        var words = ["pizza", "leonardo", "donatello", "michelangelo", "raphael", "shredder", "krang"];
        var target = (Math.floor(Math.random() * words.length));
        var targetWord = words[target];

        var answers = [ ];
        function beginGame(){
        for (var i = 0; i < targetWord.length; i++) {
            answers[i] = "_ ";
        }
        console.log(targetWord);
        $("target-word").push(answers[i]);

        var remainingLetters = targetWord.length;
        
        while (remainingLetters > 0) {
            var guess = prompt("Guess a letter, or type 'exit' to stop playing");
            if (guess === "exit") {
                break;
            } else {
                for (var j = 0; j < words.length; j++) {
                    answers[j] = guess;
                    remainingLetters--;
                }
            }
        }
    }
}
   