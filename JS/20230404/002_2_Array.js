const arr = [1,2,3,4,5,6,7,8,9,10];

arr.filter(function(el){
    return el % 2===0;
})


function solution(n){
    return Array(n).fill().map((_,i)=>i+1).filter((v) => v%2===0).reduce((a,c)=>a+c,0);
}

const arr_2 = [1,2,3,4,5,6,7,8,9,10];
arr_2.filter(function(el) {
    return el % 2 !== 0
})


// 모음제거
Array.from('hello world').filter(v => !['a','e','i','o','u'].includes(v))

// reduce
const arr1 = [1,2,3,4,5];
arr1.reduce((a,c) => a+c, 0)

const arr1_2 = [];
arr1_2.reduce((a,c)=>a+c);

const arr1_3 = [1];
arr1_3.reduce((a,c)=>a+c);

//0을 항상 넣어야한다
const arr1_4 = [];
arr1_4.reduce((a,c)=>a+c,0);

// reduce((accumulator,currentValue) => accumulator+currentValue , initialAccumulatorValue)


// includes
const arr2 = ['hello','world','jyp'];
arr2.includes('world') // true

arr2.includes('jaeyung') // false

arr2.includes('p') // false


// join
str = arr2.join('!');
console.log(str);

const arr3 = ['010','7167','2798'];
console.log(arr3.join('-')); 

const arr3_2 = [010, 5044, 2903] // 이진법으로 인식해버림
arr3.join('-') // 이렇게 하시면 안됩니다.

// 0b100  binary
// 0o100  octa
// 0x100  hex

