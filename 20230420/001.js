class Sausage {
    constructor (ingre1, ingre2){
        this.ingre1 = ingre1
        this.ingre2 = ingre2
    }

    taste() {
        console.log(`${this.ingre1}와(과) ${this.ingre2} 마시 난다`)
    }
}

class FiresSausage extends Sausage{
    taste() {
        console.log(`${this.ingre1}와(과) ${this.ingre2}, 불 맛이 난다`)
    }
}

s1 = new Sausage('순대국밥','비빔냉면')
s1.taste()

s2 = new FiresSausage('김치찌게','짜장면')
s2.taste()
