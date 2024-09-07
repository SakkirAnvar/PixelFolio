import React, { useState } from "react";
import "./login.css";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth.jsx"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const navigate = useNavigate();
  const [auth, setAuth] = useAuth(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);

        // Save the auth data (e.g., token) to the context
        setAuth({
          user: res.data.user,
          token: res.data.token,
        });

        // Save the auth data to local storage to persist login
        localStorage.setItem("auth", JSON.stringify({
          user: res.data.user,
          token: res.data.token,
        }));

        setRedirectToReferrer(true);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  if (redirectToReferrer || auth.token) {
    return <Navigate to="/admin-dashboard" />;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-form-container">
          <div className="login-header">
            <img
              className="login-logo"
              src="./Images/logominimal.png"
              alt="logo"
            />
            <h2 className="login-title">Welcome Back!</h2>
            <p className="login-subtitle">Sign In, The Gateway Awaits</p>
          </div>
          <form onSubmit={handleLogin} className="login-form">
            <div className="login-form-group">
              <label className="login-label">Email</label>
              <input
                type="text"
                placeholder="example@mail.com"
                className="login-input"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-form-group">
              <label className="login-label">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="login-input"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-options">
              <label className="login-checkbox-container">
                <input type="checkbox" className="login-checkbox" />
                <span className="login-checkbox-label">Remember me</span>
              </label>
              <a
                href="/admin-login/forgot-password"
                className="login-forgot-password"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="login-submit-button"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
