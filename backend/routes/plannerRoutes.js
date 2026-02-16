const express = require("express");
const router = express.Router();
const db = require("../db");

function calculatePriority(difficulty, preparation, examDate) {
  const today = new Date();
  const exam = new Date(examDate);
  const daysRemaining = Math.ceil((exam - today) / (1000 * 60 * 60 * 24));

  const difficultyWeight =
    difficulty === "Hard" ? 3 :
    difficulty === "Medium" ? 2 : 1;

  const priority =
    difficultyWeight * (100 - preparation) / (daysRemaining || 1);

  return priority;
}

router.post("/generate", (req, res) => {
  const { subject_name, difficulty, preparation, exam_date } = req.body;

  const priority = calculatePriority(difficulty, preparation, exam_date);

  const sql = `
    INSERT INTO subjects
    (subject_name, difficulty, preparation, exam_date, priority_score)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [subject_name, difficulty, preparation, exam_date, priority], (err) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Plan Generated",
      priority_score: priority
    });
  });
});

router.get("/plans", (req, res) => {
  db.query(
    "SELECT * FROM subjects ORDER BY priority_score DESC",
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    }
  );
});

module.exports = router;
