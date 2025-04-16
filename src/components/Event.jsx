import React from "react";
import "./Events.css";

const upcomingEvents = [
  {
    title: "Dehemi’s Birthday",
    date: "February 21, 2025",
    time: "4:30 PM onwards",
    venue: "Sir John Kotelawala Defence University"
  },
  {
    title: "Ama's Graduation Party",
    date: "March 10, 2025",
    time: "6:00 PM",
    venue: "Grand Ballroom, Hilton Colombo"
  }
];

const Events = () => {
  return (
    <section className="events-section">
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {upcomingEvents.map((event, index) => (
          <div className="event-card" key={index}>
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
