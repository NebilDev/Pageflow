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
        `https://www.googleapis.com/books/v1/volumes?q=${genre}&maxResults=20&printType=books&langRestrict=en&orderBy=relevance&key=AIzaSyC0xLO4xHC06V9GPSHE1yu-IT_2pA0Zi7U`,
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
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
