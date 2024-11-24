let humanscore = 0;
let computerscore = 0;

function getComputerChoice(){
    let z = Math.floor(Math.random() * 3);
    if(z === 0){
        return "ROCK";
    }
    else if(z === 1){
        return "PAPER";
    }
    else{
        return "SCISSORS";
    }
}

window.onload = function() {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
            
    let humanChoice = '';
        
    rock.addEventListener("click", () => {
        humanChoice = 'ROCK';
        playGame(); 
    });
        
    paper.addEventListener("click", () => {
        humanChoice = 'PAPER';
        playGame();
    });
        
    scissors.addEventListener("click", () => {
        humanChoice = 'SCISSORS';
        playGame();
    });
            
    function getHumanChoice() {
        return humanChoice;
    }
        
    function playGame(){
        let s1 = getComputerChoice();
        let s2 = getHumanChoice();

        function playRound(s2, s1) {
            if(s2 === "ROCK" || s2 === "PAPER" || s2 === "SCISSORS"){
                const roundwin = document.querySelector("#roundwin");
                
                if(s2 === "ROCK" && s1 === "PAPER"){
                    roundwin.textContent = "COMPUTER WINS! PAPER BEATS ROCK";
                    computerscore++;   
                }
                else if(s2 === "PAPER" && s1 === "ROCK"){
                    roundwin.textContent = "YOU WIN! PAPER BEATS ROCK";
                    humanscore++;
                }
                else if(s2 === "SCISSORS" && s1 === "ROCK"){
                    roundwin.textContent = "COMPUTER WINS! ROCK BEATS SCISSORS";
                    computerscore++;
                }
                else if(s2 === "ROCK" && s1 === "SCISSORS"){
                    roundwin.textContent = "YOU WIN! ROCK BEATS SCISSORS";
                    humanscore++;
                }
                else if(s2 === "SCISSORS" && s1 === "PAPER"){
                    roundwin.textContent = "YOU WIN! SCISSORS BEATS PAPER";
                    humanscore++;
                }
                else if(s2 === "PAPER" && s1 === "SCISSORS"){
                    roundwin.textContent = "COMPUTER WINS! SCISSORS BEATS PAPER";
                    computerscore++;
                }
                else{
                    roundwin.textContent = "IT'S A TIE!";
                }
            }
        }

        if(computerscore + humanscore < 5){
            playRound(s2, s1);
            
            const container = document.querySelector("#container");
            const finalwin = document.querySelector("#finalwin");
            
            if(computerscore === 3){
                finalwin.textContent = "YOU LOST! BETTER LUCK NEXT TIME.";
                addPlayAgainButton();
            }
            else if(humanscore === 3){
                finalwin.textContent = "YOU WON! CONGRATULATIONS!";
                addPlayAgainButton();
            }

            document.querySelector("#score1").textContent ="YOUR SCORE:"+ humanscore;
            document.querySelector("#score").textContent = "COMPUTER'S SCORE:"+ computerscore;
        }
    }

    function addPlayAgainButton() {
        const container = document.querySelector("#container");
        if (!document.querySelector(".play-again")) {
            const playAgainBtn = document.createElement("button");
            playAgainBtn.textContent = "PLAY AGAIN!";
            playAgainBtn.className = "play-again";  
            playAgainBtn.addEventListener("click", () => {
                window.location.reload();
            });
            container.appendChild(playAgainBtn);
        }
    }
};