const arr=[10,20,30];
arr[0] = 100; // const 는 값의 변화가 안된다고 하지 않았나? => 배열 원소는 바꿀수 있다
console.log(arr)


arr = 100;
arr = [10,20,30]
//이건 안댄다

console.dir(arr); // 프로퍼티와 메서드를 볼 수 있다.

// arr.1 에러
// 숫자로 들어간 값은 대괄호로 호출할 수 있고
// length는 문자라서 문자로 입력된 값은 .을 찍어서 호출할 수 있다.
arr[1];
arr.length;
arr['length'];

arr.length = 10; // 배열 길이를 늘릴수 있다.

// 프로퍼티를 추가하는 것도 가능하다.

arr['leehojun'] = 100;
arr.hojun = 1000;

// 💡배열의 생성 방법
let arr1 = [];
let arr2 = [1, 2, 3];
let arr3 = new Array(4, 5, 6);
let arr4 = new Array(3);

console.log(arr1); // []
console.log(arr2); // [ 1, 2, 3 ]
console.log(arr3); // [ 4, 5, 6 ]
console.log(arr4); // [ <3 empty items> ]

// 💡배열의 특징
// [1] 배열은 순서가 있다. 배열의 순서를 index, 이 순서로  호출하는 것을 indexing이라고 한다.
//         배열 안의 값을 원소(elements)라고 한다.
const arr5 = [10, 20, 30];
arr5[0] = 100;

// [2] 배열에 다른 원시 타입과 객체 타입을 포함할 수 있다.
const arr6 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr6[1]); // [ 4, 5, 6 ]
console.log(arr6[1][2]); // 6


const a = 10 // 스칼라
const b = [10,20,30] // 벡터
const c = [[10,20,30],[10,20,30],[10,20,30]]; // 매트릭스
const d = [
            [[10,20,30],
            [10,20,30],
            [10,20,30]],
            [[10,20,30],
            [10,20,30],
            [10,20,30]]
            [[10,20,30],
            [10,20,30],
            [10,20,30]]
                        ]  // 텐서

// 💡 배열의 요소 추가
const arr7 = [1, 2, 3];
arr7.push(5);
console.log(arr7); // [ 1, 2, 3, 5 ]



// pop

const arrr = [1,2,3,4,5];
let lastValue = arrr.pop();


// shift
// 앞에서 값을 꺼내고
// 꺼낸 값을 반환한다
let myArray = ['사과','바나나','수박'];
myArray.shift();
console.log(myArray);

let firstValue = myArray.shift();
firstValue;

//문제
// pop shift unshift push에 대해 설명해주세요
// pop : 맨 뒤 인덱스의 값을 꺼내서 반환합니다
// shift : 맨 앞 인덱스의 값을 꺼내서 반환합니다.
// unshift : 배열의 앞쪽에 값을 추가합니다
// push : 배열의 뒤에 값을 추가합니다 

// splice
const arr8 = [1,2,3];
arr8.splice(1,0,4);
// 배열의 1번 인덱스에 아무것도 삭제하지 않고 4를 넣을거다

arr8.splice(1,0,[10,20,30])
// 배열의 1번 인덱스에 아무것도 삭제하지 않고 [10,20,30]를 넣을거다

arr8.splice(1,0,...[10,20,30])
arr8.splice(1,0,10,20,30)
// 배열의 1번 인덱스에 아무것도 삭제하지 않고 10,20,30를 넣을거다


const arr9=[10,20,30,40,50]
const x = [1,2,3]
arr9.splice(1,0,...x)
arr9.splice(7,0,...x);

const arr9_2 = [10,20,30,40,50];
arr9_2.splice(2,1,5); // arr에 2번째에 1개를 삭제하고 5를 넣는다
//splice는 삭제된 값을 반환해서 메서드 체이닝이 안된다.

arr9_2.splice(2,2); // 2번째 인덱스에서 값 2개를 삭제한다.
//삽입되는 값은 없다

arr9_2.splice(2); // 맨 앞 값 2개를 삭제한다.
//삽입되는 값은 없다


const arr10 = ['apple', 'banana', 'cherry', 'durian', 'elderberry'];
console.log(arr10.slice(1,4));
console.log(arr10);
console.log(arr10.slice(1));
console.log(arr10.slice(0,100));

