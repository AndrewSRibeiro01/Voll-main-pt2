import { Outlet } from "react-router-dom";
import Rodape from "../../../components/Rodape";
import Cabecalho from "../../../components/Cabecalho";

export default function PaginaBase() {
    return (
        <>
            <Cabecalho />
            <main>
                <Outlet />
            </main>
            <Rodape />
        </>
    )
}