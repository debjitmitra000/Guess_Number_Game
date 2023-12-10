let randomValue = (parseInt(Math.random()*100)+1);

let guess = document.querySelector('#guess');
let submit = document.querySelector('#submit');
let previousguess = document.querySelector('.previousguess');
let remainingguess = document.querySelector('.remainingguess');
let loworhigh = document.querySelector('.loworhigh');

let p = document.querySelector('#para');

let prevguess=[];
let numguess=1;

let flag=true;

if(flag=true)
{
    submit.addEventListener('click',function(e){
        e.preventDefault();
        let userValue=parseInt(guess.value);
        validateGuess(userValue);
    });
}

if(flag=true)
{
    guess.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            let userValue=parseInt(guess.value);
            validateGuess(userValue);
        }
    });
}

function validateGuess(userValue){
    if(isNaN(userValue))
    {
        alert('Enter A Valid Number');
    }
    else if(userValue<1)
    {
        alert('Enter A Number Between 0 to 100')
    }
    else if(userValue>100)
    {
        alert('Enter A Number Between 0 to 100')
    }
    else
    {
        if(numguess==10)
        {   
            prevguess.push(userValue);
            displayGuess(userValue);
            let j=checkGuess(userValue);
            if(j==false){
                displayMessage(`Game Over The Number was ${randomValue}`);
                endGame();
            }
            else
            {
                endGame();
            }
        }
        else
        {
            prevguess.push(userValue);
            displayGuess(userValue);
            checkGuess(userValue);
        }
    }
}

function checkGuess(userValue)
{
    if(randomValue===userValue)
    {
        displayMessage(`You Guessed Right`);
        endGame();
    }
    if(randomValue>userValue)
    {
        displayMessage(`Try A Higher Number`);
        return false;
    }
    if(randomValue<userValue)
    {
        displayMessage(`Try A Lower Number`);
        return false;
    }
}

function displayGuess(userValue)
{
    guess.value='';
    previousguess.innerHTML+=`|${userValue}|`;
    numguess++;
    remainingguess.innerHTML=`${11-numguess}`;
}

function displayMessage(message)
{
    loworhigh.innerHTML=`<h4 align="center">${message}</h4>`;
}

function endGame()
{
    guess.value='';
    guess.setAttribute('disabled','');
    p.innerHTML=`<button id="newGame" onclick="newGame();">New Game</button>`;
    flag=false;
}

function newGame()
{
    p.innerHTML=``;
    randomValue = (parseInt(Math.random()*100)+1);
    previousguess.innerHTML =``;
    numguess=1;
    guess.value='';
    displayMessage('');
    remainingguess.innerHTML=`${11-numguess}`;
    guess.removeAttribute('disabled','');
    flag=true;
}