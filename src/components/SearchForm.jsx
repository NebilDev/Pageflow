import "./SearchForm.css";
function SearchForm() {
  return (
    <div className="search-form-container">
      <input
        type="text"
        placeholder="Search books..."
        className="search-input"
      />
    </div>
  );
}

export default SearchForm;
