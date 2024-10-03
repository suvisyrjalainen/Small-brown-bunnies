let bunnyList = [];

function preload() {
  backgroundImage = loadImage("landscape.jpg");
  bunny = loadImage("bunny.png");
}



function setup() {
    createCanvas(windowWidth, windowWidth / 3);
    bunny1 = new Bunny();
    bunny2 = new Bunny();
    createBunnies();
  }
  
function draw() {
    background("brown");
    image(backgroundImage, 0, 0, windowWidth, windowWidth / 3);
    bunny1.move();
    bunny2.move();
}


function createBunnies() {
  bunnyObject = new Bunny();
  bunnyList.unshift(bunnyObject);
  console.log(bunnyList);
  setTimeout(createBunnies, 2000);
}


class Bunny {
  constructor() {
    this.x = 0;
    this.y = 100;
    this.width = 50;
    this.height = 50;
    this.Xspeed = random(1,4);
  }
  
  move() {
    this.x = this.x + this.Xspeed;
    image(bunny, this.x, this.y, this.width, this.height);
  }
}