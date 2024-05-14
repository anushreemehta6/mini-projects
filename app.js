let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-but");
let newgamebtn= document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true; //playerx, playero

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turno) {
      box.innerText = "o";
      turno = false;
      // box.disable = true;
    } else {
      box.innerText = "x";
      turno = true;
      // box.disable = true;
    }
    box.disabled = true;
    checkwinnner();
  });
});
const resetgame=()=>{
  turno=true;
  enableBoxes()
  msgContainer.classList.add("hide")
}
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText=""
  
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};


const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const checkwinnner = () => {
  for (let pattern of winPattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner",pos1val);
        showWinner (pos1val);
      }
    }
  }
};

 
newgamebtn.addEventListener("click", resetgame);