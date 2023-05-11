let Colors = ['red', 'pink', 'blue', 'green', 'yellow']

//Targeting
const body = document.getElementById('bodyId')
const button = document.getElementById('background')
const image = document.getElementById('stick')

let stickX = 0
image.style.left = `${stickX}%`

//Adding Event Listener
window.addEventListener('keydown', (e) => {
    console.log(e.key)
    if(e.key === "ArrowLeft") {
        //Move him to the left
        // image.style.left = image.style.left - 10
        stickX = stickX - 10
        image.style.left = `${stickX}%`
    }
    if(e.key === "ArrowRight") {
        stickX = stickX + 10
        image.style.left = `${stickX}%`
        //Move him to my right
    }
    // const rand = Math.floor(Math.random() * Colors.length)
    // body.style.backgroundColor = Colors[rand]
})

/*
event --> when 
callback --> what
addEventListener(event, callback)
*/
