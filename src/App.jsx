import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/HomePage";
import Rules from "./Pages/Regras";
import Shop from "./Pages/Loja";
import Team from "./Pages/Equipe";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <BrowserRouter basename="/NeoSlime">
      <>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>
        <Footer />
      </>
    </BrowserRouter>
  );
}
