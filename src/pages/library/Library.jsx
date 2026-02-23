import { useState } from "react";
import LibraryBooks from "./LibraryBooks";
import Nav from "../../components/Nav";
import StatusNav from "./StatusNav";
function Library({ library, setLibrary }) {
  const [status, setStatus] = useState("reading");
  const filteredBooks = library.filter((book) => book.status === status);
  return (
    <>
      <Nav />
      <StatusNav status={status} setStatus={setStatus} />
      <LibraryBooks books={filteredBooks} library={library} setLibrary={setLibrary} />
    </>
  );
}

export default Library;
