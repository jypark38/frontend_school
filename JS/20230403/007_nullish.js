let firstName = null;
let lastName = null;
let nickName = 'licat';

console.log(firstName ?? nickName);
console.log(firstName ?? lastName ?? nickName);
console.log(firstName ?? lastName ?? '익명사용자');

let a = null;
let b = 10;
let c = null;

console.log(a ?? b ?? c);

// 단락 회로 평가와 차이점

let height = 0;
console.log(height || 100);
console.log(height ?? 100);

let height2;
console.log(height2 || 100);
console.log(height2 ?? 100);

let height3 = '';
console.log(height3 || 'hello');
console.log(height3 ?? 'world');

// 제가 지금 주석으로 다는 내용은 지금 여기서는 모르셔도 괜찮습니다.
// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined