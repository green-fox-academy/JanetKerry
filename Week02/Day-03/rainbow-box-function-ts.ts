'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

const canvasWidth = 600;
const canvasHeigth = 400;

function calcColor(min, max, val) {
    let minHue = 240, maxHue = 0;
    let curPercent = (val - min) / (max - min);
    let color = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ", 100%, 50%)";
    return color;
}

for (let i = 400; i > 0; i -= 1) {
    ctx.fillStyle = calcColor(240, 0, i);
    ctx.fillRect(canvasWidth / 2 - i / 2, canvasHeigth / 2 - i / 2, i, i);
}