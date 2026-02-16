import { useEffect, useState } from "react";
import axios from "axios";
import PlannerForm from "./components/PlannerForm";
import PlannerTable from "./components/PlannerTable";
import "./App.css";

function App() {
  const [plans, setPlans] = useState([]);

  const fetchPlans = async () => {
    const res = await axios.get("http://localhost:5000/plans");
    setPlans(res.data);
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div className="container">
      <h1>AI Smart Study Planner</h1>
      <PlannerForm refresh={fetchPlans} />
      <PlannerTable plans={plans} />
    </div>
  );
}

export default App;
