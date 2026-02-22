import { useState } from "react";
import BookCard from "./BookCard";
import loadingSpinner from "../../assets/loading-spinner.gif";
import "./BooksGrid.css";

function BooksGrid({ books }) {
  const [toRead, setToRead] = useState(() => {
    const stored = localStorage.getItem("toRead");
    return stored ? JSON.parse(stored) : [];
  });
  // add books && for invalid searched
  return books && books.length > 0 ? (
    <div className="container">
      <div className="books-container">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            toRead={toRead}
            setToRead={setToRead}
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
