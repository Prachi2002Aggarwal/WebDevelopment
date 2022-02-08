/*// 3 types of function

// 1) Normal Function
function add(a,b) {
    return a + b;
}
let ans = add(2,6);
console.log(ans)

// ---------------------------------------------------------------
function calculator(str,a,b) {
    if(str == 'add') {
        return function add() {
            console.log(a+b)
        }
    }
    else if (str === "sub") {
        return function sub() {
            return a - b;
        }
    }
    else if (str === "mul") {
        return function sub() {
            return a * b;
        }
    }
    else if (str === "div") {
        return function sub() {
            return a / b;
        }
    }
}
let returnedFunc1 = calculator('add' , 2,3)
returnedFunc1()
console.log("returned function is \n" + returnedFunc1)

let returnedFunc2 = calculator('sub' , 2,3)
returnedFunc2()
console.log("returned function is \n" + returnedFunc2)

let returnedFunc3 = calculator('mul' , 2,3)
returnedFunc3()
console.log("returned function is \n" + returnedFunc3)

let returnedFunc4 = calculator('div' , 2,3)
returnedFunc4()
console.log("returned function is \n" + returnedFunc4)

// --------------------------------------------------

// 2) Function Expression
let sayHi = function() {
    console.log('hello guyss');
}
sayHi();
console.log(""+sayHi)
// console.log(""+sayHi()) undefined as console output aaya but concat h yaha + h isliye undefined

let sayHello = function abcd() {
    console.log('hello guyss i am prachi');
}
sayHello();*/

// -------------------------------------------------

// 3) IIFE
let additionIIFE = (function add(a,b) {
    return a+b;
})(20,30);
console.log(additionIIFE)

let additionIIFE1 = (function add(a,b) {
    console.log(a+b);
})(50,30);
