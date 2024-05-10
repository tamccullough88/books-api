import { useEffect, useState } from "react";


function BooksIndex(data) {


	const [books, setBooks] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3001/books`)
			const resData = await response.json()
			setBooks(resData)
		}
		console.log("api call books", books)
		fetchData()
	}, [])
	console.log("books data", books)
	let booksFormatted = books.map((book) => {
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
		<main>
			<h1>Places to Rant or Rave About</h1>
			<div className="row">
				{booksFormatted}
			</div>
		</main>
	)
}

export default BooksIndex;