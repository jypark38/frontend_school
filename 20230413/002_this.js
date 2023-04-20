// this(***)

function a() { console.log(this) }
a(); // window를 호출
// 일반 함수의 this는 전역객체를 가리킨다
// 객체에서의 this는 자신을 호출한 객체를 가리킨다

function b() {
    console.log('hello world')
}
b()
window.b() // window를 호출
// 전역에서 정의한 함수는 window 객체에 메서드로 추가된다

let myObj = {
    val1: 100,
    func1: function () { 
        console.log(this);
        // this가 누구일까?
        // 찍어보면 됩니다. console.log
        // 1. func1
        // 2. myObj
        // 3. window
    }
}

myObj.func1(); // myObj를 호출
// 객체 내부의 메서드를 호출하면 this는 메서드가 속한 객체를 가리킨다 


/////////////////////

let myObj = {
    val1: 100,
    func1: (function () {
        console.log(this);
    })
}

let test = myObj.func1; 
test()

// 메서드가 얕은 복사가 되어서 test에 할당됐다
// test함수를 실행하면 일반 함수로서 실행이 된다
// this가 window를 가리키게 된다
// 일반 함수의 this는 전역객체를 가리킨다

////////////////////

// this가 어려운 이유는 this를 포함하고 있는 객체가 있는 위치에 따라 this의 의미가 달라지기 때문입니다.
// bind를 포함한 예외사항이 있습니다.

function sayName() {
    console.log(this)
}

var c = {
    'hello': 'world',
    'say': sayName
}

var b = { // var b = {c}
    'c': c
}

var a = { // var a = {b}
    'b': b
}

c.say() // c
b.c.say() // c 
a.b.c.say() // c
// 객체 내부의 메서드를 호출하면 this는 메서드가 속한 객체를 가리킨다 

// 문제를 조금 더 꼬아보겠습니다.
function sayName() {
    console.log(this)
}

var c = {
    'hello': 'world',
    'say': sayName // c
}

var b = { // var b = {c}
    'c': c,
    'say': sayName // b
}

var a = { // var a = {b}
    'b': b,
    'say': sayName // a
} 
a.say() // a
b.say() // b
c.say() // c
// 객체 내부의 메서드를 호출하면 this는 메서드가 속한 객체를 가리킨다 

/// 추가 예제 ///

var name = 'hojun'

function sayName() {
    console.log(this.name)
}

let peter = {
    name: 'Peter Parker',
    say: sayName
}

let bruce = {
    name: 'Bruce Wayne',
    say: sayName
}

peter.say() // Peter Parker
// peter.name
bruce.say() // Bruce Wayne
// 객체 어쩌구
// bruce.name
sayName() // hojun
// 일반 함수의 this는 전역객체를 가리킨다
// window.name

////

function attackBeam() { // 레이저 공격
    this.hp -= 20
}

let jombie = {
    name: 'jombie',
    damaged: attackBeam,
    hp: 10000,
    power: 2
}


let thanos = {
    name: 'thanos',
    damaged: attackBeam,
    hp: 1000,
    power: 100
}

// 객체 내부 어쩌구

jombie.damaged()
jombie
// hp : 9980

/////

function attackBeam() { // 레이저 공격
    this.hp -= 20
}

function attackKnife() { // 칼공격
    this.hp -= 5
}

let jombie = {
    name: 'jombie',
    damaged1: attackBeam,
    damaged2: attackKnife,
    hp: 10000,
    power: 2
}

let thanos = {
    name: 'thanos',
    damaged: attackBeam,
    hp: 1000,
    power: 100
}

jombie.damaged1() // Beam
jombie.damaged2() // Knife
jombie.hp
// 9975

/////

function attackBeam() { // 레이저 공격
    this.hp -= 20
    console.log(this)
}

function attackKnife() { // 칼공격
    this.hp -= 5
    console.log(this)
}

let jombie = {
    name: 'jombie',
    damaged: [attackBeam, attackKnife],
    hp: 10000,
    power: 2
}

let thanos = {
    name: 'thanos',
    damaged: attackBeam,
    hp: 1000,
    power: 100
}

jombie.damaged[0]() // Beam
jombie.damaged[1]() // Knife

// attackBeam, attackKnife가 속한 객체는 배열이라서
// this가 배열을 가리킨다
// 배열에 hp 프로퍼티가 추가되고 NaN이 된다 (undefined - 숫자)
// 배열도 object
// typeof [] : object

///////


let 호텔 = [{
    '이름': '하나호텔',
    '위치': '제주도 제주시 001',
    '가격': { 'A': 50000, 'B': 30000, 'C': 15000 },
    '방의개수': 50,
    '예약자수': 25,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '둘호텔',
    '위치': '제주도 제주시 002',
    '가격': { 'A': 100000, 'B': 60000, 'C': 30000 },
    '방의개수': 100,
    '예약자수': 30,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '셋호텔',
    '위치': '제주도 제주시 003',
    '가격': { 'A': 80000, 'B': 50000, 'C': 30000 },
    '방의개수': 120,
    '예약자수': 80,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수()); 
// 객체 안의 메서드~ this ~ 어쩌구
/////


// https://velog.io/@proshy/JS-%EC%83%81%ED%99%A9%EC%97%90-%EB%94%B0%EB%A5%B8-this-%EB%B0%94%EC%9D%B8%EB%94%A9
function sayName() {
    console.log(this)
}

var c = {
    'hello': 'world',
    'say': sayName
}

var b = {
    'c': c,
}

var a = {
    'b': b,
}

a.b.c.say()
// 일단 이거먼저
// 객체 안의 메서드~ this ~ 어쩌구

function a() {
    console.log(this)
    function b() {
        console.log(this)
        function c() {
            console.log(this)
        }
        c()
    }
    b()
}
a()
// a, b, c모두 window
// 위 함수는 a.b.c()이런 식으로 호출한 객체를 타고 올라가는 형태가 아닙니다.
// 셋 다 일반함수로서의 호출을 한다