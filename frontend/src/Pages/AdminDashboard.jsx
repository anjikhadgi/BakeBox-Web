import { useNavigate } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import "../Pages/AdminDashboard.css";
function AdminDashboard() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication on mount

  
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h1 className="sidebar-title">Admin Panel</h1>
        <ul className="sidebar-menu">
          <li className="menu-item" onClick={() => navigate("/admin/customer")}>Customers</li>
          <li className="menu-item" onClick={() => navigate("/admin/booking")}>Bookings</li>
          <li className="menu-item" onClick={() => navigate("/admin/design")}>Designs</li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      <div className="main-content">
        <h1 className="welcome-message">Welcome to the Admin Dashboard</h1>
        <div className="stats-container">
          <div className="stat-card">
            <h3>Total Customers</h3>
            <p>{totalCustomers}</p>
          </div>
          <div className="stat-card">
            <h3>Total Bookings</h3>
            <p>{totalBookings}</p>
          </div>
          <div className="stat-card">
            <h3>Total Designs</h3>
            <p>{totalDesigns}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;