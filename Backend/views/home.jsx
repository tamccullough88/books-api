const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>Books API</h1>
                <div>
                    <img src="/images/tom-hermans-9BoqXzEeQqM-unsplash.jpg" alt="image of books on their side so you cannot read their titles" className="img-fluid" />
                    Photo by <a href="https://unsplash.com/@tomhermans?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tom Hermans</a> on <a href="https://unsplash.com/photos/book-lot-on-table-9BoqXzEeQqM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

                </div>


                <a href="/places">
                    <button className="btn-primary">Books</button>
                </a>

            </main>
        </Def>
    )

}

module.exports = home