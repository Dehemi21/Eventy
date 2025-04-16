import React, { useState } from "react";
import "./GuestList.css";

const GuestList = () => {
  const [adults, setAdults] = useState(21);
  const [kids, setKids] = useState(21);

  const totalGuests = adults + kids;

  return (
    <section className="guestlist-section">
      <h2>Guest List Management</h2>
      <p className="subtitle">Effortlessly organize your guests and RSVPs</p>

      <div className="guest-counts">
        <div className="guest-box">
          <label>Adults</label>
          <input
            type="number"
            value={adults}
            onChange={(e) => setAdults(parseInt(e.target.value) || 0)}
            min="0"
          />
        </div>

        <div className="guest-box">
          <label>Kids</label>
          <input
            type="number"
            value={kids}
            onChange={(e) => setKids(parseInt(e.target.value) || 0)}
            min="0"
          />
        </div>
      </div>

      <div className="total-display">
        <h3>Total Guests</h3>
        <p>{totalGuests}</p>
      </div>
    </section>
  );
};

export default GuestList;
