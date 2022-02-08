// here bahar bhi aapaya as let hamne for loop ke bahar declare kara tha
let i ;
for (i = 0 ; i < 10 ; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}
console.log(i);

// isme nahi as let function block ke andar declare hua h
for (let j = 0 ; j < 10 ; j++) {
    if(j % 2 == 0) {
        console.log(j);
    }
}
// console.log(j);

// isme bhi nahi hoga as let block ke andar declare hau h
for (let j = 0 ; j < 10 ; j++) {
    let k = 10;
    if(j % 2 == 0) {
        console.log(j);
    }
}
// console.log(k);

// can access as var global
var m ;
for (m = 0 ; m < 10 ; m++) {
    if(m% 2 == 0) {
        console.log(m);
    }
}
console.log(m);

// can access as var global
for ( var n = 0 ; n < 10 ; n++) {
    if(n% 2 == 0) {
        console.log(n);
    }
}
console.log(n);

// can access as var global
console.log("hey")
for (var j = 0 ; j < 10 ; j++) {
    var b = 10;
    if(j % 2 == 0) {
        console.log(j);
    }
}
console.log(b+10);