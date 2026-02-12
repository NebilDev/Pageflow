import "./BooksGrid.css";

function BooksGrid({ books }) {
  const getCover = (book) =>
    book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
      : "/placeholder.jpg";
  return (
    <div className="container">
      <div className="books-container">
        {console.log(books)}
        {books.length > 0 &&
          books.map((book) => {
            return (
              <div key={book.cover_i} className="book-card">
                <div className="book-img-container">
                  <img
                    className="book-img"
                    src={getCover(book)}
                    alt="Book Cover Page"
                  />
                </div>
                <div className="book-details">
                  <p className="book-title">{book.title}</p>
                  <p className="book-author">{book.author_name}</p>
                  <p className="book-date">Date: {book.first_publish_year}</p>
                  <button className="add-to-read">Add To Read</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default BooksGrid;
