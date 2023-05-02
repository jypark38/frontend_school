// 문제 1
// 수학 점수의 평균
let arr = [10,99,89,70,55,40];
// step1
(arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5])/arr.length;

// step2
let avg = 0;
for(let i =0; i<arr.length;i++){
    avg+=arr[i];
}
avg = avg/arr.length;

// 문제 2

// 유저의 나이 평균을 구하세요

let user = [
    {
        "_id": "642e3071c61a23c70ae6076b",
        "index": 0,
        "age": 31,
        "name": "Hicks Garza",
        "gender": "male",
    },
    {
        "_id": "642e3071ecd6f90a87d64731",
        "index": 1,
        "age": 32,
        "name": "Ayers Harrington",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        "age": 39,
        "name": "Lamb Adams",
        "gender": "male",
    }
]

let avg2 = 0
for (e of user){
    if (typeof(e['age']) === 'number'){
        avg2 += e['age']
    }
}

console.log(avg2/user.length)


console.log(user
    .map(v=>v.age)
    .filter(v => !!v)
    .reduce((a,b) => a+b,0) / user.length)