
import React, { useState, useEffect } from 'react';
import './App.css';
import FormModal from "./components/FormModal"
import WeeklyBarChart from './components/WeeklyBarChart';
import PieChartOverview from "./components/PieChartOverview";
import HealthStatsList from "./components/HealthStatsList";

const LOCAL_STORAGE_KEY = 'healthAndFitness';

function App() {
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedData) setData(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const addOrEditEntry = (entry) => {
    const updated = modalData
      ? data.map((item) => (item.date === modalData.date ? entry : item))
      : [...data, entry];
    setData(updated);
    setModalData(null);
    setShowModal(false);
  };

  const deleteEntry = (date) => {
    setData(data.filter((item) => item.date !== date));
  };

  const openEditForm = (entry) => {
    setModalData(entry);
    setShowModal(true);
  };

  return (
    <div className="App">
      <h1>Health And Fitness Tracker</h1>
      <div className="form-section">
        <div className="form-card">
          <h2>Update Today's Data</h2>
          <button onClick={() => setShowModal(true)}>+ Add data</button>
        </div>
        {data.length > 0 && <WeeklyBarChart data={data} />}
      </div>
      <div className="stats-section">
        <div className="recent-stats">
          <h2><em>Recent Health Statistics.</em></h2>
          <HealthStatsList data={data} onDelete={deleteEntry} onEdit={openEditForm} />
        </div>
        <div>
          <h2><em>Overall Data:</em></h2>
          <PieChartOverview data={data} />
        </div>
      </div>
      {showModal && (
        <FormModal
          onClose={() => {
            setModalData(null);
            setShowModal(false);
          }}
          onSubmit={addOrEditEntry}
          initialData={modalData}
        />
      )}
    </div>
  );
}

export default App;