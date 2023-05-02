// pending 대기 상태
// fulfilled 이행 상태
// rejected 실패 상태

function sayHello() {
    return new Promise((resolve,reject) =>{
        resolve('hello')
    })
}

sayHello()
    .then((resolvedData) => {
        console.log(resolvedData)
        return resolvedData;
    })
    .then((resolvedData)=>{
        console.log(resolvedData)
        return resolvedData;
    })
    .then((resolvedData)=>{
        console.log(resolvedData)
    })
    .catch((error)=>{
        console.log(error);
    })