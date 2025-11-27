import { Navigate } from "react-router-dom";

export default function CertificadoSecurity({ children }) {
    const pessoa = JSON.parse(localStorage.getItem("pessoa"))

    if (!pessoa) {
        return <Navigate to="/loginuser" replace />
    }

    if (pessoa.tipo !== "usuario") {
        return <Navigate to="/loginuser" replace />
    }

    return children
}