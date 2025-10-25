import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "../pages/Main"
import LoginRepresentante from "../pages/Login/LoginRepresentante"
import LoginUser from "../pages/Login/LoginUser"
import './App.css'

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
        path="/home/:id"
        element={
          <ProtectRoute>
            <Home />
          </ProtectRoute>
        }
        />
      </Routes>
    </Router>
  )
}
