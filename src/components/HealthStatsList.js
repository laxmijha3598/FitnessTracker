import React from 'react';

const HealthStatsList = ({ data, onDelete, onEdit }) => {
  if (data.length === 0) return <p>No Progress to show!</p>;

  return data.map((entry) => (
    <div key={entry.date} className="entry">
      <p>{entry.description}</p>
      <p>Calories Intake = {entry.intake}  Calories Burned = {entry.burned}</p>
      <p>{entry.date}</p>
      <button onClick={() => onDelete(entry.date)}>❌</button>
      <button onClick={() => onEdit(entry)}>✏️</button>
    </div>
  ));
};

export default HealthStatsList;

