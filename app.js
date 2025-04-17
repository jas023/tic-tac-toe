let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

// ✅ Function to reset the game
const resetGame = () => {
  turnO = true;
  enableBoxes(); // FIXED: spelling + called properly
  msgContainer.classList.add("hide");
};

// ✅ Box click logic
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
    } else {
      box.innerText = "X";
    }
    box.disabled = true;
    turnO = !turnO;

    checkWinner();
  });
});

// ✅ Disable all boxes
const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

// ✅ Enable all boxes and clear text
const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

// ✅ Show winner message
const showWinner = (winner) => {
  msg.innerText = `🎉 Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes(); // FIXED: function call
};

// ✅ Check for winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      console.log("WINNER", pos1);
      showWinner(pos1);
      return;
    }
  }
};

// ✅ Event listeners for reset buttons
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
