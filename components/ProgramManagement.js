import React from 'react';
import { Link } from 'react-router-dom';

const ProgramManagement = () => {
  const divisions = [
    { id: 1, title: 'Division 1' },
    { id: 2, title: 'Division 2' },
    { id: 3, title: 'Division 3' },
  ];

  return (
    <div>
      <h1>Program Management Page</h1>

      {/* Add New Division Button */}
      ProgramManagement
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

export default ProgramManagement;
