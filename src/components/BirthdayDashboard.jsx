import React from "react";
import "./BirthdayDashboard.css";

const BirthdayDashboard = () => {
  return (
    <section className="dashboard">
      <h2>Welcome to the Birthday Party Planner!</h2>
      <p className="subtitle">Plan your perfect party with ease</p>

      <div className="summary-cards">
        <div className="card">
          <h3>Days</h3>
          <p>245</p>
        </div>
        <div className="card">
          <h3>Hours</h3>
          <p>08</p>
        </div>
        <div className="card">
          <h3>Minutes</h3>
          <p>32</p>
        </div>
        <div className="card">
          <h3>Budget Spent</h3>
          <p>$15,250</p>
        </div>
        <div className="card">
          <h3>Guest Count</h3>
          <p>121</p>
        </div>
        <div className="card">
          <h3>Tasks Complete</h3>
          <p>75%</p>
        </div>
        <div className="card">
          <h3>RSVPs Received</h3>
          <p>85%</p>
        </div>
      </div>
    </section>
  );
};

export default BirthdayDashboard;
