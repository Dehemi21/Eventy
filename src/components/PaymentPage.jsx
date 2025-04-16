import React, { useState } from "react";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    holderName: "",
    expiry: "",
    cvc: "",
    method: "Credit"
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Submitted ✅");
    // Integrate with backend/payment API here
  };

  return (
    <section className="payment-page">
      <h2>Payment Details</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="holderName"
          placeholder="Card Holder Name"
          value={formData.holderName}
          onChange={handleChange}
          required
        />
        <div className="row">
          <input
            type="text"
            name="expiry"
            placeholder="Exp. Date (MM/YY)"
            value={formData.expiry}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cvc"
            placeholder="CVC"
            value={formData.cvc}
            onChange={handleChange}
            required
          />
        </div>

        <div className="payment-methods">
          <label>
            <input
              type="radio"
              name="method"
              value="Bank"
              checked={formData.method === "Bank"}
              onChange={handleChange}
            />
            Bank
          </label>
          <label>
            <input
              type="radio"
              name="method"
              value="Credit"
              checked={formData.method === "Credit"}
              onChange={handleChange}
            />
            Credit
          </label>
          <label>
            <input
              type="radio"
              name="method"
              value="Paypal"
              checked={formData.method === "Paypal"}
              onChange={handleChange}
            />
            Paypal
          </label>
        </div>

        <div className="form-actions">
          <button type="submit" className="pay-btn">Pay Now</button>
          <button type="button" className="cancel-btn">Cancel</button>
        </div>
      </form>
    </section>
  );
};

export default PaymentPage;
