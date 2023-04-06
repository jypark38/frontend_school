// 1
const q1 = [10,20,30,10,20,30,40,10]

const avg = q1.reduce((acc,cur)=>acc+cur,0) / q1.length

const avg2 = q1.reduce((acc,cur)=>acc+cur**2,0) / q1.length;

const variance = avg2 - avg**2

console.log(avg)
console.log(variance)

// 2

const q2 = '5,4,10,2,5'

const avg_2 = q2.split(',')
            .reduce( (acc,cur) => acc+parseInt(cur),0 ) / q2.split(',').length;

console.log(avg_2);


// 3

const q3 = [11, 22, 33, 111, 2]

const answer = q3.map(i=>(i+'').split(''))
                .flat(Infinity)
                .reduce((acc,cur)=>acc+parseInt(cur),0)

console.log(answer)

//4
// 01234567
// 10000000 -> 10,000,000 
const q4 = '10000'
let answer4_1 = ''

for (let i = q4.length-1 ; i >= 0; i--) {
    
    answer4_1 = q4[i] + answer4_1;

    if ((q4.length - i)%3 === 0 &&  i !== 0) {
        answer4_1 = ',' + answer4_1;
    }
}

let answer4_2 = ''

for (const c of answer4_1) {
    if (c !== ','){
        answer4_2 += c;
    }
}
console.log(answer4_1)
console.log(answer4_2)

// 5

let q5 = []

while(1){
    let number = parseInt(Math.random()*45 + 1);
    if (q5.indexOf(number) === -1){
        q5.push(number);
    }
    if(q5.length === 6){
        break;
    }
}

q5.sort((a,b)=>(a-b))

console.log(q5);