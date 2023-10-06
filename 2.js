// 02.js

"use strict";

const colors = ["Red", "Orange", "Yellow", "Green", "Blue", 
"Purple"];
 
function circle(ctx, x, у, radius, fillCircle) {
 ctx.beginPath();
 ctx.arc (x, у, radius, 0, Math.PI * 2, false);
 if (fillCircle)
   ctx.fill(

   );
 else
   ctx.stroke();
};


function update( coordinate, width ) {
  const offset = Math.random( ) * 4 - 2;
  coordinate += offset;

   if (coordinate > width)
     coordinate = width;
   if (coordinate < 0) 
     coordinate = 0;

   return coordinate;
 };

 function getRandom (min, max){
  return Math.floor(Math.random()*(max - min + 1))+min;
 }



class Ball {
  constructor(ctx, width, height, color) {
    this.x = width/2;
    this.y = height/2;
    this.xSpeed = getRandom(-5, 5);
    this.ySpeed = getRandom(-5, 5);
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.color = getRandom(0, 6);
  }
  draw() {
    this.ctx.fillStyle = colors[this.color];
    circle(this.ctx, this.x, this.y, 6, true);
  }
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  checkCollision() {
    if (this.x < 0 || this.x > this.width) {
      this.xSpeed = -this.xSpeed;
    } 
    if (this.y < 0 || this.y > this.height)
      this.ySpeed = -this.ySpeed;
    } 
}

const ballsNum = 10;

function main() {
  // Retrieve <canvas> element
  
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext("2d") ;
    const height = canvas.height;
    const width = canvas.width;
    const arr = [];
    for (let i=0; i<ballsNum; i++){
      arr[i] = new Ball(ctx, width, height);
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      for (let i=0; i<ballsNum; i++){
        arr[i].draw();
        arr[i].move();
        arr[i].checkCollision(); 
      }
      requestAnimationFrame(animate);
  }

  animate();
}

main();