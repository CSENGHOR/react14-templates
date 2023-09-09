
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
function App() {
  return (
    // BrowserRouter , Routes, Route 
    <BRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/aboutus" index element={<AboutUs />} />
        <Route path="/service" index element={<Service />} />

      </Routes>

    </BRouter>
  );
}

export default App;
