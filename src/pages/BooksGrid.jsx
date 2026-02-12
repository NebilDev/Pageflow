import BookCard from "../components/BookCard";
import loadingSpinner from "../assets/loading-spinner.gif"
import "./BooksGrid.css";

function BooksGrid({ books }) {
   return ( 
    books.length > 0 ? (
      <div className="container">
      <div className="books-container">
        {/* {console.log(books)} */}
        <BookCard books={books}/>
      </div>
    </div>
    )
    : <div className="container loading-container"><img src={loadingSpinner} className="loading"/></div>
  )
} 


export default BooksGrid;
