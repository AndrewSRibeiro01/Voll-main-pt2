import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import PaginaBase from "./Pages/Dashboard/PaginaBase";
import PaginaInicial from "./Pages/PaginaInicial";
import PaginaBaseFormulario from "./Pages/PaginaBaseFormulario";
import Login from "./Pages/Login";

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
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;