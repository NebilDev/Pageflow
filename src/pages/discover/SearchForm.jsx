import { useState, useRef } from "react";
import "./SearchForm.css";
function SearchForm({ setGenre, setBooks }) {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);
  const getSearchValue = () => {
    setSearchValue(event.target.value);
  };
  const searchBook = () => {
    if (inputRef.current.value) {
      if (event.key === "Enter") {
        const searchWord = inputRef.current.value.replaceAll(" ", "+");
        setGenre(searchWord);
        setBooks([]);
        console.log(inputRef.current.value);
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
        ref={inputRef}
      />
    </div>
  );
}

export default SearchForm;
