import React, { useState } from 'react';

const VolunteeringPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
    dob: '',
    email: '',
    phone: '',
    city: '',
  });

  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.experience) errors.experience = 'Experience is required';
    if (!formData.dob) errors.dob = 'Date of Birth is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.city) errors.city = 'City is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form data:', formData);
      // Handle form submission (e.g., send to server)
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1691157915037-68576ba139b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8')` }}>
      {!showForm && (
        <div className="flex items-center justify-center h-screen">
          <h1 
            className="text-4xl font-bold text-black cursor-pointer"
            onClick={() => setShowForm(true)}
          >
            Volunteer Now!!
          </h1>
        
          
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 backdrop-blur-sm">
          <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold text-gray-900">Volunteering Form</h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Experience:</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
                {errors.experience && <span className="text-red-500 text-sm">{errors.experience}</span>}
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Date of Birth:</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
                {errors.dob && <span className="text-red-500 text-sm">{errors.dob}</span>}
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Phone Number:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">City:</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
                {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
              </div>
              <div className="flex flex-col">
                <label className=''>Resume:</label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs " />
            
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteeringPage;
