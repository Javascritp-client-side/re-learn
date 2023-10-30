function outer(){
    let outerVar = "Hello from outer";
    function inner(){
        console.log(outerVar);
    }
    return inner;
}
let innerfunction = outer()
console.log(innerfunction)