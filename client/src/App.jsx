import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Display from "./pages/Display";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;
