const router = require('express').Router()


router.get('/', (req, res) => {
    res.send('Hello world!')
})

router.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

module.exports = router
