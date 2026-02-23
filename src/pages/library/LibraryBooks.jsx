import LibraryBook from "./LibraryBook";
import loadingSpinner from "../../assets/loading-spinner.gif";
// import "./LibraryBooks.css";

function LibraryBooks({ books, library, setLibrary}) {

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
    <div className="container loading-container">
      <img src={loadingSpinner} className="loading" />
    </div>
  );
}

export default LibraryBooks;