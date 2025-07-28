import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#cc66ff', '#ff9900'];

const PieChartOverview = ({ data }) => {
  const totalIntake = data.reduce((sum, d) => sum + Number(d.intake), 0);
  const totalBurned = data.reduce((sum, d) => sum + Number(d.burned), 0);
  const pieData = [
    { name: 'Intake', value: totalIntake },
    { name: 'Burned', value: totalBurned },
  ];

  return (
    <PieChart width={200} height={200}>
      <Pie
        data={pieData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={70}
        label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartOverview;
