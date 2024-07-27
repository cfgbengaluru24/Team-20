
import React, { useState } from 'react';

const PatientSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [patientRecords, setPatientRecords] = useState([]);

  const handleSearch = () => {
    // Fetch patient records based on search term
    const fetchedRecords = [
      { name: 'Patient A', progress: 'Good' },
      { name: 'Patient B', progress: 'Needs Attention' },
    ];
    setPatientRecords(fetchedRecords);
  };

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-bold mb-4">Search Patient Records</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded p-2 w-full mb-4"
        placeholder="Enter patient name"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        Search
      </button>
      <div className="mt-4">
        {patientRecords.map((record, index) => (
          <div key={index} className="border rounded p-4 mb-2">
            <h3 className="text-lg font-semibold">{record.name}</h3>
            <p>{record.progress}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientSearch;
