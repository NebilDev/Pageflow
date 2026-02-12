import Nav from "../components/Nav";
import SearchForm from "../components/SearchForm";
import GenreNav from "../components/GenreNav";
import BooksGrid from "./BooksGrid";
import "./Discover.css";
function Discover({ genre, setGenre, books }) {
  return (
    <>
      <Nav />
      <h1 className="title">Discover Your Next Great Book</h1>
      <SearchForm />
      <GenreNav genre={genre} setGenre={setGenre} />
      <BooksGrid books={books} />
    </>
  );
}

export default Discover;
