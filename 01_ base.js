
var firstName = 'Marina'
const lastName = 'Ivanushkina'
const  age = 37

//console.log()
//const lastName= promt (message: 'Put lastName')
//alert (firstName + ' ' + lastName)
//const currentYear = 2022
//const birthYear = 1984
//const age=currentYear+birthYear            
                      
//console. log(age)
//const a = 10
//const b = 5
//console. log(a+b)
//console. log(a-b)
//console. log(a*b)
//console. log(a/b)
 
//let c = 32
//c= c + a
//c += a
//console. log (c)
//const isProgrammer = true
//const name = 'Marina'
//const age = 26
//console. log(typeof isProgrammer)
//console. log(typeof name)
//console. log(typeof age)
//const fullAge = 26
//const birthYear = 1993
//const currentYear = 2020
//const isFullAge = currentYear - birthYear >= fullAge
//console. log(isFullAge)
 
//const courseStatus  = 'pending'
//if   (courseStatus === 'ready') {
//console.log('Course is ready')

//} else if   (courseStatus === 'pending') {
   // console.log('Course is pending')
//} else {                   
   // console.log('Course is failed')
//}
//function calculateAge(year) {
//return 2020 - year
//}
 //const myAge = calculateAge(1993)
 //console.log(myAge)

 //function logInfoAbout(name, year) {
//const agge = calculateAge(year)
//console.log('A woman named ' + name + ' is now ' +age)

 //}
 //logInfoAbout('Marina',1984)

 //const cars = [ 'Mazda', 'Mersedes', 'Ford','Porsche']
//console.log(cars)
//const cars = new Array()
//console.log(cars. length)
//console.log(cars[1])
//console.log(cars[0])
//console.log(cars[2])

//cars[0]= 'Porsche'
//console.log(cars)
//cars[3]
//for (let i = 0; i < cars. length; i++){
//console.log(i)
//const car = cars[i]
//console.log(car)

const  person = {
firstName: 'Marina',
lastName: 'Ivanushkina',
year: 1984,
languages: ['Ua', 'En','Ru'],
hasHusbend: true,
greet: function(){
console.log('greet from person')}
}
console.log(person.firstName)
console.log(person['lastName'])
const key = 'languages'
console.log(person[key])
person.greet()