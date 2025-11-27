import { Navigate, useParams } from "react-router-dom";

export default function RepresentanteSecurity({ children }) {
  const { id } = useParams();
  
  const pessoa = JSON.parse(localStorage.getItem("pessoa"))

  if (!pessoa) {
    return <Navigate to="/loginuser" replace/>
  }

  if (pessoa.id !== id) {
    return <Navigate to="/loginuser" replace/>
  }

  if (pessoa.tipo !== "representante") {
    return <Navigate to="/loginuser" replace/>
  }

  return children
}