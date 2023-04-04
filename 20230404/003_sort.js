let avengers = ['아이언맨','스파이더맨','헐크','토르'];

console.log(avengers.sort())


//사전식 정렬이다
const nums =[3,1,8,6];
console.log(nums.sort());

const nums2 = [3,1,11,8,6];
console.log(nums2.sort());



// sort를 어느 알고리즘을 할거냐 는 브라우저의 자유

const nums3 = [3,1,11,8,6];

console.log(nums3.sort((a,b) => a-10*b)); // 오름차순
console.log(nums3.sort((a,b) => b-a)); // 내림차순

// 실무사용코드
function sort(key){
    if (click){
        click = false
        var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
    }
    else{
        click = true
        var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
    }
}

// 딥하게 sort를 탐색해 보겠다?
console.log(nums3.sort((a , b) => {
    console.log(a, 10*b);
    console.log(a-b);
}));

// https://www.notion.so/paullabworkspace/JavaScript-sort-compare-function-ff38f176e79e4c5d9ade9c4734620ffd

