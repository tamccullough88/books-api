//configuration

require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())



//middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
// app.use(methodOverride('_method'))
// app.use(express.urlencoded({ extended: true }))


//pull paths from books_controllers.js
app.use('/books', require('./controllers/books_controller'))



//create home route

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)
