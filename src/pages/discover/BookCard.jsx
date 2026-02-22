function BookCard({ book, toRead, setToRead }) {
  const addToRead = (book) => {
    const alreadyExists = toRead.find((item) => item.id === book.id);
    if (alreadyExists) return;
    const updated = [
      ...toRead,
      {
        id: book.id,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors,
        image: book.volumeInfo.imageLinks?.thumbnail,
        date: book.volumeInfo.publishedDate,
      },
    ];
    setToRead(updated);
    localStorage.setItem("toRead", JSON.stringify(updated));
  };
  const isAdded = toRead.some(item => item.id === book.id);
  return (
    <div className="book-card">
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
        <button
          onClick={() => addToRead(book)}
          disabled={isAdded}
          className="add-to-read"
        >
          {isAdded ? "Added" : "Add To Read"}
        </button>
      </div>
    </div>
  );
}

export default BookCard;
