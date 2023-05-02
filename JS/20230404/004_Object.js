const human = {
    name : 'jaeyung',
    age : 27,
    from : 'korea',
    askingHim : function(){
        console.log("hello world");
    },
    0: '100'
}

console.log(human.name)
console.log(human.age)
console.log(human['name'])
console.log(human['age'])

// 이 둘은 가능
//console.log(human.0) // 배열이 arr.1 이 안되는 이유다
console.log(human[0]);
console.log(human['0']);

const arr = {
    0:10,
    1:20,
    2:30,
    length : 3
};
// 배열처럼 작동하듯 보이는데 아니다
// 유사배열객체다.
// 똑같은 요소로 만들어도 arr가 순회할 때 더 빠르다

human.name = 'park'
human.askingHim()

// 다른 언어와 동작방식이 다름
console.log('age' in human);
// console.log(20 in [10,20,30,40]) false
// console.log('length' in [10,20,30,40]) true


const aespa = {
    members: ['카리나', '윈터', '지젤', '닝닝'],
    from: '광야',
    sing: function(){
        return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
    }
};

// 별표 (**)
console.log(aespa.hasOwnProperty('itzy'));
console.log(aespa.hasOwnProperty('sing'));

console.log(Object.keys(aespa)); // 불편한 코드
console.log(Object.values(aespa)); // 불편한 코드
