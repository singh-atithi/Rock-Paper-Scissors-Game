let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userChoicetxt = document.querySelector("#user-score");
const compChoicetxt = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ranIndex = Math.floor(Math.random() * 3);
  return options[ranIndex];
};
const msgcol1 = () => {
  msg.classList.replace("msg1", "msg2");
};
const msgcol2 = () => {
  msg.classList.replace("msg2", "msg1");
};
const drawGame = () => {
  msg.innerText = "The Match Is A Draw";
  msgcol1();
};

const playgame = (userChoice) => {
  //Generate computer Choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    msgcol2();
    msg.innerText = "Play Your Move";
    let userwin = true;
    if (userChoice === "rock") {
      //scissors,paper
      userwin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,scissors
      userwin = compChoice === "scissors" ? false : true;
    } else {
      //rock,paper
      userwin = compChoice === "rock" ? false : true;
    }
    if (userwin === false) {
      compScore++;
      compChoicetxt.innerText = compScore;
      msg.innerText = "Comp Wins";
    } else {
      userScore++;
      userChoicetxt.innerText = userScore;
      msg.innerText = "User Wins";
    }
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});
