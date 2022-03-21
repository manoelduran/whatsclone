import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Splash } from "../pages/Splash";
function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/:email" element={<Home />} />
    </Routes>
  );
};
export default Rotas;