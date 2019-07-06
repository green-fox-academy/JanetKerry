'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


function drawRectangle(color: string, x: number, y: number, a: number, b: number) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + a, y);
    ctx.lineTo(x + a, y + b);
    ctx.lineTo(x, y + b);
    ctx.closePath();
    ctx.stroke();
}

drawRectangle('purple', 50, 50, 35, 40);
drawRectangle('blue', 200, 300, 87, 98);
drawRectangle('red', 500, 100, 40, 40);
drawRectangle('yellow', 350, 200, 100, 40);