        var words = ["pizza", "leonardo", "donatello", "michelangelo", "raphael", "shredder", "krang"];
        var target = (Math.floor(Math.random() * words.length));
        var targetWord = words[target];
        var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var answers = [ ];

        document.onkeyup = function(event) {
            var spaces = "_ ";
            for (var i = 0; i < targetWord.length; i++)
        }
            var guess = event.key;

        
        for (var i = 0; i < targetWord.length; i++) {
            answers[i] = "_ ";
        }

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
   