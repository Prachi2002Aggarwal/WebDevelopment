let cars = ['BMW' , "AUDI" , true , 1 , 2 , 2.4 , "yup"];
console.log(cars)

console.log(cars[0])
console.log(cars[3])

cars[3] = "mahindra"
console.log(cars[3])

cars[7] = "Honda"
console.log(cars)

cars.pop()
console.log("after popping the elemnt \n")
console.log(cars);

cars.push("TATA")
console.log("after pushing the elemnt \n")
console.log(cars);

cars.unshift("JLR")
console.log(cars)

cars.shift()
cars.shift()
console.log(cars)

console.log(cars.length)

// ------------------------------------------

let array2D = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(array2D);
console.table(array2D)

console.log(array2D[1][2])

console.log(array2D)
console.log(array2D)