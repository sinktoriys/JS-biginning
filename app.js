const heading = document.getElementById('hello')
//const heading2 = document.getElementsByClassName('h2-class')[0]
console.log(heading)

const heading2 = document.querySelector('h2')
console.dir(heading2)


const h2List = document.querySelectorAll('h2')
console.log(h2List)

//const heading3 = document.nextElementSibling
const heading3 = h2List[h2List.length - 1]
console.log(heading3)

setTimeout(() => { 
addStylesTo(heading, 'JavaScript')
},1500)

setTimeout(() => { 
    addStylesTo(heading3.querySelector('a'),'Practice', 'blue', '2rem')
    },3000)

setTimeout(() => { 
    addStylesTo(heading2,'And you will be fine', 'yellow')
    },4500)



function addStylesTo(node,text, color = 'red', fontSize ) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2 rem'
    node.style.display = 'block'
    node.style.width = '100%'
if (fontSize) {
 node.style.fontSize = fontSize   
}
}

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
    }








