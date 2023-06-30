//function
//function greet(name){
   // console.log('Hey - ', name)
//}
//greet('Lena')
//Ananimus function
//let counter = 0
//const interval = setInterval(function() {
//if (counter === 5) {
//clearInterval (interval)
//} else {
//console.log(++counter)
//}
//}, 1000)

function greet(name){
console.log('Hey - ', name)
}
const arrow = (name)=> {
    console.log('Hey - ', name)   
}
const arrow2 = name => console.log('Hey -'< name)
arrow2('Vladilen')
const pow2 = num => num**2
console.log(pow2(5))

const sum = (a,b) => a + b 
console.log(sum(41,1))

function sumAll(...all){
let result = 0
for (let num of all) {
result += num
}
return result
}
const res = sumAll(1, 2, 3, 4, 5, 6, 7)
    console.log(res)



























