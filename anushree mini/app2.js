const choices = document.querySelectorAll(".choice");
let set = document.querySelector(".new");
let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let disuser= document.querySelector("#user-score") 
let discomp= document.querySelector("#comp-score") 

const showWinner = (userWin) => {
  if (userWin) {
    console.log("you win");
    msg.innerText = "You WIN!!";
    msg.style.backgroundColor = "green";
    userScore++;
    disuser.innerText= userScore
  } else {
    console.log("you lose");
    msg.innerText = "You LOSE!!";
    msg.style.backgroundColor = "red";
    compScore++;
    discomp.innerText= compScore
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //draw game
    console.log("game was draw");
    msg.innerText = "DRAW!!";
    msg.style.backgroundColor = "white";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
