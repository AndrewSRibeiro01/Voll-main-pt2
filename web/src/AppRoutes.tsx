import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import PaginaBase from "./Pages/Dashboard/PaginaBase";
import PaginaInicial from "./Pages/PaginaInicial";
import PaginaBaseFormulario from "./Pages/PaginaBaseFormulario";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<PaginaInicial />} />
                    <Route path="/dashboard" element={<Dashboard />} />
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