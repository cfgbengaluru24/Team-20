
import React, { useState, useEffect } from 'react';

export const  Visits = () => {
  const [visits, setVisits] = useState({
    upcoming: [],
    ongoing: [],
    completed: [],
  });

  useEffect(() => {
    // Fetch Visits from API
    const fetchedVisits = {
      upcoming: ['Visit1', 'Visit2'],
      ongoing: ['Visit3'],
      completed: ['Visit4', 'Visit5'],
    };
    setVisits(fetchedVisits);
  }, []);

  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">Visits</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Upcoming</h3>
        <ul className="list-disc list-inside">
          {visits.upcoming.map((visit, index) => (
            <li key={index}>{visit}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Ongoing</h3>
        <ul className="list-disc list-inside">
          {visits.ongoing.map((visit, index) => (
            <li key={index}>{visit}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Completed</h3>
        <ul className="list-disc list-inside">
          {visits.completed.map((visit, index) => (
            <li key={index}>{visit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


