const React = require('react')
const Def = require('../default')

function Show(data) {

    return (
        <Def title={data.place.name}>
            <main>
                <div >
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="col-sm-10 img-fluid" src={data.place.pic} alt={data.place.name} />
                            <p className="text-center">Located in: {data.place.city}, {data.place.state}</p>
                        </div>
                        <div className="col-sm-5">
                            <h1> {data.place.name} </h1>
                            <h2 className="text-center">Description</h2>
                        </div>
                    </div>
                </div>
            </main>

        </Def>
    )

}