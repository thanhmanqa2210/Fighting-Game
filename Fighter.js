import { enemy } from "./index.js";
import Sprite from "./Sprite.js";
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 1100;
canvas.height = 600;
const gravity = 0.2;
c.fillRect(0, 0, canvas.width, canvas.height);
class Fighter extends Sprite {
  constructor({
    position,
    velocity,
    color,
    offset = { x: 0, y: 0 },
    imageSrc,
    scale,
    framesMax,
    sprites,
    attackBox = { offset: {}, width: undefined, height: undefined },
  }) {
    super({
      position,
      imageSrc,
      scale,
      offset,
      framesMax,
    });
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 10;
    this.velocity = velocity;
    this.width = 50;
    this.height = 150;
    this.lastKey;
    this.attackBox = {
      position: {},
      width: attackBox.width,
      height: attackBox.height,
      offset: attackBox.offset,
    };
    this.color = color;
    this.isAttacking;
    this.health = {
      player: 100,
      enemy: 0,
    };
    this.sprites = sprites;
    this.dead = false;
    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
  }
  update() {
    this.draw();
    if (!this.dead) this.animeFrames();
    // attack boxes
    this.attackBox.position.x = this.position.x - this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y - this.attackBox.offset.y;
    // c.fillRect(
    //   this.attackBox.position.x,
    //   this.attackBox.position.y,
    //   this.attackBox.width,
    //   this.attackBox.height
    // );
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y >= canvas.height - 97) {
      this.velocity.y = 0;
      this.position.y = 353;
    } else {
      this.velocity.y += gravity;
    }
  }
  //   attack
  attack() {
    this.switchSprites("attack_1");
    this.isAttacking = true;
    setTimeout(() => {
      this.isAttacking = false;
    }, 1000);
  }
  // take Hit
  takeHit() {
    if (this.health.enemy >= 95 || this.health.player <= 4) {
      this.switchSprites("death");
    } else {
      this.switchSprites("takeHit");
    }
  }
  switchSprites(sprite) {
    if (this.image === this.sprites.death.image) {
      if (this.framesCurrent === this.sprites.death.framesMax - 1)
        this.dead = true;
      return;
    }
    // overriding all other animations with the attack animations
    if (
      this.image === this.sprites.attack_1.image &&
      this.framesCurrent < this.sprites.attack_1.framesMax - 1
    )
      return;
    // override when fighter gets hit
    if (
      this.image === this.sprites.takeHit.image &&
      this.framesCurrent < this.sprites.takeHit.framesMax - 1
    )
      return;
    switch (sprite) {
      case "idle":
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image;
          this.framesMax = this.sprites.idle.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "run":
        if (this.image !== this.sprites.run.image) {
          this.image = this.sprites.run.image;
          this.framesMax = this.sprites.run.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "jump":
        if (this.image !== this.sprites.jump.image) {
          this.image = this.sprites.jump.image;
          this.framesMax = this.sprites.jump.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "fall":
        if (this.image !== this.sprites.fall.image) {
          this.image = this.sprites.fall.image;
          this.framesMax = this.sprites.fall.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "attack_1":
        if (this.image !== this.sprites.attack_1.image) {
          this.image = this.sprites.attack_1.image;
          this.framesMax = this.sprites.attack_1.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "takeHit":
        if (this.image !== this.sprites.takeHit.image) {
          this.image = this.sprites.takeHit.image;
          this.framesMax = this.sprites.takeHit.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case "death":
        if (this.image !== this.sprites.death.image) {
          this.image = this.sprites.death.image;
          this.framesMax = this.sprites.death.framesMax;
          this.framesCurrent = 0;
        }
        break;
    }
  }
}

export default Fighter;
