
import React, { useState } from 'react';
import DoctorProfile from './DoctorProfile';
import Appointments from './Appointments';
import PatientSearch from './PatientSearch';
import {Visits} from './Visits';
export const DoctorDashboard = () => {
  return (
    <div>
      <DoctorProfile />
      <Appointments />
      <Visits />
      <PatientSearch />
    </div>
  );
};


