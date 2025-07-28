import React from "react";
import FeedbackDash from "./FeedbackDash";
import "./AdminPanel.css"

function AdminPanel() {
  return (
    <div className="header">
      <div className="header-left">
        <h2>Admin Panel</h2>
      </div>
      <div className="header-right">
        <button>Home</button>
        <button>Logout</button>
      </div>

      <FeedbackDash/>
    </div>
  );
}

export default AdminPanel;