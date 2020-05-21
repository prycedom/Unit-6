// Variables

const keyboard = document.getElementById (qwerty);
const newphrase = document.getElementById (phrase);
const reset = document.getElementsByClassName ('.btn__reset');
const startOverlay = document.getElementById('overlay');
let phrases = ['I love coding',
               'I am learning to code',
               'I am learning javascript',
               'javascript is fun',
               'Learning to code is fun']
const missed = [0]
const i = missed;
// i = missed[0];
// Use later
// for (i = 0; i < 5; i++) {
//
// }

startOverlay.addEventListener('click',() => {
  overlay.style.display = 'none';
});
// Get random Phrase array:
const getRandomPhraseAsArray = arr => {
  return Math.floor(Math.random() * phrases.length + 1);
}
getRandomPhraseAsArray(phrases);

// Checks to see if the letter is in this phrase:
const checkLetter = button => {

}
//
// const addPhraseToDisplay = arr => {
//
// }
//
//
// const checkWin = () => {
//
// }
//
//
//
// qwerty.addEventListener('click', () => {
//
// }
