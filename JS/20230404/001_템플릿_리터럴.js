
const x = 10;
const y = 20;

console.log('x 는 10이고 y는 20이며 두수의 곱은 200입니다');
console.log('x 는',x,'이고 y는 ',y,'이며 두수의 곱은 ',x*y,' 입니다');
console.log(`x 는${x}이고 ${y}는 20이며 두수의 곱은 ${x*y}입니다`);

const result = x*y;

console.log(`x 는${x}이고 ${y}는 20이며 두수의 곱은 ${result}입니다`);

console.log(`h
e
l
l
o`);

const s = 'hello';
const ss = 'world';
const result2 = s + '\n' + ss;

console.log(result2);

// 단점을 '굳이' 뽑자면..
if (true) {
    if (true) {
        if (true) {
            console.log(`h
            e
            l
            l
            o
            `)
        }
    }
}

// 가독성이 떨어집니다.
if (true) {
    if (true) {
        if (true) {
            console.log(`h
e
l
l
o
`)
        }
    }
}