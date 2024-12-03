import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Entities.css';
import AddEntity from './AddEntity';

function Entities() {
  const [entityType, setEntityType] = useState('aircraft'); // Default entity
  const [data, setData] = useState([]);

  // Fetch data from the backend when entityType changes
  useEffect(() => {
    axios.get(`http://localhost:5000/${entityType}`) // Replace with your backend API endpoint
      .then((response) => setData(response.data))
      .catch((error) => console.error(`Error fetching ${entityType} data`, error));
  }, [entityType]);

  // Handle delete operation
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/${entityType}/${id}`) // Replace with your backend DELETE endpoint
      .then(() => {
        setData(data.filter((item) => item.id !== id)); // Update state after deletion
      })
      .catch((error) => console.error(`Error deleting ${entityType}`, error));
  };

  return (
    <div className="entities">
      <h1>Manage {entityType.charAt(0).toUpperCase() + entityType.slice(1)}</h1>

      {/* Buttons to change the entity type */}
      <div className="entity-buttons">
        <button onClick={() => setEntityType('aircraft')}>Aircraft</button>
        <button onClick={() => setEntityType('airport')}>Airport</button>
        <button onClick={() => setEntityType('passenger')}>Passenger</button>
        <button onClick={() => setEntityType('city')}>City</button>
      </div>

      {/* Display the list of entities */}
      <ul className="entity-list">
        {data.map((item) => (
          <li key={item.id} className="entity-item">
            {JSON.stringify(item)} {/* Adjust based on backend response structure */}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Add new entity form */}
      <AddEntity entityType={entityType} onAdd={(newItem) => setData([...data, newItem])} />
    </div>
  );
}

export default Entities;
