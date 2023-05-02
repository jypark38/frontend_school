// 전개구문

const 과일들 = ['사과', '파인애플', '수박'];
const 생선들 = ['조기', '갈치', '다금바리'];
const 합치면 = [...과일들, ...생선들];
const 합치면2 = [과일들, 생선들];

console.log(합치면);
console.log(합치면2); 

const 위니브1 = {개리:1 , 빙키: 2};
const 위니브2 = {라이캣:3};
const 위니브3 = {...위니브1 ,...위니브2};

console.log(위니브3);

const 위니브임직원 = {
    개리 : '재직중',
    빙키 : '재직중',
    라이캣 : '재직중',
    뮤라 : '재직중',
    해골왕 : '재직중'
}

const 위니브임직원2 = {
    ...위니브임직원,
    라이캣: '휴가',
    해골왕: '퇴사'
}

// 구조분해할당

for (const [i,j] of [[1,2],[3,4],[5,6]]){
    console.log(i,j);
}

for (const [i, j] of [[1, 2], [3, 4], [5, 6]]) {
    console.log(i, j);
}

const 위니브임직원3 = {
    개리: '재직중', 
    빙키: '재직중', 
    라이켓: '재직중',
    뮤라: '재직중',
    해골왕: '재직중'
};

for (const [i,j] of Object.entries(위니브임직원)){
    console.log(i, j);
}

const test1 = [
    [1, 2, [10, 20]],
    [3, 4, [30, 40]],
    [5, 6, [50, 60]]
]
for (const [i,j] of test1){
    console.log(i,j);
}
for (const [i,j,k] of test1){
    console.log(i,j,k);
}
for (const [i,j,[k,l]] of test1){
    console.log(i,j,k,l);
}

const test2 = [
    [1, 2, 10, 20],
    [3, 4, 30, 40],
    [5, 6, 50, 60]
]

for (const [i,j,k] of test2){
    console.log(i,j,k);
}

for (const [i,j,...k] of test2){
    console.log(i,j,k);
}