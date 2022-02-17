let obj = {};
console.log(obj)

let person = {
    name : "Prachi",
    age : 19,
    phone : 9845678923,
    fender : "female",
    height : "170cm"
}
console.log(person)
console.log(person["name"])
console.log(person.name)

let str = "Hello"
console.log(str.length)
console.log(str["length"])

let captainAmerica =  {
    firstName : "Steve",
    lastName : "Rogers",
    friends : ["Bucky","Tony Stark" , "Brue Banner"],
    age : 102,
    isAvenger : true,
    address : {
        state : "Manhattan",
        city : "New York",
        country : "USA"
    },
    sayHi : function() {
        console.log(`Hello my name is ${this.firstName}`);
    }
}
console.log(captainAmerica)
console.log(captainAmerica.sayHi)
console.log(captainAmerica.friends[0])
captainAmerica.sayHi() // method accessing

let arr = ["a","b",1,true]
let arr1 = {
    0:"a",
    1:"b",
    2:1,
    3:true
}
console.log(arr[3])
console.log(arr.length)

for (let key in captainAmerica) {
    console.log(`${key} : ${captainAmerica[key]}`)
}
for (let key in captainAmerica) {
    console.log(`${key} : ${captainAmerica.key}`)
}