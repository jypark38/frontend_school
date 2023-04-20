// function Person (name,address,phoneNum){
//     this.name = name;
//     this.address = address;
//     this.phoneNum = phoneNum;
// }

// Person.prototype.canWalk = function(){
//     console.log(`${this.name.valueOf()}이(가) 걷는다.`);
// }
// Person.prototype.teaching = function(student){
//     student.levelUp();
// }

class Person {
    constructor(name,address,phoneNum){
        this.name = name;
        this.address = address;
        this.phoneNum = phoneNum;
    }

    canWalk () {
        console.log(`${this.name.valueOf()}이(가) 걷는다.`);
    }

    teaching (student) {
        student.levelUp();
    }
}

// function Student (level){
//     this.level = level;
// }

// Student.prototype.levelUp = function(){
//     this.level.valueOf()++;
// }

class Student {
    constructor (level) {
        this.level = level
    }

    levelUp () {
        this.level++;
    }
}

const me = new Person('한재현','제주도 제주시 인다 1길','010-8000-0000')
const student = new Student(1);

me.canWalk();

student.levelUp()
student.levelUp()
student.levelUp()
console.log(student.level);