import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Locations from "./pages/Home/Locations";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Locations" element={<Locations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
