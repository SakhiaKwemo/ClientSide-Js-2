let Colors = ['red', 'pink', 'blue', 'green', 'yellow']

const $body = $('#bodyId')
const $button = $('#background')

$button.on('click', () => {    
    const rand = Math.floor(Math.random() * Colors.length)
    console.log(Colors[rand])
    $body.css("background-color", 'red');
})

/*
DIFFERENCES 

- body.style.backgroundColor = 'color' ---> $body.css('background-color', 'color')
- const body = document.getElementById('bodyId') ---> $body = $('#bodyId')
- button.addEventListener()  ---> $button.on()
- appendChild ---> append

*/
