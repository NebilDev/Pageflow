function LibraryBook({ book, library, setLibrary }) {
  const updateStatus = (id, newStatus) => {
    const updated = library.map((book) =>
      book.id === id ? { ...book, status: newStatus } : book,
    );

    setLibrary(updated);
    localStorage.setItem("library", JSON.stringify(updated));
  };
  const removeBook = (id) => {
    const updated = library.filter((book) => book.id !== id);
    setLibrary(updated);
    localStorage.setItem("library", JSON.stringify(updated));
  };

  return (
    <div className="book-card">
      <div className="book-img-container">
        <img
          className="book-img"
          src={book.image}
          alt="Book Cover Page"
        />
      </div>
      <div className="book-details">
        <p className="book-title">{book.title}</p>
        <p className="book-author">{book.authors}</p>
        <p className="book-date">Date: {book.date}</p>
        {book.status === "to read" && (
          <button className="btn start-reading" onClick={() => updateStatus(book.id, "reading")}>
            Start Reading
          </button>
        )}

        {book.status === "reading" && (
          <button className="btn done-reading" onClick={() => updateStatus(book.id, "have read")}>
            Mark as Read
          </button>
        )}

        {book.status === "have read" && (
          <button className="btn remove" onClick={() => removeBook(book.id)}>Remove</button>
        )}
      </div>
    </div>
  );
}

export default LibraryBook;
