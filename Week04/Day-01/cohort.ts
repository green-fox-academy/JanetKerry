'use strict';

import { Student } from './02Student';
import { Mentor } from './mentor';

class Cohort {
    name: string;
    students: string[];
    mentors: string[];
    constructor (
        name: string, students: string[] = [], mentors: string[] = []) {
        this.name = name;
        this.students = students;
        this.mentors = mentors;
    }
    addStudent(name) {
        this.students.push(name);
    }
    addMentor(name) {
        this.mentors.push(name);
    }
    info() {
        console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
    }
}

export default { Cohort };











export { Cohort };