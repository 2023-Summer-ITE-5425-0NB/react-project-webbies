import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

// Sidebar component
const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
        <Link to="/Booking">Booking</Link>
        </li>
        <li>
          <Link to="/currency-converter">Currency Converter</Link>
        </li>
        <li>
          <Link to="/Language">Language</Link>
        </li>
        <li>
          <Link to="/UserGeneratedContentList">User Generated Content</Link>
        </li>
        <li>
          <Link to="/UserSubmissionForm">User Submission Form</Link>
        </li>
        <li>
        <Link to="/LocalTransportation">Local Transportation</Link>
        </li>
        
      </ul>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Sidebar />
    </div>
  );
};

export default Dashboard;
