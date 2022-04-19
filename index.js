// document.getElementById("root").innerHTML=window.innerHeight;
import Sprite from "./Sprite.js";
import Fighter from "./Fighter.js";
import { keyUp } from "./keyUp.js";
import { keyDowns } from "./keyDown.js";
import { animate } from "./animate.js";
import { decrementTimer } from "./decrementTimer.js";
//  Fighter
export const player = new Fighter({
  position: {
    x: 0,
    y: 0,
  },
  velocity: { x: 0, y: 0 },
  color: "red",
  imageSrc:
    "./assets/img/samuraiMack-20220409T091824Z-001/samuraiMack/Idle.png",
  framesMax: 8,
  scale: { x: 2.3, y: 2.3 },
  offset: { x: 0, y: 133 },
  sprites: {
    idle: {
      imageSrc:
        "./assets/img/samuraiMack-20220409T091824Z-001/samuraiMack/Idle.png",
      framesMax: 8,
    },
    run: {
      imageSrc:
        "./assets/img/samuraiMack-20220409T091824Z-001/samuraiMack/Run.png",
      framesMax: 8,
    },
    jump: {
      imageSrc:
        "./assets/img/samuraiMack-20220409T091824Z-001/samuraiMack/Jump.png",
      framesMax: 2,
    },
    fall: {
      imageSrc:
        "./assets/img/samuraiMack-20220409T091824Z-001/samuraiMack/Fall.png",
      framesMax: 2,
    },
    attack_1: {
      imageSrc:
        "./assets/img/samuraiMack-20220409T091824Z-001/samuraiMack/Attack1.png",
      framesMax: 6,
    },
    takeHit: {
      imageSrc:
        "./assets/img/samuraiMack-20220409T091824Z-001/samuraiMack/Take hit.png",
      framesMax: 4,
    },
    death: {
      imageSrc: "./assets/img/samuraiMack-20220409T091824Z-001/samuraiMack/Death.png",
      framesMax: 6,
    },
  },
  attackBox: { offset: { x: -150, y: 0 }, width: 130, height: 50 },
});
// enemy
export const enemy = new Fighter({
  position: {
    x: 750,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: "blue",

  imageSrc: "./assets/img/kenji-20220409T091822Z-001/kenji/Idle.png",
  framesMax: 4,
  scale: { x: 2.3, y: 2.3 },
  offset: { x: 50, y: 147 },
  sprites: {
    idle: {
      imageSrc: "./assets/img/kenji-20220409T091822Z-001/kenji/Idle.png",
      framesMax: 4,
    },
    run: {
      imageSrc: "./assets/img/kenji-20220409T091822Z-001/kenji/Run.png",
      framesMax: 8,
    },
    jump: {
      imageSrc: "./assets/img/kenji-20220409T091822Z-001/kenji/Jump.png",
      framesMax: 2,
    },
    fall: {
      imageSrc: "./assets/img/kenji-20220409T091822Z-001/kenji/Fall.png",
      framesMax: 2,
    },
    attack_1: {
      imageSrc: "./assets/img/kenji-20220409T091822Z-001/kenji/Attack1.png",
      framesMax: 4,
    },
    takeHit: {
      imageSrc: "./assets/img/kenji-20220409T091822Z-001/kenji/Take hit.png",
      framesMax: 3,
    },
    death: {
      imageSrc: "./assets/img/kenji-20220409T091822Z-001/kenji/Death.png",
      framesMax: 7,
    },
  },
  attackBox: { offset: { x: 210, y: 0 }, width: 100, height: 50 },
});
// Sprite
export const background = new Sprite({
  position: { x: 0, y: 0 },
  imageSrc: "./assets/img/background.png",
  scale: { x: 1.075, y: 1.042 },
  framesMax: 1,
  offset: { x: 0, y: 0 },
});
export const shop = new Sprite({
  position: { x: 650, y: 180 },
  imageSrc: "./assets/img/shop.png",
  scale: { x: 2.5, y: 2.5 },
  framesMax: 6,
  offset: { x: 0, y: 0 },
});
animate();
keyDowns();
keyUp();
decrementTimer();
