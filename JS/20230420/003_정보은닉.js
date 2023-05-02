function PersonGenerator(){
    let age =  25;

    //생성자 함수
    function InnerPersonType () { };

    InnerPersonType.prototype.getAge = function () {
        return age;
    }

    return InnerPersonType;
}

const Person = PersonGenerator();
const myperson = new Person();

////// 즉시실행함수로 바로 실행시킬 수 잇다

const PersonGenerator2 = (function () {
    let age =  25;
    function InnerPersonType () { };

    InnerPersonType.prototype.getAge = function () {
        return age;
    }

    InnerPersonType.prototype.upAge = function (){
        age++;
    }

    return InnerPersonType;
})();

const myPerson2 = new PersonGenerator2();

Array.prototype.ma