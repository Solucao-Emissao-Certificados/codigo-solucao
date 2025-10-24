import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom"

function ProtectRoute({ children }) {
    const [loading, setLoading] = useState(true);
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   useEffect(() => {
    async function checkSession() {
        const { data } = await supabase.auth.getSession();
        setIsAuthenticated(!!data.session);
        setLoading(false)
    }
    checkSession();
   }, []);
   if (loading) return <p>Carregando....</p>
   return isAuthenticated ? children : <Navigate to='/home'/>

}