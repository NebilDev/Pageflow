import LibraryBook from "./LibraryBook";
import "./LibraryBooks.css";

function LibraryBooks({ books, library, setLibrary }) {
  // add books && for invalid searched
  return books && books.length > 0 ? (
    <div className="container">
      <div className="books-container">
        {books.map((book) => (
          <LibraryBook
            key={book.id}
            book={book}
            library={library}
            setLibrary={setLibrary}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="container empty-library">
      <p className="no-books">
        You haven’t added any books yet. Head to Discover and add your first
        one.
      </p>
    </div>
  );
}

export default LibraryBooks;
