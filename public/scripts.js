let bunnyList = [];

function preload() {
  backgroundImage = loadImage("landscape.jpg");
  bunny = loadImage("bunny.png");
}



function setup() {
    createCanvas(windowWidth, windowWidth / 3);
    createBunnies();
    
  }
  
function draw() {
    background("brown");
    image(backgroundImage, 0, 0, windowWidth, windowWidth / 3);
    createPaddle();

    bunnyList.forEach(function(bunnyObject, index) {
      bunnyObject.move();

      if (bunnyObject.x > windowWidth) {
        bunnyList.splice(index, 1);
      }

    });
}

function createPaddle() {
  rect(30, windowWidth / 3 - 50, windowWidth/20, windowWidth/40);
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