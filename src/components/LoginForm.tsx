import React, { useState } from "react";

import './LoginForm.css';

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Send login request to the server
    // You can use libraries like axios to make HTTP requests
    // Example: axios.post("/api/login", { username, password })
    // Handle the response accordingly
    onLogin();
  };

  return (
      <div className="login-form-container">
        <h2 className="login-form-title">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            className="login-form-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-form-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-form-button" type="submit">Login</button>
        </form>
      </div>
    );
    
  
};

export default LoginForm;
