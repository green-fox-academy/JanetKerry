"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE
//
// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

//ctx.fillStyle = '#ff0000';

export = {};
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(500, 200);
ctx.stroke();

// draw a green vertical line to the canvas' middle.

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(300, 100);
ctx.lineTo(300, 300);
ctx.stroke();
