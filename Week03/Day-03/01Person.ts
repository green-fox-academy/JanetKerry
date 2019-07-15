
export class Person {
    name: string;
    age: number;
    gender: string;

    constructor (name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    introduce() {
        console.log("Hi, I'm' + ${´name´}' + 'a' age +'year old + gender");
    }
    getGoal() {
        console.log('My goal is: Live for the moment!');
    }
}

export default Person;