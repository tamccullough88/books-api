const React = require('react')
const Def = require('../default')




function Edit(data) {
    return (

        <Def>
            <main>
                <h1>Add A New Book</h1>
                <form method="POST" action={`/books/${data.Books.id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="title">Book Title</label>
                            <input className="form-control" id="title" name="title" defaultValue={data.Books.title} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="image">Book Image</label>
                            <input className="form-control" id="image" name="image" defaultValue={data.Books.image} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6 col-sm-offset-6">
                            <label htmlFor="year">Year Written</label>
                            <input type="number" className="form-control text-align:center" id="year" name="year" defaultValue={data.Books.year} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" className="form-control " id="quantity" name="quantity" defaultValue={data.Books.quantity} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" name="description" defaultValue={data.Books.description} />
                        </div>
                    </div>

                    <br />
                    <input className="btn btn-primary" type="submit" value="Update Book" />
                </form>


            </main >
        </Def >
    )

}


module.exports = Edit
