import BookCard from "./BookCard";
import loadingSpinner from "../../assets/loading-spinner.gif";
import "./BooksGrid.css";

function BooksGrid({ books, library, setLibrary}) {

  // add books && for invalid searched
  return books && books.length > 0 ? (
    <div className="container">
      <div className="books-container">
        {books.map((book) => (
          <BookCard
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

export default BooksGrid;
