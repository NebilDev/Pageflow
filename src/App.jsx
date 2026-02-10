import { Routes, Route, Navigate } from "react-router";
import Discover from "./pages/Discover";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/discover" replace />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </>
  );
}

export default App;
