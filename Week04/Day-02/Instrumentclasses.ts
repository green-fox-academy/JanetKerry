"use strict";

import { Instrument } from "./Instrument";
import { StringedInstrument } from "./Instrument";

class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 6, name: string = "Electric Guitar") {
    super(name, numberOfStrings);
  }

  sound(): string {
    return "Twang";
  }
}

class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 4, name: string = "Bass Guitar") {
    super(name, numberOfStrings);
  }

  sound(): string {
    return "Duum-duum-duum";
  }
}

class Violin extends StringedInstrument {
  constructor(numberOfStrings: number = 4, name: string = "Violin") {
    super(name, numberOfStrings);
  }

  sound(): string {
    return "Screech";
  }
}

let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log("Test 1 Play");
guitar.play();
bassGuitar.play();
violin.play();

console.log(
  "Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings ."
);
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log("Test 2 Play");
guitar2.play();
bassGuitar2.play();
