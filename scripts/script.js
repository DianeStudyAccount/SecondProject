const board = document.querySelector(".square-body");
const resetBtn = document.querySelector(".btn-reset");
const blocks = document.querySelectorAll(".block");

board.addEventListener("click", (e) => {
  const arrow = e.target.closest(".arrow");
  const currentBlock = arrow.closest(".block");
  const blocksArray = [...document.querySelectorAll(".block")];
  const currentIndex = blocksArray.indexOf(currentBlock);
  let targetIndex;

  if (!arrow) return;

  if (arrow.classList.contains("left") && currentIndex > 0) {
    targetIndex = currentIndex - 1;
  } else if (arrow.classList.contains("right") && currentIndex < 24) {
    targetIndex = currentIndex + 1;
  } else if (arrow.classList.contains("top") && currentIndex >= 5) {
    targetIndex = currentIndex - 5;
  } else if (arrow.classList.contains("bottom") && currentIndex <= 19) {
    targetIndex = currentIndex + 5;
  }

  if (targetIndex !== null) {
    const targetBlock = blocks[targetIndex];

    const currentNumDiv = currentBlock.querySelector(".block-number");
    const targetNumDiv = targetBlock.querySelector(".block-number");

    [currentNumDiv.textContent, targetNumDiv.textContent] = [targetNumDiv.textContent, currentNumDiv.textContent];
  }
});

resetBtn.addEventListener("click", () => {
  blocks.forEach((block, index) => {
    block.querySelector(".block-number").textContent = index + 1;
  });
});
