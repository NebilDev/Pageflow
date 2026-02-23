function BookCard({ book, library, setLibrary }) {
  const addToRead = (book) => {
    const alreadyExists = library.find((item) => item.id === book.id);
    if (alreadyExists) return;
    const updated = [
      ...library,
      {
        id: book.id,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors,
        image: book.volumeInfo.imageLinks?.thumbnail,
        date: book.volumeInfo.publishedDate,
        status: "to read"
      },
    ];
    setLibrary(updated);
    localStorage.setItem("library", JSON.stringify(updated));
  };
  const isAdded = library.some(item => item.id === book.id);
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
