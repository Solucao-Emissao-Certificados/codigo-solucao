import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { supabase } from "../../services/supabase";

export default function RepresentanteSecurity({ children }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkUser() {
      const { data, error } = await supabase
        .from("pessoa")
        .select("id, tipo")
        .eq("id", id)
        .eq("tipo", "representante")
        .single();

      if (error || !data) {
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }

      setLoading(false);
    }

    checkUser();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  return isAuthenticated ? children : <Navigate to="/logirepresentante" />;
}