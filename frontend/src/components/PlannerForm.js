import { useState } from "react";
import axios from "axios";

function PlannerForm({ refresh }) {
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [preparation, setPreparation] = useState(50);
  const [examDate, setExamDate] = useState("");

  const generatePlan = async () => {
    await axios.post("http://localhost:5000/generate", {
      subject_name: subject,
      difficulty,
      preparation,
      exam_date: examDate
    });

    alert("Plan Generated!");
    refresh();
  };

  return (
    <div className="form">
      <input type="text" placeholder="Subject Name" onChange={(e) => setSubject(e.target.value)} />
      <select onChange={(e) => setDifficulty(e.target.value)}>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
      <input type="number" placeholder="Preparation %" onChange={(e) => setPreparation(e.target.value)} />
      <input type="date" onChange={(e) => setExamDate(e.target.value)} />
      <button onClick={generatePlan}>Generate Plan</button>
    </div>
  );
}

export default PlannerForm;
