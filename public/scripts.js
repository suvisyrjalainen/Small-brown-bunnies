let bunnyList = [];
let gravity = 0.05;
let paddleY;
let paddleWidth;
let paddleHeight;

let points = 0;
let lives = 3;

let bunnyTimer;

function preload() {
  backgroundImage = loadImage("landscape.jpg");
  bunny = loadImage("bunny.png");
}



function setup() {
    createCanvas(windowWidth, windowWidth / 3);
    createBunnies();
    paddleY = windowWidth / 3 - 80;
    paddleWidth = windowWidth/17;
    paddleHeight = windowWidth/40;
  }
  
function draw() {
    background("brown");
    image(backgroundImage, 0, 0, windowWidth, windowWidth / 3);
    createPaddle();
    
    textSize(32);
    fill("darkgreen");
    text("Points: " + points , 20, 50);
    text("Lives: " + lives , 20, 100);

    bunnyList.forEach(function(bunnyObject, index) {
      bunnyObject.move();

      if (bunnyObject.x > windowWidth) {
        points = points + 1;
        bunnyList.splice(index, 1);
      }

      if (bunnyObject.y > windowWidth / 3) {
        bunnyList.splice(index, 1);
        lives = lives - 1;
        if (lives === 0) {
          gameOver();
        }
        
      }

    });
}

function gameOver() {
  noLoop();
  background("#ffce99");
  textSize(64);
  textAlign(CENTER, CENTER);
  text("Game Over", windowWidth / 2, windowWidth / 6);
  clearTimeout(bunnyTimer);
}


function createPaddle() {
  fill("#ffce99");
  rect(mouseX, paddleY, paddleWidth, paddleHeight, 20, 20, 5, 5);
}


function createBunnies() {
  bunnyObject = new Bunny();
  bunnyList.unshift(bunnyObject);
  console.log(bunnyList);
  bunnyTimer = setTimeout(createBunnies, 4000);
}


class Bunny {
  constructor() {
    this.x = 0;
    this.y = windowWidth / 6;
    this.width = 50;
    this.height = 50;
    this.Xspeed = random(2,4);
    this.Yspeed = -5;
  }
  
  move() {
    this.Yspeed = this.Yspeed + gravity;

    if(this.y + this.height > paddleY && this.y < paddleY + paddleHeight && this.x + this.width > mouseX && this.x < mouseX + paddleWidth) {
        this.Yspeed = -abs(this.Yspeed); 
    }
    this.y = this.y + this.Yspeed;
    this.x = this.x + this.Xspeed;
    image(bunny, this.x, this.y, this.width, this.height);
  }
}