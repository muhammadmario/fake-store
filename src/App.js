import Card from "./components/atoms/Card";
import Navbar from "./components/organism/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product/:productId" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
