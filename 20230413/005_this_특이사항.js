// 이름이 있는 함수 안에서 정의된 함수의 경우 this는 전역을 바라보게 됩니다.
// a함수는 object 안에 함수입니다.

const person = {
    name: 'hojun',
    age: 25,
    a() {
        console.log(this);
        console.log(this.name);
        function b() {
            console.log(this);
            console.log(this.name);
            function c() {
                console.log(this);
                console.log(this.name);
            }
            c()
        }
        b()
    }
}
person.a()

// person, 'hojun', window, '', window, ''
// 이름이 있는 함수 안에서 정의된 함수의 경우 this는 전역을 바라보게 됩니다.
// b, c 는 메서드가 아니다 -> 일반 함수로서의 호출로 봐도 될것 같다
// window 객체에는 기본적으로 name이 빈 문자열로 존재한다
// 일반 어쩌구

/////////


// a에서 this = person
// b에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
// c에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
const person = {
    name: 'hojun',
    age: 25,
    a() {
        console.log(this);
        console.log(this.name);
        let b = () => {
            console.log(this);
            console.log(this.name);
            let c = () => {
                console.log(this);
                console.log(this.name);
            }
            c()
        }
        b()
    }
}
person.a()
/* 화살표 함수에서 this 는 상위스코프의 this를 가져와서 쓰게 된다

왜냐하면 화살표 함수에는 this 가 존재하지 않기 때문입니다. */
/* 스코프체이닝

JavaScript에서는 어떤 식별자(변수)를 찾을 때, 현재 환경에서 그 변수가 없으면 바로 상위 환경을 검색합니다. 그렇게 점점 상위 환경으로 타고 타고 올라가다가 변수를 찾거나 가장 상위 환경에 도달하면 그만두게 되는 것입니다.  */

// person person person


///////////
let a = () => {
    console.log(this);
    console.log(this.name);
    let b = () => {
        console.log(this);
        console.log(this.name);
        let c = () => {
            console.log(this);
            console.log(this.name);
        }
        c()
    }
    b()
}
a()

// window '' window '' window '' 

/////
// 메서드 콜백함수에서 this로 사용할 값을 제공할 수도 있다.
[1, 2, 3].forEach(function () { console.log(this) }) // window
[1, 2, 3].forEach(function () { console.log(this) }, [10, 20, 30])
// [10,20,30] [10,20,30] [10,20,30]
[1, 2, 3].forEach(function () { console.log(this) }, [])
// [] [] [] 
// this에 배열을 넣어줌

// forEach, map, filter는 this로 사용할 인자를 지정할 수 있다.

/////
let 인세규정 = {
    책: 10,
    영상콘텐츠: 50
}

function 인세계산함수책(e) {
    return e * (this.책 / 100)
}

function 인세계산함수영상(e) {
    return e * (this.영상콘텐츠 / 100)
}

// 이거도 thisArg를 인세규정으로 지정해줘서 this가 인세규정이 된 케이스
[100, 200, 300].map(인세계산함수책, 인세규정) // [10 20 30]
[100, 200, 300].map(인세계산함수영상, 인세규정) // [50 100 150]
// 이럴거 같아요

[100, 200, 300].forEach(function (v) {
    console.log(v)
    console.log(this)
})

// window window window


///
// 1. 전역공간의 this는 window(node는 global) → 실제로는 window.globalThis, window.this 아닙니다. [자바스크립트에서 `globalThis`의 소름끼치는 폴리필](https://ui.toast.com/weekly-pick/ko_20190503)
// 2. 메서드로 호출한 경우 this는 멤버접근연산자 앞에 객체
// 3. 함수로 호출할 경우 this는 window(node는 global)
// 4. 화살표 함수의 경우 this는 상위스코프
// 5. 생성자 함수의 경우 this는 인스턴스
// 6. 콜백함수의 경우 this가 다르게 동작 할 수 있음