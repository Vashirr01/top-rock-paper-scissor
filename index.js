
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

const choices = document.querySelectorAll("#choices button")
const userResults = document.querySelector("#userpoints");
const computerResults = document.querySelector("#compoints");

console.log(choices);
choices.forEach(choice => {
    console.log(choice)
    choice.addEventListener("click", event => {
        gameRound(event.currentTarget.value, randomChoice)
    })
})


function gameRound(userChoice, randomChoice) {

    if(userpPoints === 3 || comPoints === 3) {
       document.querySelector("#results").insertAdjacentHTML("beforeBegin", `<h2>${ userpPoints > comPoints? "You Win" : "You Lose"}</h2>`)
    }
    const choice = userChoice.toLowerCase()
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
    
    document.querySelector("#userChoice").textContent = "You : "+choice
    document.querySelector("#computerChoice").textContent = "Computer : " +compChoice

    userResults.textContent = userpPoints;
    computerResults.textContent = comPoints;
}



