// 할당연산
let x = 10;
x = x+10;
x += 10;

// 단항연산
console.log(-(2));
console.log(-(-2));
console.log(+(-2));
console.log(+(+2));
console.log(-(+2));
console.log(+(+'2'));

// 증감연산
let num = 3;
++num;
--num;
num++;
num--;

// 실무에서 이걸 구분하는건 큰 의미가 없다
for (let i = 0 ; i<10; i++){
    console.log(i)
}
for (let i = 0 ; i<10; ++i){
    console.log(i)
}

// 단락회로평가 (***)
// true : 1
// false : 0
// and && : 곱
// or || : 합
// not ! : 부정

console.log(!'false'); // false
console.log(!"0");  // false

console.log(!false); // true
console.log(!0); // true

console.log('abc'/ 2); // NaN

console.log(!!NaN); //false
console.log(!!undefined); //false
console.log(!!null);  //false

let username = "";
username = username || '이름을 입력하지 않았습니다';
console.log(username);

let username2 = "박재영";
username = username || '이름을 입력하지 않았습니다';
console.log(username2);


// 3항 연산자
// 조건식 ? 참일 경우 실행되는 표현식 : 거짓일 경우 실행되는 표현식

// let sale = true;
// let price = sale ? 100 : 200;
// console.log(price);

const price = 9000;
const message = price>=5000 ? '비싸요' : '안비싸요';
console.log(message)

const message2 = price>=9000 ? '비싸다' :  ( price>=7000 ? '적절하다' : '안비싸요' ) ;
console.log(message2)


// 드모르간 법칙
// 드모르간 법칙을 이용하면 무조건 참이나 거짓이 되는 구간을 찾을 수 있고, 조건을 단순화 할 수 있다.

const a = 0;
const b = 1;

console.log(!(a||b) === !a ?? !b)
console.log(!(a&&b) === !a || !b)

// 햇갈리는 연산 모음