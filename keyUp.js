import { keys } from "./keys.js";
export function keyUp() {
  window.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "d":
        keys.d.pressed = false;
        break;
      case "a":
        keys.a.pressed = false;
        break;
      case "w":
        keys.w.pressed = false;
        break;
      case "ArrowRight":
        keys.arrowRight.pressed = false;
        break;
      case "ArrowLeft":
        keys.arrowLeft.pressed = false;
        break;
      case "ArrowUp":
        keys.arrowUp.pressed = false;
        break;
      default:
        break;
    }
  });
}
