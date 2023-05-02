let answer = ~~(Math.random()*100);
let count = 0;
for(;;){
    let userInput = parseInt(window.prompt('입력해주세요'));
    count++;
    if (answer > userInput){
        window.alert('UP!');
    }
    else if (answer < userInput){
        window.alert('DOWN!');
    }
    else if(Number.isNaN(userInput)){
        window.alert('다시 입력하세요')
    }
    else{
        window.alert('correct');
        break
    }

}

console.log(`${count}번째에 맞추셨습니다`)