// Variables

const keyboard = document.getElementById('qwerty');
const newphrase = document.getElementById('phrase');
const reset = document.getElementsByClassName('.btn__reset');
const startOverlay = document.getElementById('overlay');
let phrases = ['I love coding',
               'I am learning to code',
               'I am learning javascript',
               'javascript is fun',
               'Learning to code is fun'];
let missed = 0;

startOverlay.addEventListener('click',() => {
  overlay.style.display = 'none';
});
// Get random Phrase array:
const getRandomPhraseAsArray = arr => {
  var randomNumber =  Math.floor(Math.random() * arr.length);
  return arr[randomNumber].split('');
}
getRandomPhraseAsArray(phrases);

 const addPhraseToDisplay = arr => {
   const ul = newphrase.getElementsByTagName('ul')[0];
   for (let i = 0; i < arr.length; i++) {
     const li = document.createElement('li');
     if (arr[i] === ' ') {
        li.classList.add('space');
     }
     else {
       li.classList.add('letter');
     }
     li.append(arr[i]);
     ul.append(li);
  }
}
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// Checks to see if the letter is in this phrase:

const checkLetter = button => {
  checkLetter.addEventListner('click', () => {
    var randomNumber =  Math.floor(Math.random() * phrases.length);
    var liLetter = ['I love coding',
                    'I am learning to code',
                    'I am learning javascript',
                    'javascript is fun',
                    'Learning to code is fun']
    var match = 0;
    for (i = 0; i < phrases.length; i++) {
        text += arr[liLetter];
       if (true) {
         return match;
       }
       else {

       }
    }
    return arr [liLetter]
  });
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
