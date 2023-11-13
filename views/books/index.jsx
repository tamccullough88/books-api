const React = require('react')
const Def = require('../default')

function Index(data) {
    let booksFormatted = data.Books.map((book) => {

        return (
            <div className="col-sm-3 card" key={book.id}>
                <h2 >
                    <a href={`/books/${book.id}`}>
                        {book.title}
                    </a>
                </h2>
                <img src={book.image} alt={book.title} className="img-fluid" />
                <p className="text-cener">
                    {book.quantity} Books Left
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Restaurants to Rant or Rave About!</h1>
                <div className="row">
                    {booksFormatted}
                </div>
            </main>
        </Def>
    )
}



module.exports = Index