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

//form page for new book
router.get('/new', (req, res) => {
    res.render('books/new')
})

//create new place
router.post('/', (req, res) => {
    for (const [key, value] of Object.entries(req.body)) {
        if (!value) delete req.body[key]
    }
    db.Books.create(req.body)
        .then(() => {
            res.redirect('/books')
        })
        .catch(err => {
            if (err && err.name == 'ValidationError') {
                let message = 'Validation Error: '
                for (var field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. `
                    message += `${err.errors[field].message}`
                    console.log('Validation error message', message)
                    res.render('books/new', { message })
                }
            } else {
                res.render('error404')
            }
        })
})



//DYNAMIC PAGES BEYOND THIS POINT



// show page
router.get('/:id', (req, res) => {
    db.Books.findById(req.params.id)
        .then(Books => {
            console.log("book info", Books, Books.description)
            res.render('Books/show', { Books })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

//update stub
router.put('/:id', async (req, res) => {
    await db.Books.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.redirect(`/books/${req.params.id}`)
})

// edit page
router.get('/:id/edit', (req, res) => {
    db.Books.findById(req.params.id)

        .then(Books => {

            res.render('books/edit', { Books })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })

    // console.log(index)
})

//delete a book
router.delete('/:id', async (req, res) => {
    ;
    await db.Books.findByIdAndDelete(req.params.id);
    res.redirect('/books')
    // console.log('deleted:', req.params.id)

})


module.exports = router
