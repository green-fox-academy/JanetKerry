import { Person } from './01Person';

export class JaneDoe extends Person {
    constructor (
        name: string,
        age: number,
        gender: string
    ) {
        super(name, age, gender);
    }
    introduce(): void {
        console.log(`Hi, I'm  ${this.name}  a ${this.age} year old  ${this.gender}`);
    }
    getGoal(): void {
        console.log('My goal is: Live for the moment!');
    }
}

const ladyJaneDoe: Person = new Person('Jane Doe', 30, 'Female');
ladyJaneDoe.introduce();
ladyJaneDoe.getGoal();


export default JaneDoe;