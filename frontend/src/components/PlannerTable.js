function PlannerTable({ plans }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Difficulty</th>
          <th>Preparation</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        {plans.map((plan) => (
          <tr key={plan.id}>
            <td>{plan.subject_name}</td>
            <td>{plan.difficulty}</td>
            <td>{plan.preparation}%</td>
            <td>{plan.priority_score.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlannerTable;
