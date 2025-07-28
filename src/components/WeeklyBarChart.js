// File: src/components/WeeklyBarChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const WeeklyBarChart = ({ data }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const past7Days = new Date(today);
  past7Days.setDate(today.getDate() - 7);

  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.date);
    itemDate.setHours(0, 0, 0, 0);
    return itemDate >= past7Days && itemDate <= today;
  });

  if (filteredData.length === 0) return null;

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
