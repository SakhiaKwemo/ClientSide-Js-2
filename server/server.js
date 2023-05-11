const express = require('express')

const PORT = 3001
const app = express()
app.set('view engine', 'ejs')

// console.log(process.argv)
// console.log(window)

//window --> can only be used in Front End 
//process --> can only be used in the Back End

app.get('/', (req, res) => {
    console.log("backend")
    //access a database
    console.log(process)

    res.render('home')
})

app.listen(PORT, () => {
    console.log("the server is really running on PORT: " + PORT)
})