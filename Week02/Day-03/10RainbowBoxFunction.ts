'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// and draws a square of that size and color to the center of the canvas.
function DrawSquare(squareSize: number, fillColor: string) {
    let topX = canvas.width / 2 - squareSize / 2;
    let topY = canvas.height / 2 - squareSize / 2;
    // The square size, and the fill color,
    ctx.fillStyle = fillColor;
    ctx.fillRect(topX, topY, squareSize, squareSize);
}

function ToColorComponent(color: number) {
    let value = Math.abs(color % 256).toString(16);

    if (value.length == 1) {
        value = '0' + value;
    }

    return value;
}

let step = 1;

console.log(step);

let red = 0;
let redStep = 1;
let green = 85;
let greenStep = 2;
let blue = 170;
let blueStep = 3
// Create a loop that fills the canvas with a rainbow of colored squares.
for (let i = canvas.width; i > 0; i -= step) {
    DrawSquare(i, "#" + ToColorComponent(red) + ToColorComponent(green) + ToColorComponent(blue));

    red += redStep;
    green += greenStep;
    blue += blueStep;
}