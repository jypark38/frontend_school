
// 함수의 일반적인 형태
function one(a,b){
    let z = a+b;
    return z ** 2;
}

console.log(one(7,3));
console.log(one(7,3));

//화살표 함수
const two = (a,b) => (a+b) ** 2;
console.log(two(7,3));

// 이름 없이 선언하는 함수

const three = function (a,b){
    let z = a+b;
    return z ** 2;
}

console.log(three(7,3));

// 콜백함수
function four(a,b,c){
    let z = c(a,b) + c(a,b);
    return z * 2;
}

console.log(four(7,3,one));

// 아래와 같이 했을 경우에는 함수의 순수성, 순수함수의 장점을 살릴 수 없습니다.
// 외부에서 직접 값을 가져오는 것을 지양해주세요.
// + 동기 비동기 처리에서도 언급되는듯?
function four(a, b, c) {
    let z = one(a, b) + one(a, b)
    return z * 2
}

four(7, 3, one)


let x = console.log('hello');
x // undefined

// 함수, 메서드 (클래스 안에 들어간 함수)
// .을 찍어 접근할 수 있는 함수? => 메서드
// 함수를 호출할 수 있는 이름은 변수
let xx = console.log
xx('hello')

// 2번

function hello1(){
    console.log('hello');
}
function hello2(){
    console.log('hello');
    return 
}
function hello3(){
    console.log('hello');
    return undefined
}

let a = hello1()
let b = hello2()
let c = hello3()


function hello4(){
    console.log('hello');
    console.log('hello');
    console.log('hello');
    return
    console.log('hello');
    console.log('hello');
    console.log('hello');
}

function hello5(){
    if (true){
        if(true){
            if(true){
                return
            }
        }
    }
    console.log('hello');
}

let xxx = [10,20,30,40];

xxx.forEach(el => {
    console.log(el);
    return 
    console.log('world');
});
// 이 경우 순회마다 조기종료를 하는거임



//////////////////////////

function 함수1(a, b, c){
    return a + b + c
}

함수1(10,20,30,40);
// error가 발생하지 않는다

함수1(10,20);
// error가 발생하지 않는다

function 함수1(a=10, b=20, c=30){
    return a+b+c;
}

함수1(1,1) // 32

함수1(a=1,c=1); // a랑 b에 들어간다 32

// 아래와 같은 식별 이슈가 있을 경우 object로 넘긴다 roro 기법
function runPython(user, time, code, lv){

}
runPython('leehojun', 100, 'function...', 3);

function runPython({user, time, code, lv}){

}

runPython({
    user : 'leehojun',
    time : 100,
    code : 'function...',
    lv : 3
})

//기본값 설정
function runPython({
    user='', 
    time=0, 
    code='', 
    lv=0}){
}



// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics

function 함수1(x, y) {
    return x + y
}
// 위 함수를 화살표 함수로 작성하면 아래와 같습니다.
let 함수1 = (x, y) => x + y

// 만악 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있습니다.
let 함수2 = x => x + 10

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략해도 됩니다.
let 함수3 = x => x + 10

let 결과 = 함수3(2);

console.log(결과);

//즉시 실행 함수
(function() {
    console.log('이 함수는 만들어지자마자 바로 실행됩니다!');
})();