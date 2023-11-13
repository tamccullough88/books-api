//configuration
const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI
const methodOverride = require('method-override')



//middleware
app.use(express.json())
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))


//pull paths from books_controllers.js
app.use('/books', require('./controllers/books_controller.js'))



//create home route

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

// app.listen(process.env.PORT)

const start = async () => {
    await mongoose.connect(MONGO_URI);
    console.log('connected to database')
    app.listen(PORT, () => {
        console.log('listening on port', PORT);
    })
}

start();
