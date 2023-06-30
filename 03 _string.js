//const name = 'Vladilen.'
//const age = 26
//const output = 'Hi, my name is ' + name + ' I am: ' + age + ' years old.'
//const output = `Hi, my name is ${name} and I am ${age} years old. `
//console.log(output)

//const name = 'Vladilen'
//console.log(name.length)
//console.log(name.toUpperCase ())
//console.log(name.toLowerCase())
//console.log(name.charAt(2))
//console.log(name.indexOf('len'))
//console.log(name.indexOf('!'))
//console.log(name.startsWith('vlad'))
//console.log(name.repeat(3))

function logPerson (s ,name, age){
    console.log(s ,name, age )
return 'Info about person'
}
const personName = 'Vladilen'
const personAge = 26
const output = logPerson`Name: ${personName}, Age: ${personAge} !`
console.log(output)