import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Main from "../pages/Main"
import LoginRepresentante from "../pages/Login/LoginRepresentante"
import LoginUser from "../pages/Login/LoginUser"
import HomeUser from "../pages/Home/HomeUser"

import ProtectRoute from "../components/security/ProtectRoute"
import RepresentanteSecurity from "../components/security/RepresentanteSecurity"
import CertificadoSecurity from "../components/security/CertificadoSecurity"

import HomeRepresentante from "../pages/Home/HomeRepresentante"
import RegisterUser from "../pages/Register/RegisterUser"
import RegisterRepresentante from "../pages/Register/RegisterRepresentante"
import DocumentPages from "../pages/DocumentPage"
import AssinarDocumento from "../pages/AssinarDocumento"
import StatusSecurity from "../components/security/StatusSecurity"
import StatusPage from "../pages/StatusPage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"
        Component={Main}
        />

        <Route path="/loginrepresentante"
        Component={LoginRepresentante}
        />

        <Route path="/loginuser"
        Component={LoginUser}
        />
        
        <Route 
        path="/homeuser/:id"
        element={
          <ProtectRoute>
            <HomeUser />
          </ProtectRoute>
        }
        />
        <Route 
        path="/homerepresentante/:id"
        element={
          <RepresentanteSecurity>
            <HomeRepresentante />
          </RepresentanteSecurity>
        }
        />
        <Route path="/registeruser"
        element={
          <RegisterUser />
        }
        />
        <Route path="/registerrepresentante"
        element={
          <RegisterRepresentante />
        }
        />
        <Route path="/certificado/:id"
        element={
          <CertificadoSecurity>
            <DocumentPages />
          </CertificadoSecurity>
        }
        />
        <Route path="/status/:id"
        element={
          <StatusSecurity>
            <StatusPage />
          </StatusSecurity>
        }
        />


        <Route path="/assinatura/:id"
        element={
          <CertificadoSecurity>
            <AssinarDocumento />
          </CertificadoSecurity>
        }
        />
      </Routes>
    </Router>
  )
}
