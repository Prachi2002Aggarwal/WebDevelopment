var str = "Hello guys"
console.log(str)
console.log(str[0])
console.log(str[4])
console.log(str[6])

// String methods

// 1) Extraction method

// a) Substring Method
let slicedStr = str.slice(2,7)
console.log(slicedStr)
console.log(str)

let slicedStr1 = str.slice(6)
console.log(slicedStr1)
console.log(str)

let slicedStr2 = str.slice(6,-2)
console.log(slicedStr2)
console.log(str)

// b) Substring Methods
let sub = str.substr(2,5)
console.log(sub)

// replacing
str = "YOLO"
console.log(str)

// to lower
console.log(str.toLowerCase())
console.log(str)

// to upper
str = "funu"
console.log(str.toUpperCase())
console.log(str)

// concatenation
let str1 = "Hello "
let str2 = "How are u "
let concatenatedString = str1 + str2
console.log(concatenatedString)
console.log(str1)

let concate = str1.concat(str2)
console.log(concate)
console.log(str1)

let concate1 = str1.concat(str2, "I am Prachi")
console.log(concate1)
console.log(str1)

// trim
let str3 = "               hello         how        are u       "
console.log(str3.trim() , "yoooooooo")

let str4 = "hello"
str4[2] = 'i'
console.log(str4)