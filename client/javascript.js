console.log("Welcome To My Front End")

// console.log(process.argv)
console.log(window)

let seconds = 10

//write cookies
// res.cookies('key', 'value')
window.sessionStorage.setItem('session', 'Session')
window.localStorage.setItem('local', 'Local')

//read cookies
// const cookie = req.cookies['key']
const local = window.localStorage.getItem('local')
const session = window.sessionStorage.getItem('session')
console.log(local)
console.log(session)

timer = window.setInterval(() => {
    console.log(seconds)
    seconds--
    if(seconds === 0) {
        clearInterval(timer)
        window.close()
    }
}, 1000)


//callback --> what happens
//delay --> when it happens
// setTimeout(callback, delay)