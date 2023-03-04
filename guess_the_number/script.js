// creating random number 

let randomNumber = Math.floor(Math.random()*100) + 1;
let guessCount = 1;

// this is form field variable

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

// creating variable for displaying the game result and flow

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');


// creating function to check for the guess user made 

function checkGuess(){
    
    // getting the user number and storing in variable
    const userGuess = Number(guessField.value);

    // checking if the guess count is 1
    if (guessCount === 1){
        guesses.textContent = 'Previous Guess : ';
    }
    guesses.textContent += `${userGuess}`+'-';

    // check if the user made correct guess
    if (userGuess === randomNumber){
        lastResult.textContent = 'Congrats 🎉🎉 You made the Guess Correct 🤜🏼';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }else if (guessCount === 10){
        lastResult.textContent = 'Oops Number of Try out! Sorry 😔'
        lowOrHi.textContent = '';
        setGameOver();
    }else {
        lastResult.textContent = 'Wrong Guess 👎🏼';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber){
            lowOrHi.textContent = 'The Guess is Low ...';
        }else if (userGuess > randomNumber){
            lowOrHi.textContent = 'The Guess is High ...';
        }
    }

    // increment the count and reset the field
    guessCount ++;
    guessField.value ='';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

// creating Game over condition
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    const container = document.querySelector('.container');
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start over';
    resetButton.style.width = '200px';
    container.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

// creating reset game 
function resetGame(){
    guessCount = 1;
    const resultParas = document.querySelectorAll('.resultParas p');
    for(const resultPara of resultParas){
        resultPara.textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random()*100) + 1;
}