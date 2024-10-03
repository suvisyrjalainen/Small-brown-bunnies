
function preload() {
  backgroundImage = loadImage("landscape.jpg");
  bunny = loadImage("bunny.png");
}



function setup() {
    createCanvas(windowWidth, windowWidth / 3);
    bunny1 = new Bunny();
  }
  
function draw() {
    background("brown");
    image(backgroundImage, 0, 0, windowWidth, windowWidth / 3);
    bunny1.move();
}

class Bunny {
  constructor() {
    this.x = 0;
    this.y = 100;
    this.width = 50;
    this.height = 50;
    this.Xspeed = 2;
  }
  
  move() {
    this.x = this.x + this.Xspeed;
    image(bunny, this.x, this.y, this.width, this.height);
  }
}