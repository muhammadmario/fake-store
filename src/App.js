import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import DetailProduct from "./pages/DetailProduct";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product">
          <Route path=":productId" element={<DetailProduct />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
