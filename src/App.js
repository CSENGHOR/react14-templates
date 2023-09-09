
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import NotFoundPage from "./pages/NotFoundPage";
import CustomNavBar from "./components/CustomNavBar";
function App() {
  return (
    // BrowserRouter , Routes, Route 
    <BRouter>
      <CustomNavBar />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </BRouter>
  );
}

export default App;
