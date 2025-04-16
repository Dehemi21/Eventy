import React from "react";
import "./Tips.css";

const tips = [
  {
    title: "Photography & Videography for Events",
    description: "Capture every moment with these professional photography tips."
  },
  {
    title: "Choosing the Perfect Venue",
    description: "Find the ideal space that matches your event style and guest size."
  },
  {
    title: "Catering Trends",
    description: "Discover the latest food trends to impress your guests."
  },
  {
    title: "Decoration",
    description: "Get creative with your event decorations and themes."
  }
];

const Tips = () => {
  return (
    <section className="tips-section">
      <h2>Expert Tips & Guides</h2>
      <div className="tips-grid">
        {tips.map((tip, index) => (
          <div className="tip-card" key={index}>
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tips;
