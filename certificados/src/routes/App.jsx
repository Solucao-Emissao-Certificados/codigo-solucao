import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Main from "../pages/Main"
import LoginRepresentante from "../pages/Login/LoginRepresentante"
import LoginUser from "../pages/Login/LoginUser"
import HomeUser from "../pages/Home/HomeUser"
import ProtectRoute from "../components/ProtectRoute"

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
      </Routes>
    </Router>
  )
}
