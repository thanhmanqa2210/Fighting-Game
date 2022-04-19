const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 1100;
canvas.height = 600;
c.fillRect(0, 0, canvas.width, canvas.height);
export default class Sprite {
  constructor({ position, imageSrc, scale, framesMax, offset }) {
    this.position = position;
    this.width = 50;
    this.height = 150;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
    this.framesMax = framesMax;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 10;
    this.offset = offset;
  }
  draw() {
    c.drawImage(
      this.image,
      this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.framesMax) * this.scale.x,
      this.image.height * this.scale.y
    );
  }
  animeFrames(){
     this.framesElapsed++;
     if (this.framesElapsed % this.framesHold === 0) {
       if (this.framesCurrent < this.framesMax - 1) {
         this.framesCurrent++;
       } else {
         this.framesCurrent = 0;
       }
       this.framesElapsed = 0;
     }
  }
  update() {
    this.draw();
   this.animeFrames();
  }
}
