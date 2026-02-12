import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Discover from "./pages/Discover";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [genre, setGenre] = useState("fiction");

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `https://openlibrary.org/search.json?subject=${genre}&limit=21
`,
      );
      setBooks(res.data.docs);
    };

    fetchBooks();
  }, [genre]);

  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/discover" replace />} />
        <Route
          path="/discover"
          element={<Discover genre={genre} setGenre={setGenre} books={books} />}
        />
      </Routes>
    </>
  );
}

export default App;
