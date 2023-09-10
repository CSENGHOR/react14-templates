
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import NotFoundPage from "./pages/NotFoundPage";
import CustomNavBar from "./components/CustomNavBar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ProductModal from "./components/ProductModal";
import { ProductDashboard } from "./pages/ProductDashboard";

function App() {
  return (
    // BrowserRouter , Routes, Route 
    <BRouter>
      <CustomNavBar />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin/products" element={<ProductDashboard />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BRouter>
  );
}

export default App;
