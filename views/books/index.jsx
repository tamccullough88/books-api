const React = require('react')
const Def = require('../default')

function Index(data) {
    let booksFormatted = data.Books.map((book) => {

        return (
            <div className="row border" key={book.id}>
                <div className="col-sm-5" >

                    <img src={book.image} alt={book.title} className="img-fluid" />
                </div>
                <div className="col-sm-5 " >
                    <h2 >
                        <a href={`/books/${book.id}`}>
                            {book.title}
                        </a>
                    </h2>
                    <p className="text-cener">
                        {book.description}
                    </p>
                    <p className="text-cener">
                        {book.quantity} Books Left
                    </p>
                </div>
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