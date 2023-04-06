// let x = 0
// while (x < 10) {
//     console.log('start')
//     console.log(x)
//     x += 1
//     console.log('end')
// }


// let input;

// do {
//     input = confirm('다음에도 저희와 함께 하시겠습니까?')
// } while (!input);

// console.log("감사합니다.");

// 구구단

for(let i = 2 ; i<10 ; i++){
    for (let j = 0; j < 10 ; j++){
        console.log(`${i} X ${j} = ${i*j}`);
    }
}
let i = 2
let j = 1
while(i<10){
    if (j < 10){
        console.log(`${i} X ${j} = ${i*j}`);
        j++;
    }
    if (j == 10) {
        j = 1;
        i++;
    }
}

// 문자열 뒤집기

let s = 'hello world';
let result = '';
for (let i=0; i<s.length ; i++){
    result = s[i] + result;
}
console.log(result)

let result2 = '';
let cnt=0;
while (cnt < s.length){
    result2 = s[cnt] + result2;
    cnt+=1;
}
console.log(result2)

console.log(s.split('').reverse().join(''));


//팩토리얼

let result3 = 1;
for (let i = 1; i< 6 ; i++){
    result3 *= i;
}
console.log(result3)

let result3_2=1;
let cnt2 = 1;
while (cnt2 < 6){
    result3_2 *= cnt2;
    cnt2+=1;
}
console.log(result3_2);