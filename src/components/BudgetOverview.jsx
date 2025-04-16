import React from "react";
import "./BudgetOverview.css";

const budgetItems = [
  { category: "Venue", amount: 8000 },
  { category: "Catering", amount: 4500 },
  { category: "Photography", amount: 2500 }
];

const total = budgetItems.reduce((sum, item) => sum + item.amount, 0);

const BudgetOverview = () => {
  return (
    <section className="budget-section">
      <h2>Budget Overview</h2>
      <div className="budget-table">
        {budgetItems.map((item, index) => (
          <div className="budget-row" key={index}>
            <span className="category">{item.category}</span>
            <span className="amount">${item.amount.toLocaleString()}</span>
          </div>
        ))}
        <div className="budget-row total">
          <span className="category">Total Budget</span>
          <span className="amount">${total.toLocaleString()}</span>
        </div>
      </div>
    </section>
  );
};

export default BudgetOverview;
