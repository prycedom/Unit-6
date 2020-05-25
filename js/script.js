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
  var randomNumber =  Math.floor(Math.random() * phrases.length);
  return arr [randomNumber]
}
getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr){
  const phraseArray = getRandomPhraseAsArray(phrases);
  var getLetter =  Math.floor(Math.random() * phrases.length);
  var i;
for (i = 0; i < phraseArray.length; i++) {
  text += phraseArray[i];
}
  return arr [getLetter]

}

// addPhrasetoDisplay(phraseArray);

// Checks to see if the letter is in this phrase:

// const checkLetter = button => {
//   checkLetter.addEventListner('click', () => {
//     var randomNumber =  Math.floor(Math.random() * phrases.length);
//     var liLetter = ['I love coding',
//                     'I am learning to code',
//                     'I am learning javascript',
//                     'javascript is fun',
//                     'Learning to code is fun']
//     var match = 0;
//     for (i = 0; i < phrases.length; i++) {
//         text += arr[liLetter];
//        if () {
//          return match;
//        }
//        else {
//
//        }
//     }
//     return arr [liLetter]
//   });


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
