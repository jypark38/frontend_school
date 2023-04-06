for(let i=0;i<10;i++){
    console.log(10);
}

let arr=[10,20,30,40,50]

for(let i=0; i<arr.length ; i++){
    console.log(arr[i]);
}

console.log('\n')

// airbnb 컨벤션에서 권장
// IE 에서도 사용 가능
for (const key in arr){
    console.log(arr[key]);
}

let obj = {'one':10,'two':20};

// key는 문자열로 반환됨
for (const key in obj) {
    console.log(obj[key]);
}

for (const i in '.'.repeat(10)) {
    console.log(i);
}

// airbnb 컨벤션에서 권장
// IE에서는 사용 불가
let arr2=[10,20,30,40,50]
let obj2 = {'one':10,'two':20};

for (const item of arr2) { // of 뒤에 iterable 객체가 와야한다
    console.log(item);
}

for (const item of 'hello world') { 
    console.log(item);
}


s = [1,3,4,8,13,17,20]

for (let i = 0; i < s.length-1; i++){
    console.log(s[i], s[i+1])
}

for (let i = 1; i < s.length; i++){
    console.log(s[i-1], s[i])
}


