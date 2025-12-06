import { Navigate } from "react-router-dom";

export default function CertificadoSecurity({ children }) {
    const pessoa = JSON.parse(localStorage.getItem("pessoa"))

    if (!pessoa) {
        return <Navigate to="/loginrepresentante" replace />
    }

    if (pessoa.tipo !== "representante") {
        return <Navigate to="/loginrepresentante" replace />
    }

    return children
}