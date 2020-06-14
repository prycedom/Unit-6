// Variables

const keyboard = document.getElementById('qwerty');
const newphrase = document.getElementById('phrase');
const reset = document.getElementsByClassName('.btn__reset');
const startOverlay = document.getElementById('overlay');
const scoreboard = document.getElementById('#scoreboard');
const tries = document.getElementsByClassName('tries');
const showElements = document.getElementsByClassName('show');
const letters = document.getElementsByClassName('letter');
const title = document.getElementById('title');
const btn__reset = document.getElementById('btn__reset');

let phrases = ['I love coding',
               'I am learning to code',
               'I am learning javascript',
               'javascript is fun',
               'Learning to code is fun'];
let missed = 0;

startOverlay.addEventListener('click',() => {
  overlay.style.display = 'none';
  missed = 0
  const phraseArray = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(phraseArray);
  const keys = keyboard.getElementsByTagName('button');
     for (var i = 0; i < keys.length; i++) {
       keys[i].classList.remove('chosen');
       keys[i].disabled =  false;
       startOverlay.classList.remove('win');
       startOverlay.classList.remove('lose');
     }
     for (var i = 0; i < tries.length; i++) {
       tries[i].style.display = "inline-block";
     }

});
// Get random Phrase array:
const getRandomPhraseAsArray = arr => {
  var randomNumber =  Math.floor(Math.random() * arr.length);
  return arr[randomNumber].split('');
}

 const addPhraseToDisplay = arr => {
   const ul = newphrase.getElementsByTagName('ul')[0];
   ul.innerHTML = "";
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


// Checks to see if the letter is in this phrase:

const checkLetter = button => {
  const letters = document.getElementsByClassName('letter');
  let matchingLetter = null;
  for (let i = 0; i < letters.length; i++) {
  if (letters[i].innerHTML.toLowerCase() === button.innerHTML.toLowerCase()) {
     letters[i].classList.add('show');
     matchingLetter = letters[i];
  }
 }
 return matchingLetter;
}

const keys = keyboard.getElementsByTagName('button');
   for (var i = 0; i < keys.length; i++) {
     keys[i].addEventListener('click', function() {
       this.classList.add('chosen');
       this.setAttribute('disabled', '');
       const letterFound = checkLetter(this);

       if (letterFound === null) {
          tries[missed].style.display = "none";
          missed = missed +1;
       } else {

       }
       checkWin();
     });
}

const checkWin = () => {
   if (showElements.length === letters.length) {
       startOverlay.classList.add('win');
       startOverlay.style.display = 'flex';
       title.innerHTML = 'YOU WIN!'
       btn__reset.innerHTML = 'Play again'
} else if (missed === 5) {

  startOverlay.classList.add('lose');
  startOverlay.style.display = 'flex';
  title.innerHTML = 'YOU Lose!'
  btn__reset.innerHTML = 'Try again'
  }
}
//
// }
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
//
