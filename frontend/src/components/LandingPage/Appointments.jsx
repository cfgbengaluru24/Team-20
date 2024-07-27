
import React, { useState, useEffect } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState({
    upcoming: [],
    ongoing: [],
    completed: [],
  });

  useEffect(() => {
    // Fetch appointments from API
    const fetchedAppointments = {
      upcoming: ['Appointment 1', 'Appointment 2'],
      ongoing: ['Appointment 3'],
      completed: ['Appointment 4', 'Appointment 5'],
    };
    setAppointments(fetchedAppointments);
  }, []);

  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">Appointments</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Upcoming</h3>
        <ul className="list-disc list-inside">
          {appointments.upcoming.map((appointment, index) => (
            <li key={index}>{appointment}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Ongoing</h3>
        <ul className="list-disc list-inside">
          {appointments.ongoing.map((appointment, index) => (
            <li key={index}>{appointment}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Completed</h3>
        <ul className="list-disc list-inside">
          {appointments.completed.map((appointment, index) => (
            <li key={index}>{appointment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Appointments;
