import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Main from "../pages/Main"
import LoginRepresentante from "../pages/Login/LoginRepresentante"
import LoginUser from "../pages/Login/LoginUser"
import HomeUser from "../pages/Home/HomeUser"
import ProtectRoute from "../components/ProtectRoute"
import HomeRepresentante from "../pages/Home/HomeRepresentante"
import RepresentanteSecurity from "../components/RepresenanteSecurity"
import RegisterUser from "../pages/Register/RegisterUser"
import RegisterRepresentante from "../pages/Register/RegisterRepresentante"

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
      </Routes>
    </Router>
  )
}
