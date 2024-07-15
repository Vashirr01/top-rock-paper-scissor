
function randomChoice() {

    const num = Math.floor(Math.random()*3);

    switch(num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";                
    }

}

let userpPoints = 0
let comPoints = 0
let roundsPlayed = 0

const userChoice = () => {
    const promptChoice = prompt("please enter your choice");
    return promptChoice 
}

function gameRound(userChoice, randomChoice) {

    const choice = userChoice().toLowerCase()
    const compChoice  = randomChoice()

    if(choice === compChoice) {
        console.log("same choice, no points incremented")
        roundsPlayed++
    }
    
    else if(choice=== "rock") {
        if(compChoice === "paper"){
        comPoints++
        }
        if(compChoice === "scissor"){
            comPoints++
            }
            roundsPlayed++
    }
    else if(choice=== "paper") {
        if(compChoice === "rock"){
        userpPoints++
        }
        if(compChoice === "scissor"){
            comPoints++
            }
            roundsPlayed++
    }
    else if(choice=== "scissor") {
        if(compChoice === "paper"){
        userpPoints++
        }
        if(compChoice === "rock"){
            comPoints++
        }
        roundsPlayed++  
    }
    else{
        console.log("please enter either rock, paper or scissor")
    }

    console.log(` ${choice}             ${compChoice}
        You: ${userpPoints}
        Computer: ${comPoints}`)
}

function fiveRounds() {
    if(roundsPlayed < 5) {
        gameRound(userChoice, randomChoice)
        fiveRounds()
    }
    if(comPoints === userpPoints){
        console.log("it's a tie")
    }
        console.log(userpPoints > comPoints ? "You Win" : "You lose")
    
}

fiveRounds()