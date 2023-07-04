import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import PaginaBase from "./Pages/Dashboard/PaginaBase";
import PaginaInicial from "./Pages/PaginaInicial";
import PaginaBaseFormulario from "./Pages/PaginaBaseFormulario";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import RotaPrivada from "./utils/RotaPrivada";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<PaginaInicial />} />
                    <Route element={<RotaPrivada />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Route>
                <Route path="/" element={<PaginaBaseFormulario />} >
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;