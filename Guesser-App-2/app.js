/*
    Games Function Rules
    player must guess number between 1 to 10
    player will play certain amount of guess
    notify a player of guessing remaning
    notify the player of the correct answer if loose
    lets play again
*/

//Game values

let min = 1,
    max = 10,
    winningNum = getRandomNumber(min,max);
    guessesLeft = 3;

// UI ELEMENT
const game = document.querySelector(".game"),
	minNum = document.querySelector(".min-num"),
	maxNum = document.querySelector(".max-num"),
	input = document.querySelector("#guess-input"),
	guessBtn = document.querySelector("#submit-result-btn"),
	message = document.querySelector(".message"),
	restartBtn = document.querySelector(".restartBtn");
      

//   Assign UI MIN AND MAX
minNum.textContent = min;
maxNum.textContent = max;

// play again event
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

//listen event
guessBtn.addEventListener('click', function () {
    // generate random number
    const randomNum = Math.floor(Math.random() * 10 + 1);
    const guess = parseInt(input.value);
    // check if empty then alert
    if (isNaN(guess)|| guess < min || guess > max) {
        setMessage(`Please Enter the number between ${min} and ${max} ?`, 'red');
    }

    // chech if win then do that below
    if (guess === winningNum) {
        // GamerOver function
        GameOver(true, `${winningNum} is correct! You Win!!`);
        
    } else {
        // wrong number
        guessesLeft -= 1;


        if (guessesLeft === 0) {
            // Game over - lost
            GameOver(false,`Game Over,you lost and the correct number is ${winningNum}`);
        } else {
             
            // Game continues - answer wrong

            input.style.borderColor = "green";

            // tell the user incorrect number and guessess left
            setMessage(`${guess} is not correct, You have ${guessesLeft} guess left`,'red');
        }
    }
})


// gameover function
function GameOver(won, msg) {
    let color = won === true ? 'green' : 'red';
    // disabled input and button when win
    input.disabled = true;
    // guessBtn.disabled = true;
    // change border color of input
    input.style.borderColor = color;
    // set the winner message
    setMessage(msg, color);
    

    // play again set the button to again
    guessBtn.value = 'Play Again';
    guessBtn.className = 'play-again';
}

// get randomm number
function getRandomNumber(min, max) {
    console.log(Math.floor(Math.random() * 10 + 1));
    return Math.floor(
        Math.random() * (max - min + 1) + min
    );
}

// setMessage
function setMessage(text, color) {
    input.style.border = `1px solid ${color}`;
    message.innerHTML = `<span style="color:${color};font-weight:bold;">${text}</span>`
}

