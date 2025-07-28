import React, { useState } from 'react';

const FormModal = ({ onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    date: initialData?.date || '',
    intake: initialData?.intake || '',
    burned: initialData?.burned || '',
    description: initialData?.description || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal-content">
        <h3>{initialData ? "Let's see what you want to change!" : 'How Much Net Calories did you take Today?'}</h3>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          Calorie Intake:
          <input type="number" name="intake" placeholder="Enter Today's Calorie Intake" value={formData.intake} onChange={handleChange} required />
        </label>
        <label>
          Calorie Burned:
          <input type="number" name="burned" placeholder="Enter Today's Calorie Burned" value={formData.burned} onChange={handleChange} required />
        </label>
        <label>
          Short Description:
          <input type="text" name="description" placeholder="Enter a short description" value={formData.description} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default FormModal;