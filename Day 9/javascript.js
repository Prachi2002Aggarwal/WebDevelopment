var a;

a = 10
console.log(a)
console.log(typeof a)

a = "hello"
console.log(a)
console.log(typeof a)

a = true;
console.log(a)
console.log(typeof a)

a = null;
console.log(a)
console.log(typeof a)

a = 2.4
console.log(a)
console.log(typeof a)

a = 'How are u'
console.log(a)
console.log(typeof a)

a = `How yoooo`
console.log(a)
console.log(typeof a)

a = "How are u" +
    "i am fine"
console.log(a)
console.log(typeof a)

a = `How are u
i am fine`;
console.log(a)
console.log(typeof a)

var num = 231
console.log(`half of ${num} is ${num/2}`)

//allowed redeclaration
var b = 10
var c = 10

let l = 200
console.log(l)
l = 20000
console.log(l)

//loop and if
var num1 = 10
for(var i= 0 ; i < num1 ; i++) {
    if((i % 2 )=== 0) {
        console.log(i);
    }
}