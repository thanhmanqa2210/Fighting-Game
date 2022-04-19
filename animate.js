import { player, enemy, background, shop } from "./index.js";
import { keys } from "./keys.js";
import { timer } from "./decrementTimer.js";
import { determineWinner } from "./determineWinner.js";
import { rectangularCollision } from "./rectangularCollision.js";
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 1100;
canvas.height = 600;
function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  background.update();
  shop.update();
  c.fillStyle = "rgba(255, 255, 255, 0.1)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  enemy.update();
  //player movement
  if (keys.a.pressed && player.lastKey === "a") {
    player.velocity.x = -3;
    player.switchSprites("run");
  } else if (keys.d.pressed && player.lastKey === "d") {
    player.velocity.x = 3;
    player.switchSprites("run");
  } else if (keys.w.pressed && player.lastKey === "w") {
    if (player.position.y <= 90) {
      player.velocity.y = 0;
    } else {
      player.velocity.y = -7;
      player.switchSprites("jump");
    }
  } else {
    player.velocity.x = 0;
    player.switchSprites("idle");
  }
  //fall
  if (player.velocity.y > 0) {
    player.switchSprites("fall");
  }
  //enemy movement
  if (keys.arrowRight.pressed && enemy.lastKey === "arrowRight") {
    enemy.velocity.x = 3;
    enemy.switchSprites("run");
  } else if (keys.arrowLeft.pressed && enemy.lastKey === "arrowLeft") {
    enemy.switchSprites("run");
    enemy.velocity.x = -3;
  } else if (keys.arrowUp.pressed && enemy.lastKey === "arrowUp") {
    if (enemy.position.y <= 90) {
      enemy.velocity.y = 0;
    } else {
      enemy.velocity.y = -7;
      enemy.switchSprites("jump");
    }
  } else {
    enemy.velocity.x = 0;
    enemy.switchSprites("idle");
  }
  // fall
  if (enemy.velocity.y > 0) {
    enemy.switchSprites("fall");
  }
  //detect for collision & enemy gets hit
  // ----------------------
  // player
  if (
    rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
    player.isAttacking &&
    player.framesCurrent === 4
  ) {
    player.isAttacking = false;
    enemy.takeHit();
    if (!enemy.dead && timer !== 0) {
      enemy.health.enemy += 4;
    } else {
      enemy.health.enemy += 0;
    }
    gsap.to("#percent_enemy", {
      width: enemy.health.enemy + "%",
    });
  }
  // if player misses
  if (player.isAttacking && player.framesCurrent === 4) {
    player.isAttacking = false;
  }
  // ---------------------------
  // enemy
  if (
    rectangularCollision({ rectangle1: enemy, rectangle2: player }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 1
  ) {
    enemy.isAttacking = false;
    player.takeHit();
    if (!enemy.dead && timer !== 0) {
      player.health.player -= 4;
    } else {
      player.health.player += 0;
    }
    gsap.to("#percent_player", {
      width: player.health.player + "%",
    });
  }
  if (enemy.isAttacking && enemy.framesCurrent === 1) {
    enemy.isAttacking = false;
  }
  // end game based on health
  if (player.health.player <= 0 || enemy.health.enemy >= 100) {
    determineWinner();
  }
}
export { animate };
