import { determineWinner } from "./determineWinner.js";
export let timer = 60;
export let timerID;
function decrementTimer() {
  if (timer > 0) {
     timerID = setTimeout(decrementTimer, 1000);
    timer--;
    document.querySelector("#timer").innerHTML = timer + "s";
  } else {
    document.querySelector("#timer").innerHTML = "Timeout";
    determineWinner();
  }
}
export { decrementTimer };