const arr11 = [10, 20, 30, 40, 50]
// arr.forEach(함수)
// 함수(callbackfn): (value: number, index: number, array: number[]
arr11.forEach(function(item, index){
    console.log(index, item)
})

arr11.forEach(function(item,index,arr){
  console.log(index,item,arr);
  console.log('hello');
  console.log('world');
})


let arr11_1 = Array(100).fill(0);
let arr11_2 = []
let arr11_3 = []

// arr11_1.forEach(function(item,index){
//   arr11_2.push(index);
// })

arr11_1.forEach((item,index) => {
  arr11_2.push(index);
})

// 아래 네개는 같은코드

// arr11_1.forEach(function(item,index){
//   arr11_3.push(index+1);
// })

// arr11_1.forEach((item,index) => {
//   arr11_3.push(index+1);
// })

arr11_1.forEach((item,index) => arr11_3.push(index+1) )

function hojun(item,index){
  arr11_3.push(index+1)
}
arr11_3.forEach(hojun); // 권장하지 않는 방식

///////

const avengers = ['spiderman', 'ironman', 'hulk', 'thor'];

const newAvengers = [];
avengers.forEach(function (item) {
    newAvengers.push('💖' + item + '💖');
});

// Map (데이터를 뽑는 용도, 면접에서 많이 나온다)
// map은 forEach랑 다르게 새로운 배열을 생성한다.

// const arr = [1,2,3];
// arr.map(function(item,index){
// })

const arr12 = [1,2,3];
arr12.map(function(x){
  return x ** 2;
})

arr12.map(x => x**2);


const arr12_2 = Array(100).fill(0);
arr12_2.map((v,i)=>i);

arr12_2.map(function(v,i){
  return i;
})

function hojun(v,i){
  return i;
}
arr12_2.map(hojun);

arr12_2.map((v,i)=>{
  return i
});


// forEach는 순회하면서 할 행위를 지정하고
// map은 배열을 생성하여 반환하기 때문에, return에서 차이가 있다.

//실무팁
let tip1 = [1,2,3,4,5]

// 원본 수정 없이 [1,2,3,4] 값과 [5] 라는 값을 얻고 싶을 때
console.log([...tip1].pop());
let tip2 = [...tip1];
console.log(tip2.pop());
console.log(tip2)

let tip3 = [1,2,3,4,5]
let tip4 = [10,20,30,40,50]

console.log([...tip3,1000,...tip4]);

const tip5 = new Array(10).fill(0);
const tip5_2 = Array.from('hello world')
const tip5_3 = '.'.repeat(100).split('.')


const tip6 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// 다차원 배열에서 최소값 최대값 찾기
Math.max(...tip6.flat())

// 참고삼아서만 알아두세요

const tip7 = [
    [[1,2],[1,2],[1,2]],
    [[1,2],[1,2],[1,2]],
    [[1,2],[1,2],[1,2]]
]

console.log(tip7.flat(2))
console.log(tip7.flat(Infinity))

const tip8 = [1,2,3,4,5]

console.log([tip8.slice(0,2), 1000, tip8.slice(2,5)])
console.log([...tip8.slice(0,2), 1000, ...tip8.slice(2,5)])

let tip9 = [1, 2, 3, 4, 5]
tip9.splice(2, 0, 1000)
tip9

const tip10 = Array(100).fill(0).map((v,i) => i+1)

const tip11 = [
  {
    "_id": "642ba3980785cecff3f39a8d",
    "index": 0,
    "age": 28,
    "eyeColor": "green",
    "name": "Annette Middleton",
    "gender": "female",
    "company": "KINETICA"
  },
  {
    "_id": "642ba398d0fed6e17f2f50c9",
    "index": 1,
    "age": 37,
    "eyeColor": "green",
    "name": "Kidd Roman",
    "gender": "male",
    "company": "AUSTECH"
  },
  {
    "_id": "642ba39827d809511d00dd8d",
    "index": 2,
    "age": 39,
    "eyeColor": "brown",
    "name": "Best Ratliff",
    "gender": "male",
    "company": "PRISMATIC"
  }
];

const ages = tip11.map((v)=>v.age);
console.log(ages);