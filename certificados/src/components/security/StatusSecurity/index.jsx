import { Navigate } from "react-router-dom";

export default function StatusSecurity({ children }) {
    const pessoa = JSON.parse(localStorage.getItem("pessoa"))

    if (!pessoa) {
        return <Navigate to="/loginruser" replace />
    }

    if (pessoa.tipo !== "usuario") {
        return <Navigate to="/loginruser" replace />
    }

    return children
}