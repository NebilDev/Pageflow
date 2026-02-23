import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Discover from "./pages/discover/Discover";
import Library from "./pages/library/Library";
import axios from "axios";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [books, setBooks] = useState([]);
  const [genre, setGenre] = useState("fiction");
  const [library, setLibrary] = useState(() => {
    const stored = localStorage.getItem("library");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${genre}&maxResults=20&printType=books&langRestrict=en&orderBy=relevance&key=${apiKey}`,
      );
      setBooks(res.data.items);
    };

    fetchBooks();
  }, [genre]);

  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/discover" replace />} />
        <Route
          path="/discover"
          element={
            <Discover
              genre={genre}
              setGenre={setGenre}
              books={books}
              setBooks={setBooks}
              library={library}
              setLibrary={setLibrary}
            />
          }
        />
        <Route
          path="/library"
          element={<Library library={library} setLibrary={setLibrary} />}
        />
      </Routes>
    </>
  );
}

export default App;
