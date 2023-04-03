
let n1 = 10000;
let n2 = 10.123123;
let n3 = 31;
let n4 = 1001;
let n5 = 1111;

let s1 = '1000000000000';
let s2 = '100,000,000,000';

console.log(parseInt(n1));
console.log(parseInt(n2));

console.log(~~n2);

console.log(parseInt(n3,2));
console.log(parseInt(n4,2));
console.log(parseInt(n4, 8)); // 8진법으로 된 숫자를 10진법으로 바꾸는 것입니다.
console.log(parseInt(n4, 10)); // 10진법으로 된 숫자를 10진법으로 바꾸는 것입니다.

console.log(n2.toFixed(3));

////////////////////

console.log(Number(true))  // 1
console.log(Number(false)) // 0

console.log(parseInt(true))  //NaN
console.log(parseInt(false)) //NaN

////////////////////

console.log(Number(" ")) // 0
console.log(Number(""))  // 0
console.log(Number("hello"))  // NaN
console.log(Number("10 20"))  // NaN
console.log(Number("10abc")) // NaN


console.log(parseInt(" ")) // NaN
console.log(parseInt(""))  // NaN
console.log(parseInt("hello"))  // NaN
console.log(parseInt("10 20"))  // 10
console.log(parseInt("10abc")) // 10


////////////////////

// console.log(Number(10 20))  error
console.log(Number("   10")) // 10
console.log(Number("10   ")) // 10
console.log(Number("   10   ")) // 10

console.log(parseInt("   10")) // 10
console.log(parseInt("10   ")) // 10
console.log(parseInt("   10   ")) // 10

////////////////////

// Math ****
Math.abs(-10);
Math.ceil(10.5); //올림
Math.floor(10.5); // 내림
Math.round(10.5); //반올림
Math.sqrt(100);  // root

Infinity;
-Infinity;

Math.PI
Math.min();
Math.max();

Math.min([1,2,3,4,5]) // 작동 안됨
Math.min(...[1,2,3,4,5]) // 전개구문

let values = [1,2,3,4,5];
Math.min(...values);


// math random 최솟값, 최댓값 지정
// 최솟값 이상 최댓값 미만
// (Math.random() * ( 최댓값 - 최솟값 )) + 최솟값

// 아래와 같이 있으나, 잘 사용되지 않는 메서드들이 있습니다.
Math.pow(2,3);

/////

// 부동 소수점
// 컴퓨터에서 10진수 연산은 정확하지 않다
// 결론은 컴퓨터에서 0.1은 무한수다
// 반복문 안에 0.1 씩 증가하는 코드를 혹시 작성하게 된다면, 예측 불가한 값이 생성된다는 것을 인지해야한다.

let w = 0.3;
let h = 0.6;
if (w+h >= 0.9){
    console.log('실행')
} 
// 의도한대로 안된다

// BigInt
// JS에서 큰 숫자를 사용할 때에는 BigInt를 사용합니다.
// BigInt를 여러분 회사에서 사용하지 않을 수도 있습니다.(추가된지 2년 되었습니다.)
// The proposal belongs to ECMAScript 2020, which is the 11th edition
// console.log(Number.MAX_SAFE_INTEGER)  // 2^53 - 1

// 서비스는 항상 최악의 상황, 악성 유저에 대비를 하셔야 합니다.
// 아래처럼 정상 작동이 되지 않는 경우들이 있습니다.
// 2**53 - 1
// 9007199254740991

// 9007199254740991 + 1
// 9007199254740992

// 9007199254740991 + 2
// 9007199254740992

// 9007199254740991 + 3
// 9007199254740994

// 9007199254740991 + 4
// 9007199254740996

// 제대로 나오게 하려면 n을 붙이세요!
// 9007199254740991n + 1n
// 9007199254740992n

// 9007199254740991n + 2n
// 9007199254740993n

// 9007199254740991n + 3n
// 9007199254740994n

// 9007199254740991n + 4n
// 9007199254740995n

// BigInt(9007199254740991) + BigInt(1)
// 9007199254740992n

// BigInt(9007199254740991) + BigInt(2)
// 9007199254740993n

// BigInt(9007199254740991) + BigInt(3)
// 9007199254740994n

// BigInt(9007199254740991) + BigInt(4)
// 9007199254740995n


///////
// 상식

let x = 10;
console.log(x.toString());


(10).toString();

