const React = require('react')
const Def = require('../default')

function Show(data) {

    return (
        <Def title={data.Books.title}>
            <main>
                <div >
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="col-sm-10 img-fluid" src={data.Books.image} alt={data.Books.title} />
                            <p className="text-center">{data.Books.showWritten()}</p>
                        </div>
                        <div className="col-sm-5">
                            <h1> {data.Books.title} </h1>
                            <h2 className="text-center">Description</h2>
                            <p>{data.Books.description}</p>
                        </div>
                    </div>
                    <a href={`/books/${data.Books.id}/edit`} className="btn btn-warning col-sm-3">
                        Edit
                    </a>
                    <br />
                    <br />
                    <form action={`/books/${data.Books.id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE" className="btn btn-danger col-sm-3" />
                    </form>
                </div>
            </main>

        </Def>
    )

}

module.exports = Show