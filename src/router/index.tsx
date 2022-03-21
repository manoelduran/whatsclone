import { Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Home } from "../pages/Home";
import { Splash } from "../pages/Splash";

const Rotas = () => (
  <Routes>
    <Route path="/"  element={<Home />} />
    <Route path="/login" element={<Splash />} />
  </Routes>
);
export default Rotas;