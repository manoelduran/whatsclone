import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Splash } from "../pages/Splash";
function Rotas() {
  return (
    <Routes>
        <Route path=':email' element={<Home />} />
        <Route path="/" element={<Splash />} />
    </Routes>
  );
};
export default Rotas;