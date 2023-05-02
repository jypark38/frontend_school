const value = 'one';
// const value = 'two';
// const value = 'three';



switch (value){
    case 'one':
        console.log('hello one');
        break;
    case 'two':
        console.log('hello two');
        break;
    case 'three':
        console.log('hello three');
        break;
    default:
        console.log('hello default');
        break;                        
}

// 여러줄 복사하고 싶을 때에 
// window : Alt + Shift + 위아래
// mac : option키와 shift키 누르고 방향키

// 같은 단어 찾고 싶을 때 
// window : Ctrl + D
// mac : cmd + D

// 같은 모든 단어 
// window : Ctrl + Shift + l 입니다.
// mac : cmd + Shift + l 입니다.

// 자동정렬
// window : Ctrl + a, Ctrl k + Ctrl + f(Ctrl누른 상태여야 합니다.)
// mac : cmd + a, cmd k + f

switch (new Date().getDay()) {
    case 0 :
        console.log('일')
        break;
    case 1 :
        console.log('월')
        break;
    case 2 :
        console.log('화')
        break;
    case 3 :
        console.log('수')
        break;
    case 4 :
        console.log('목')
        break;
    case 5 :
        console.log('금')
        break;
    case 6 :
        console.log('토')
        break;
    default :
        break;
}

// 다른 언어는 switch문 어떻게 쓸까

const 요일 = new Date().getDay()
const 요일객체 = {
    0: '일요일',
    1: '월요일',
    2: '화요일',
    3: '수요일',
    4: '목요일',
    5: '금요일',
    6: '토요일'
}

console.log(요일객체[요일])

// default는?

const 요일2 = 10
const 요일객체2 = {
    0: '일요일',
    1: '월요일',
    2: '화요일',
    3: '수요일',
    4: '목요일',
    5: '금요일',
    6: '토요일'
}

// nullish 연산자 사용
console.log(요일객체2[요일2] ?? 'hello');

// 단락평가 사용
console.log(요일객체2[요일2] || 'hello');

console.log(요일객체[10]);