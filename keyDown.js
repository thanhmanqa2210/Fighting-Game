import { keys } from "./keys.js";
import { player, enemy } from "./index.js";
export function keyDowns() {
  window.addEventListener("keydown", (e) => {
    if (!player.dead) {
      switch (e.key) {
        case "d":
          keys.d.pressed = true;
          player.lastKey = "d";
          break;
        case "a":
          keys.a.pressed = true;
          player.lastKey = "a";
          break;
        case "w":
          keys.w.pressed = true;
          player.lastKey = "w";
          break;
        case " ":
          player.attack();
          break;
        default:
          break;
      }
    }
    if (!enemy.dead) {
      switch (e.key) {
        case "Control":
          enemy.attack();
          break;
        case "ArrowRight":
          keys.arrowRight.pressed = true;
          enemy.lastKey = "arrowRight";
          break;
        case "ArrowLeft":
          keys.arrowLeft.pressed = true;
          enemy.lastKey = "arrowLeft";
          break;
        case "ArrowUp":
          keys.arrowUp.pressed = true;
          enemy.lastKey = "arrowUp";
          break;
        default:
          break;
      }
    }
  });
}
