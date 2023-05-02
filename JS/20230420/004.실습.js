class Todo {
    constructor (item, finished){
        this.item = item
        this.finished = finished
    }
    changeState() {
        this.item = !this.item
    }
}

class TodoManager {
    constructor (){
        this.works = []
    }

    getLeftTodoCount(){
        return this.works.filter(e=>{
                                    return e.finished !== true
                                })
                        .length
    }

    getItems(){
        return this.works
    }

    addItem(item){
        this.works.push(new Todo(item, finished));
    }
}