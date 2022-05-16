import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./componnets/Header/Header";
import Home from "./pages/Home/Home";
import ProductDetails from "./componnets/ProductDetailes/ProductDetails";
import NavBar from "./componnets/Navbar/Navbar";


import ProductsInCategory from "./componnets/ProductsCategory/ProductsCategory";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductsCategory/:category" element={<ProductsInCategory />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
