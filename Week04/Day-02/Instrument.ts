"use strict";

export default abstract class Instrument {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }

  play() {}
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;

  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }

  sound() {}

  play() {
    console.log(
      `${this.name}, a ${
        this.numberOfStrings
      }-stringed instrument that goes ${this.sound()}`
    );
  }
}

export { Instrument };
export { StringedInstrument };
