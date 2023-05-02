function FoodPicker(food,...foods){
    if (Array.isArray(food)){
        this.foods = food
    }
    else {
        this.foods = [food,...foods];
    }
}

FoodPicker.prototype.printMenu = function(){
    console.log(`오늘의 메뉴 : ${this.foods[parseInt(Math.random() * this.foods.length)]}`)
}

let picker = new FoodPicker(['짜잔형','청국장','김치찌게'])
let picker2 = new FoodPicker('짜잔형','청국장','김치찌게')

picker.printMenu()
picker2.printMenu()

// 실습 메서드를 프로토타입으로 분리하고 동일한 주소를 참조하는지 확인
console.log(picker.printMenu === picker2.printMenu)

