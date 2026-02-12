import Nav from "../components/Nav";
import SearchForm from "../components/SearchForm";
import GenreNav from "../components/GenreNav";
import BooksGrid from "./BooksGrid";
import "./Discover.css";
function Discover({ genre, setGenre, books, setBooks }) {
  return (
    <>
      <Nav />
      <h1 className="title">Discover Your Next Great Book</h1>
      <SearchForm genre={genre} setGenre={setGenre} setBooks={setBooks}/>
      <GenreNav genre={genre} setGenre={setGenre} />
      <BooksGrid books={books} />
    </>
  );
}

export default Discover;
