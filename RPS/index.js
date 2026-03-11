const choices =['rock','paper','scissor'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const score = document.getElementById("score");
let result=""
let value = "";
async function value1(value12) {
    value = value12;
 }
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }


async function playgame(){

    resultDisplay.textContent = "";
    let comp = ['rock', 'paper', 'scissor']
 
   
        let max = prompt("enter max score ");
        let computer = 0;
        let score2 = 0;
        while (computer != max && score2 != max) {
            alert("your turn choose in 3 sec ")
            await delay(4000);
            var comp1 = comp[Math.floor(Math.random() * comp.length)]

            if (value == comp1) {
                alert("same choice");
            }
            else if (value == 'rock' && comp1 == 'paper') {

                computer = computer + 1;
            }
            else if (value == 'paper' && comp1 == 'rock') {
                score2 = score2 + 1;
            }
            else if (value == 'rock' && comp1 == 'scissor') {

                score2 = score2 + 1;
            }
            else if (value == 'scissor' && comp1 == 'rock') {
                computer = computer + 1;
            }
            else if (value == 'paper' && comp1 == 'scissor') {
                computer = computer + 1;
            }
            else if (value == 'scissor' && comp1 == 'paper') {
                score2 = score2 + 1;
            }
            playerDisplay.textContent=`PLAYER: ${value}`;
            computerDisplay.textContent=`COMPUTER: ${comp1}`;
            score.textContent=`PLAYER : ${score2} COMPUTER : ${computer}`;

            value = "";
            

        }
        if (computer == max) {
            resultDisplay.textContent="computer win!!!";
        }
        else {
            resultDisplay.textContent="you win!!!";
        }

    }

    console.log(computerChoice);
    

