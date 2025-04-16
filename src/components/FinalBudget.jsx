import React from "react";
import "./FinalBudget.css";

const budgetData = [
  { category: "Decoration", estimate: 25000 },
  { category: "Catering", estimate: 25000 },
  { category: "Photography & Videography", estimate: 15000 },
  { category: "DJ & Music", estimate: 10000 }
];

const advancePayment = 25000;
const totalEstimate = budgetData.reduce((sum, item) => sum + item.estimate, 0);
const remaining = totalEstimate - advancePayment;

const FinalBudget = () => {
  return (
    <section className="final-budget">
      <h2>Final Budget Summary</h2>
      <div className="budget-box">
        {budgetData.map((item, index) => (
          <div className="budget-row" key={index}>
            <span>{item.category}</span>
            <span>${item.estimate.toLocaleString()}</span>
          </div>
        ))}

        <hr />

        <div className="budget-row highlight">
          <span>Total Estimate</span>
          <span>${totalEstimate.toLocaleString()}</span>
        </div>

        <div className="budget-row">
          <span>Advance Payment</span>
          <span>${advancePayment.toLocaleString()}</span>
        </div>

        <div className="budget-row remaining">
          <span>Remaining to be Paid</span>
          <span>${remaining.toLocaleString()}</span>
        </div>
      </div>

      <div className="final-actions">
        <button className="back-btn">Back</button>
        <button className="finish-btn">Finish</button>
      </div>
    </section>
  );
};

export default FinalBudget;
