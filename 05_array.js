const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes']
const fib = [1, 1, 2, 3, 5, 8, 13]
//const people = [
   // {name: 'Vladilen', budget: 4200},
   // {name: 'Elena', budget: 3500},
   // {name: 'Victoria', budget: 1700}

//]

//cars.push( 'Reno')
//console.log(cars)
//cars.unshift('Lada')
//console.log(cars)
//cars.shift ()
//console.log(cars)
//const firstItem = cars.shift()
//console.log(firstItem)
//console.log (cars)
//const lastCar = cars.pop()
//console.log(lastCar)
//console.log(cars)
//console.log(cars.reverse())
//console.log(cars)
//const text = 'Hey, we study JS'
//const reverseText = text.split('').reverse().join('')
//console.log(reverseText)
//const index = cars.indexOf('BMW')
//cars[index] = 'Porshe'
//console.log(cars)

//const index = people.findIndex(function(person){
//return person.budget === 3500
//})
//console.log(people[index])
//let findedPerson
//for (const person of people){
//if (person.budget === 3500){
//findedPerson = person
//}
//}
//console.log(findedPereson)

//const person = people.find(person.budget === 3500)
//console.log(person)

//console.log(cars.includes('Mazda'))

//const upperCaseCars = cars.map(car=>{
//return car.toUpperCase()
//})
//console.log(upperCaseCars)

//const pow2Fib = fib.map(num => num **2)
//console.log(upperCaseCars)
//console.log(pow2Fib)

//const pow2 = num => num ** 2
//const sqrt = num => Math.sqrt(num)

//const pow2Fib = fib.map(pow2).map(sqrt)
//console.log(pow2Fib)

//const pow2Fib = fib.map(pow2)
//const filteredNumbers = pow2Fib.filter(num => num > 20)
//console.log(pow2Fib)
//console.log(filteredNumbers)


const people = [
    {name: 'Vladilen', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]
const allBudget = people.reduce ((acc,person) => {
    if(person.budget > 2000){
acc+= person.budget
}
return acc    
}, 0 )
console.log(allBudget)