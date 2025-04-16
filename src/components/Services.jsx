import React from "react";
import "./Services.css";

const services = [
  {
    title: "Wedding",
    description: "Streamline your event planning process with ease and efficiency.",
    icon: "💍"
  },
  {
    title: "Birthday",
    description: "Streamline your event planning process with ease and efficiency.",
    icon: "🎂"
  },
  {
    title: "Bride to Be",
    description: "Streamline your event planning process with ease and efficiency.",
    icon: "👰"
  },
  {
    title: "Party & Event",
    description: "Streamline your event planning process with ease and efficiency.",
    icon: "🎊"
  }
];

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
