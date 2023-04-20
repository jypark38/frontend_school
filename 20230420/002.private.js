class Robot {
    #password
    
    constructor(name, pw){
        this.name = name;
        this.#password = pw
    }

    sayYourName(){
        console.log(`${this.name}`)
    }

    getPassword() {
        return this.#password
    }

    setPassword(pw){
        this.#password = pw
    }
}

robot = new Robot('1','2');

console.log(robot);