import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import "./Library.css";
import StatusNav from "./StatusNav";
function Library() {
  const [status, setStatus] = useState("reading");
  // const [savedBook, setSavedBooks] = useState([]); will be used to save the retreived books
  useEffect(() => {}, [status]);
  return (
    // thinking to whenver status changes we retrieve different book the issue they have differennt buttons
    // currently thinking to use different buttons based on if condition
    <>
      <Nav />
      <StatusNav status={status} setStatus={setStatus} />
    </>
  );
}

export default Library;
