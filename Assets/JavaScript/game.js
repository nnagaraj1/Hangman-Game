var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var words = ["Van Gogh", "Da Vinci", "Michelangelo", "Monet", "Escher", "O'Keeffe", 
"Rembrandt", "Matisse", "Pollock", "Picasso", "Kahlo", "Warhol", "Dali"];
var messages = ["You win!", "Sorry, you lost. Game over!", " already guessed. Please try again."];
var getHint ;       // Word getHint
var spaces ;        // Number of spaces in words
var guesses = [];   // Stored guesses
var lives ;         // Lives
var counter ;       // Correct count

// Get elements
    var showLives = document.getElementById('mylives');
    var getHint = document.getElementById('hint');

// Creating variables to hold the number of wins and losses
var wins = 0;
var losses = 0;

console.log(letters);

// Create alphabet ul
var buttons = function() {
    myButtons = document.getElementById("buttons");
        letters = document.createElement("ul");


// This function is run whenever the user presses a key
document.onkeyup = function(letters) {

    // Determines which key was pressed
    var userGuess = event.key;
}

/* Choose a word */
var currentWord = words[Math.floor(Math.random() * words.length)];

guess () {
    if (this.words.indexOf(letters) > -1) {
        this.correctGuess(letters);
    } else {
        this.incorrectGuess(letters);
    }
}

correctGuess(letters) {
    this.correctGuesses.push(letters);
}

var answer = [];
for (var i = 0; i < currentWord.length; i++) {
    answer[i] = "_";
}

var remainingLetters = currentWord.length;

while(remainingLetters > 0) {
    // Game code goes here
    // Show player their progress
    // Take input from player
    // Update answer and remainingLetters for every correct guess   
}

function setup() {
    messages = {
        wins: "You win!"
        losses: "Sorry, you lost. Game over!"
        guesses: " already guessed. Please try again."

    }
}

// Draw Hangman with each incorrect guess
 if(incorrectGuess(letters) < 5) = function() {
     var animate = function(draw) {
         frame1 = function() {
            ellipse(0, 150, 150, 150); // head
        }
         frame2 = function() {
            line(150, -150); // body
        }
         frame3 = function() {
            line(165, 164, 75, 75); // right arm
        }
         frame4 = function() {
            line(150, 150, -200, -200); // right leg
         }
         frame5 = function() {
            line(-164, -164, 75, 75); // left arm
         }
         frame6 = function() {
             line(-150, -150, -200, -200); // left leg
         }
// Play the game
play = function() {
    words = ["Van Gogh", "Da Vinci", "Michelangelo", "Monet", "Escher", "O'Keeffe", 
"Rembrandt", "Matisse", "Pollock", "Picasso", "Kahlo", "Warhol", "Dali"];

console.log(words);

lives = 5;
counter = 0;
spaces = 0;
}

play ()

// Hint

hint.onclick = function() {
    hints = ['Starry Night', 'Mona Lisa', 'Sistine Chapel', 'Impression, Sunrise', 'Relativity', 
    'Oriental Poppies', 'The Return of the Prodigal Son', 'Still Life with Geraniums', 
    'Abstract movement', 'Cubism', 'Pop art', 'Surrealism'];
}
         
         
         
         };

 }
 }

