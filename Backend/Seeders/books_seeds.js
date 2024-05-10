const db = require('../models')

db.Books.create([{
    title: 'The Shinobi Initiative',
    description: 'The reality-bending adventures of a clandestine service agency in the year 2166',
    year: 2014,
    quantity: 10,
    image: 'https://imgur.com/LEqsHy5.jpeg'
},
{
    title: 'Tess the Wonder Dog',
    description: 'The tale of a dog who gets super power\'s',
    year: 2007,
    quantity: 3,
    image: 'https://imgur.com/cEJmGKV.jpg'
},
{
    title: 'The Annals of Arathrae',
    description: 'This anthology tells the intertwined narratives of six fairy tales.',
    year: 2016,
    quantity: 8,
    image: 'https://imgur.com/VGyUtrr.jpeg'
},
{
    title: 'Wâˆ€RP',
    description: 'A time-space anomaly folds matter from different points in earth\'s history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.',
    year: 2010,
    quantity: 4,
    image: 'https://imgur.com/qYLKtPH.jpeg'
}])
    .then(() => {
        console.log('success')
        process.exit()
    })
    .catch(() => {
        console.log('failure', err)
        process.exit
    })

