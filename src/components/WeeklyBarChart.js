import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const WeeklyBarChart = ({ data }) => {
  const past7Days = new Date();
  past7Days.setDate(past7Days.getDate() - 7);
  const filteredData = data.filter((item) => new Date(item.date) >= past7Days);

  return (
    <div>
      <h3>Weekly Health Trends:</h3>
      <BarChart width={500} height={300} data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="intake" fill="#9f5af7" name="calorieIntake" />
        <Bar dataKey="burned" fill="#a6f1c6" name="calorieBurned" />
      </BarChart>
    </div>
  );
};

export default WeeklyBarChart;
