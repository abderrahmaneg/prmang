import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProgramManagementPage = () => {
  const [divisions, setDivisions] = useState([]);
  
  useEffect(() => {
    // Fetch divisions from the database
    const fetchDivisions = async () => {
//      try {
   //     const response = await fetch('/api/divisions');
     //   const data = await response.json();
   //     setDivisions(data);
   //   } catch (error) {
   //     console.error('Error fetching divisions:', error);
     // }
    };

    fetchDivisions();
  }, []);

  return (
    <div>
      <h1>Program Management Page</h1>

      {/* Add New Division Button */}
      <Link to="/add-division">
        <button>Add New Division</button>
      </Link>

      {/* List of Divisions */}
      <ul>
        {divisions.map((division) => (
          <li key={division.id}>
            <span>{division.title}</span>
            <Link to={`/division/${division.id}/sections`}>
              <button>View Sections</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramManagementPage;
