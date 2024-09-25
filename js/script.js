console.log("Jeg er i guessnumber")

//Henter message fra HTML
const labelMessage = document.querySelector(".message");
console.log(labelMessage);
console.log(labelMessage.textContent);

//Henter det random nummber
const labelNumber = document.querySelector(".number");
console.log(labelNumber);

//Henter scoren man er på
const labelScore = document.querySelector(".score");
console.log(labelScore);

//Henter inputfeltet hvor man gætter
const inpGuess = document.querySelector(".guess");
console.log(inpGuess);

//Henter Again trykknappen
const pbAgain = document.querySelector(".again")
console.log(pbAgain);

//Henter guess trykknappen
const pbGuess = document.querySelector(".check")

const labelHighscore = document.querySelector(".highscore")

let bdy = document.querySelector("body")
console.log(bdy)


let randomNumber = 0;
let startscore = 20;
let currentScore;
let highscore = 0;

function generateNumber() {
    randomNumber = Math.trunc(Math.random() * 20 + 1)
    labelMessage.textContent = "Start Guessing..."
    inpGuess.value = ""
    currentScore = startscore
    labelScore.textContent = startscore
    bdy.style.backgroundColor = "";
}


function guessNumber() {
    let guess = Number(inpGuess.value);
    //Checker om det er et tal
    if (!guess) {
        labelMessage.textContent = "Skriv et tal";
    } else if (guess === randomNumber) {
        labelMessage.textContent = "Du har vundet, Wuhu!";
        bdy.style.backgroundColor = "green";
        if (currentScore > highscore) {
            highscore = currentScore;
            labelHighscore.textContent = highscore;
        }
    } else {
        if (currentScore > 0) {
            if (guess > randomNumber) {
                labelMessage.textContent = "For højt";
            } else {
                labelMessage.textContent = "For lavt";
            }
            currentScore--;
            labelScore.textContent = currentScore;
        }

        // Checker om scoren er 0, hvis ja ændre baggrund til rød
        if (currentScore === 0) {
            labelMessage.textContent = "Du har desværre tabt spillet, prøv igen!";
            bdy.style.backgroundColor = "red";
        }
    }
}


pbAgain.addEventListener("click", generateNumber);

pbGuess.addEventListener("click", guessNumber);

generateNumber()

