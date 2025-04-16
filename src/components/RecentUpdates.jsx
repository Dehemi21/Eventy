import React from "react";
import "./RecentUpdates.css";

const updates = [
  { update: "Photographer booked: Sarah Smith Photography", time: "2 hours ago" },
  { update: "15 new RSVP responses received", time: "Yesterday" },
  { update: "Venue tour scheduled for next week", time: "2 days ago" }
];

const RecentUpdates = () => {
  return (
    <section className="updates-section">
      <h2>Recent Updates</h2>
      <div className="update-list">
        {updates.map((item, index) => (
          <div className="update-card" key={index}>
            <p className="update-text">{item.update}</p>
            <p className="update-time">{item.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentUpdates;
