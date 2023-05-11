console.log("it is working")

const html = document.children[0]
console.log(html)

console.log(html.children)

const head = html.children[0]
const body = html.children[1]

const body2 = document.getElementById('bodyId')

console.log(body.children)

const div = body.children[0]
const h1 = body.children[1]

let Colors = ['red', 'pink', 'blue', 'green', 'yellow']
const timer = window.setInterval(() => {
    const rand = Math.floor(Math.random() * Colors.length)
    body2.style.backgroundColor = Colors[rand]
}, 500)

h1.style.fontSize = "120px"

/*
#id --> uniquely identify a specific html element
.class -> identify a specific group of html elements

const html = document.children[0]
const body = document.children[1]

const body = document.querySelector('body')
const body = document.querySelector('#bodyId')
const body = document.querySelector('.bodyClass')

const body = document.getElementById('bodyId')

const body = document.getElementByClassName('bodyClass')
*/
