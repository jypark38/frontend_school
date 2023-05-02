
function Parent() {
    this.name = '재현'
}

Parent.prototype.rename = function (name){
    this.name = name;
}

Parent.prototype.sayName = function (){
    console.log(this.name)
}


function Child() {
    Parent.call(this);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.canWalk = function() {
    console.log('now i can walk')
}
/*
Call 함수는 child 함수의 this가 Parent 생성자 함수의 This를 바라보게 한다.
Child를 통해서 만들어진 인스턴스의 this가 Parent 함수안의 프로퍼티에 접근할 수 있게 한다.

그리고 Object.create 함수는 주어진 인자를 Child.prototype에 연결하는 역할을 한다
Parent객체의 프로토타입을 CHild객체의 프로토타입이 참조하게 한다
 */
