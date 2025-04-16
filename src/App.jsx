import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Events from "./components/Events";
import Tips from "./components/Tips";
import Footer from "./components/Footer";
import BirthdayDashboard from "./components/BirthdayDashboard";
import UpcomingTasks from "./components/UpcomingTasks";
import RecentUpdates from "./components/RecentUpdates";
import BudgetOverview from "./components/BudgetOverview";
import PaymentPage from "./components/PaymentPage";
import GuestList from "./components/GuestList";
import DecorationIdeas from "./components/DecorationIdeas";
import FinalBudget from "./components/FinalBudget";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Events />
            <Tips />
            <Footer />
          </>
        } />

        <Route path="/birthday" element={
          <>
            <BirthdayDashboard />
            <UpcomingTasks />
            <RecentUpdates />
            <BudgetOverview />
          </>
        } />

        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/guests" element={<GuestList />} />
        <Route path="/decoration" element={<DecorationIdeas />} />
        <Route path="/budget" element={<FinalBudget />} />
      </Routes>
    </Router>
  );
}

export default App;
