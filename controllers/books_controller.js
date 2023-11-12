const router = require('express').Router()
const db = require('../models')

//books index page
router.get('/', (req, res) => {

    // res.render('books/index')
    db.Books.find()
        .then((Books) => {
            res.render('books/index', { Books })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
}
)



//DYNAMIC PAGES BEYOND THIS POINT

router.get('/:id', (req, res) => {
    db.Books.findById(req.params.id)
        .then(Books => {
            console.log("book info", Books, Books.description)
            res.render('Books/show', { Books })
        })
    // .catch(err => {
    //     console.log('err', err)
    //     res.render('error404')
    // })
})

module.exports = router
