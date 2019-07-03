'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.




/*let Books = ("1 2 3 4");
for (let i = 0; i < Books.length; i++) {
    console.log("Your first book" + i);
}
console.log("all numbers now looped")


let Books = ("1 2 3 4");
for (let i = 0; i += Books.length; i++) {
    console.log("Your first book" + i);
}
console.log("all numbers now looped")
export = {}; */

export = {}
function drawLineToCenter(x, y) {
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
}

drawLineToCenter(0, 0);
drawLineToCenter(50, 0);
drawLineToCenter(0, 50);
drawLineToCenter(100, 400);
drawLineToCenter(600, 400);