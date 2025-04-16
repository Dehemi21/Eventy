import React from "react";
import "./UpcomingTasks.css";

const tasks = [
  { task: "Book Photographer", due: "3 days" },
  { task: "Order Birthday Cake", due: "5 days" },
  { task: "Send Invitations", due: "7 days" }
];

const UpcomingTasks = () => {
  return (
    <section className="tasks-section">
      <h2>Upcoming Tasks</h2>
      <ul className="task-list">
        {tasks.map((item, index) => (
          <li key={index} className="task-item">
            <span className="task-name">{item.task}</span>
            <span className="task-due">Due in {item.due}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpcomingTasks;
