"use strict";

const toggle = document.querySelector("#start");
const reset = document.querySelector("#reset");
const img = document.querySelector("#naruto1");

const frame1 = "pngwing.com.png";
const frame2 = "pngwing.com copy 2.png";

let isPlaying = false;
let animationId = null;
let lastSwitchTime = 0;
let currentFrame = 1;

function animate(timestamp) {
  if (!isPlaying) return;

  if (timestamp - lastSwitchTime > 200) {
    currentFrame = currentFrame === 1 ? 2 : 1;
    img.src = currentFrame === 1 ? frame1 : frame2;
    lastSwitchTime = timestamp;
  }

  animationId = requestAnimationFrame(animate);
}

toggle.addEventListener("click", () => {
  isPlaying = !isPlaying;

  if (isPlaying) {
    toggle.textContent = "Pause";
    animationId = requestAnimationFrame(animate);
  } else {
    toggle.textContent = "Resume";
    cancelAnimationFrame(animationId);
  }
});

reset.addEventListener("click", () => {
  isPlaying = false;
  cancelAnimationFrame(animationId);
  img.src = frame1;
  currentFrame = 1;
  toggle.textContent = "Start";
});
