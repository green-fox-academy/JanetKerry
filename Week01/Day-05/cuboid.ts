'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let lengthCube: number = 5.3;
let widthCube: number = 10;
let heightCube: number = 2;


let cubeVolume: number = lengthCube * widthCube * heightCube;
let cubeSurface: number =
    lengthCube * widthCube * 2
    + widthCube * heightCube * 2
    + lengthCube * heightCube * 2;


console.log("Volume of the cube: " + cubeVolume);
console.log("Surface of the cube: " + cubeSurface);


