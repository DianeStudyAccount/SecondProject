const input = document.querySelector("input");
const p = document.querySelector("p");
let timerId;

input.addEventListener("input", () => {
  clearTimeout(timerId); //this cancellation is the essence of debouncing, without it it's a delay.

  timerId = setTimeout(() => {
    p.textContent = input.value;
  }, 300);
});
