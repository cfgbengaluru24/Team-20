import React from 'react';

const DoctorProfile = () => {
  const doctor = {
    name: 'Dr. John Doe',
    specialization: 'Pediatric Dentistry',
    contact: '1234567891',
    dob: '12-10-1973',
    gender: 'male',
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/3 w-full mx-4">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-300 mb-4"></div>
          <h2 className="text-3xl font-bold mb-2">{doctor.name}</h2>
          <p className="text-gray-500 text-lg mb-2">{doctor.specialization}</p>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Contact:</span> {doctor.contact}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Date of Birth:</span> {doctor.dob}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Gender:</span> {doctor.gender}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
