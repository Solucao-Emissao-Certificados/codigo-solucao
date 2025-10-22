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

        <Route path="/LoginRepresentante"
        Component={LoginRepresentante}
        />

        <Route path="/LoginUser"
        Component={LoginUser}
        />
        
      </Routes>
    </Router>
  )
}
