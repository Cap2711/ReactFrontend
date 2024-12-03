import React, { useState } from 'react';
import axios from 'axios';

function AddEntity({ entityType, onAdd }) {
  const [newData, setNewData] = useState('');

  const handleAdd = () => {
    axios.post(`http://localhost:5000/${entityType}`, { name: newData }) // Replace with your backend POST endpoint
      .then((response) => {
        onAdd(response.data); // Pass the new item back to the parent
        setNewData(''); // Clear input field
      })
      .catch((error) => console.error(`Error adding ${entityType}`, error));
  };

  return (
    <div className="add-entity">
      <input
        type="text"
        placeholder={`Add new ${entityType}`}
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddEntity;
