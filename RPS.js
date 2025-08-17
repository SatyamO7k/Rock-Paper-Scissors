let userScore= 0;
let compScore= 0;
const msg=document.querySelector("#msg");
let choices = document.querySelectorAll(".choice");

const userScore1=document.querySelector("#user-score");
const compScore1=document.querySelector("#comp-score");
const drawGame= ()=>{
    msg.innerText="Game Was Draw. Play again !";
    msg.style.backgroundColor= "#000BFF";
};

const showWinner= (userWin, userChoice, compChoice)=>{
    if (userWin) {
        userScore++;
        userScore1.innerText=userScore;
        msg.innerText=`You win!🥳 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green ";
    } else{
        compScore++;
        compScore1.innerText=compScore;
        msg.innerText= `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red ";
    }
};

const genCompChoice = ()=>{
    const options=["Rock","Paper","Scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame= (userChoice)=>{
    const compChoice= genCompChoice();
    if (userChoice===compChoice) {
        drawGame();
    } else{
        let userWin= true;
        if (userChoice==="Rock") {
            userWin = compChoice=== "Paper" ? false:true;
        } else if (userChoice==="Paper") {
            userWin= compChoice==="Scissors" ? false:true;
        }else{
            userWin=compChoice==="Rock" ? false: true;
        } showWinner(userWin , userChoice, compChoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});

