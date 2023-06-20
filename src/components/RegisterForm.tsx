import React, { useState } from "react";
import './RegisterForm.css';

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Send registration request to the server
    // You can use libraries like axios to make HTTP requests
    // Example: axios.post("/api/register", { username, password })
    // Handle the response accordingly
  };

  return (
    <div className="register-form-container">
      <h2 className="register-form-title">Register</h2>
      <form onSubmit={handleRegister}>
        <input
          className="register-form-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="register-form-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-form-button" type="submit">Register</button>
      </form>
    </div>
  );
  
};

export default RegisterForm;
