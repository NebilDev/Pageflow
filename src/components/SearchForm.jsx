import { useState, useRef } from "react";
import "./SearchForm.css";
function SearchForm({ genre, setGenre, setBooks }) {
  const [searchValue, setSearchValue] = useState("");
  const ref = useRef();
  const getSearchValue = () => {
    setSearchValue(event.target.value);
  };
  const searchBook = () => {
    console.log(ref)
    if(ref.value) {
      if (event.key === "Enter") {
        setGenre(ref.value);
        setBooks([])
        console.log(ref.value)
      }
    } else {
      if(genre !== "fiction") {
        setGenre("fiction")
      }
    }
  };
  return (
    <div className="search-form-container">
      <input
        type="text"
        placeholder="Search books..."
        className="search-input"
        onChange={getSearchValue}
        onKeyDown={searchBook}
        value={searchValue}
        ref={ref}
      />
    </div>
  );
}

export default SearchForm;
