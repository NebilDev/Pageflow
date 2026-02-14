function BookCard({ books }) {
  return books.map((book) => {
    return (
      <div key={book.id} className="book-card">
        <div className="book-img-container">
          <img
            className="book-img"
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt="Book Cover Page"
          />
        </div>
        <div className="book-details">
          <p className="book-title">{book.volumeInfo.title}</p>
          <p className="book-author">{book.volumeInfo.authors}</p>
          <p className="book-date">Date: {book.volumeInfo.publishedDate}</p>
          <button className="add-to-read">Add To Read</button>
        </div>
      </div>
    );
  });
}

export default BookCard;
