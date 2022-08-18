import Card from "./components/atoms/Card";
import Navbar from "./components/organism/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import DetailProduct from "./pages/DetailProduct";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product">
          <Route path=":productId" element={<DetailProduct />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
