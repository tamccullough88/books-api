const React = require('react')
const Def = require('../default')

let year = new Date().getFullYear()


function New(data) {
    let message = ''
    if (data.message) {
        message = (
            <div className="alert alert-warning" >
                <h4>{data.message}</h4>
            </div>
        )
    }


    return (

        <Def>
            <main>
                <h1>Add A New Book</h1>
                {message}
                <form method="POST" action="/books">
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="title">Book Title</label>
                            <input className="form-control" id="title" name="title" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="image">Book Image</label>
                            <input className="form-control" id="image" name="image" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6 col-sm-offset-6">
                            <label htmlFor="year">Year Written</label>
                            <input type="number" className="form-control text-align:center" id="year" name="year" defaultValue={year} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" className="form-control " id="quantity" name="quantity" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" name="description" />
                        </div>
                    </div>

                    <br />
                    <input className="btn btn-primary" type="submit" value="Add Book" />
                </form>


            </main >
        </Def >
    )

}


module.exports = New
