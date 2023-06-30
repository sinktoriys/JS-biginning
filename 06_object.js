const person = {
name: 'Vladilen',
age: 26,
isProgrammer: true,
languages: ['ru', 'en', 'de'],
'complex key': 'Complex Value',
['key_' + (1 + 3 )]: 'Computed Key', // Key_4
greet() {
    console.log('greet from person')
},
info() {
    console.info('Information about the person which named:', person.name)
}
}
//console.log(person.name)
//console.log(person ['age'])
//console.log(person ['complex key'])
//person.greet()

//person.age++
//person.languages.push('by')
//delete person['key_4']
//console.log(person)
//console.log(person ['key_4'])

//const {name, age, languages} = person
//console.log (name, age, person)

// const keys = Object.keys(person)
// keys.forEach((key)=> {
// console.log('key:', key)
// console.log('value:',person[key])
// })

//Context
person.info()

