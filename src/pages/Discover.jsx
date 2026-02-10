import Nav from "../components/Nav"
import SearchForm from "../components/SearchForm"
import "./Discover.css"
import GenreNav from "../components/GenreNav"
function Discover() {
  return (
    <>
    <Nav />
    <h1 className="title">Discover Your Next Great Book</h1>
    <SearchForm />
    <GenreNav />
    </>
  )
}

export default Discover