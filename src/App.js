import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/navbar";
import Services from "./Components/Services/Services";
import MoreServices from "./Components/Services/MoreServices";
import Login from "./Components/Admin/Login";
import AdminDashboard from "./Components/Admin/AdminDashboard";

const HomeAndServices = ()=> {
  return (
    <div>
      <Home />
      <Services />
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeAndServices />} />
          <Route
            path="/admin-login"
            element={<Login isAuthenticated={isAuthenticated} login={login} />}
          />
          <Route
            path="/admin-dashboard"
            element={
              isAuthenticated ? <AdminDashboard /> : <Navigate to="/admin-login" />
            }
          />
          <Route path="/admin-pixelfolio" element={<Navigate to="/admin-login" />} />
          <Route path="/services" element={<MoreServices />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
