// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    let processedContent = this.content.toLowerCase();
    return processedContent === reverse(processedContent);
  }
}

phrase = new Phrase('raceCar');
// phrase.palindrome();
//

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Makes the phrase LOUDER.
  this.louder = function() {
    // FILL IN
    let loudy = this.content.toUpperCase()
    return loudy
  };
}

var frase = new Phrase('mamanski')
// frase.louder()
//
