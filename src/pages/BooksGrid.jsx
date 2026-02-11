import "./BooksGrid.css";

function BooksGrid({ books }) {
  const getCover = (book) =>
    book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
      : "/placeholder.jpg";
  return (
    <div className="books-container">
      {/* {console.log(books)} */}
      {books.length > 0 &&
        books.map((book) => {
          return (
            <div key={book.cover_i} className="book-card">
              <img
                className="book-thumbnail"
                src={getCover(book)}
                alt="Book Cover Page"
              />
              <h2>{book.title}</h2>
              <p>{book.author_name}</p>
            </div>
          );
        })}
    </div>
  );
}

export default BooksGrid;
