import { player, enemy } from "./index.js";
import {timerID } from "./decrementTimer.js";
function determineWinner() {
  clearTimeout(timerID);
  document.querySelector("#display_tie").style.display = "flex";
  if (player.health.player === 100 - enemy.health.enemy) {
    setTimeout(() => {
      document.querySelector("#display_tie").innerHTML = "Tie";
    }, 1500);
  } else if (player.health.player >= 100 - enemy.health.enemy) {
    setTimeout(() => {
      document.querySelector("#display_tie").innerHTML = "Red win!!!";
      document.querySelector("#display_tie").style.color = "red";
    }, 1500);
  } else {
    setTimeout(() => {
      document.querySelector("#display_tie").innerHTML = "Blue win!!!";
      document.querySelector("#display_tie").style.color = "blue";
    }, 1500);
  }
}
export { determineWinner };
