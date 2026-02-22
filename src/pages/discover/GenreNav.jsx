import "./GenreNav.css";
function GenreNav({genre, setGenre, setBooks}) {

  const changeGenre = (event) => {
    setGenre(event.target.innerHTML);
    setBooks([]);
  };
  return (
    <div className="container">
      <ul className="genre-items-list">
        <li className="genre-item">
          <button
            onClick={changeGenre}
            className={`genre-btn ${genre === "fiction" && "active"}`}
          >
            fiction
          </button>
        </li> 
        <li className="genre-item">
          <button
            onClick={changeGenre}
            className={`genre-btn ${genre === "self-help" && "active"}`}
          >
            self-help
          </button>
        </li>
        <li className="genre-item">
          <button
            onClick={changeGenre}
            className={`genre-btn ${genre === "business" && "active"}`}
          >
            business
          </button>
        </li>
        <li className="genre-item">
          <button
            onClick={changeGenre}
            className={`genre-btn ${genre === "psychology" && "active"}`}
          >
            psychology
          </button>
        </li>
        <li className="genre-item">
          <button
            onClick={changeGenre}
            className={`genre-btn ${genre === "biography" && "active"}`}
          >
            biography
          </button>
        </li>
      </ul>
    </div>
  );
}

export default GenreNav;
