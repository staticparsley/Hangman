const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('Car Parts', 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;
});

const request = new XMLHttpRequest();

request.addEventListener('readystatechange',(e) => {
    if(e.target.readyState === 4 && e.target.status === 200){
        const data = JSON.parse(e.target.responseText);
    } else if(e.target.readyState){
        console.log("error");
    }
});

request.open('GET','http://puzzle.mead.io/puzzle');
request.send();