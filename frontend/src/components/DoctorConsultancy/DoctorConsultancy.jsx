import React, { useState } from "react";

function DoctorConsultancy() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="bg-slate-100 p-8 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="block mb-2 font-medium">Image</label>
            <div className="border p-4 h-32 flex justify-center items-center">
              <input type="file" />
            </div>
          </div>
          <div className="w-1/2 pl-2">
            <label className="block mb-2 font-medium">Symptoms</label>
            <div >
            <textarea className="w-full border p-2 h-32 rounded"></textarea>
            </div>
          </div>
        </div>
        <div className="flex mb-4">
          <button
            className={`flex-1 py-2 mx-1 rounded ${activeSection === "oral" ? "bg-blue-700 text-white" : "bg-gray-400 text-white"}`}
            onClick={() => setActiveSection("oral")}
          >
            Oral
          </button>
          <button
            className={`flex-1 py-2 mx-1 rounded ${activeSection === "Hb Level" ? "bg-blue-700 text-white" : "bg-gray-400 text-white"}`}
            onClick={() => setActiveSection("Hb Level")}
          >
            Hb Level
          </button>
        </div>
        {activeSection === "oral" && (
          <div className="mb-4">
            
            <div className="flex items-center mb-2">
            <span>Oral pH Label :</span>
              <input type="text" className="mr-2 m-2 border-2 rounded-md" />
              
            </div>
            <div className="flex items-center mb-2">
            <span>Plague Index :</span>
              <input type="text" className="mr-2 m-2 border-2 rounded-md" />
              
            </div>
            <div className="flex items-center mb-2">
            <span>Gungival Index :</span>
              <input type="text" className="mr-2 m-2 border-2 rounded-md" />
              
            </div>
          </div>
        )}
        {activeSection === "Hb Level" && (
          <div className="mb-4">
            
            <div className="flex items-center mb-2">
            <span>Thalassemia :</span>
              <input type="checkbox" className="mr-2 m-2 border-2 rounded-md" />
              
            </div>
            <div className="flex items-center mb-2">
            <span>Vitamin Deficiency :</span>
              <input type="checkbox" className="mr-2 m-2 border-2 rounded-md" />
              
            </div>
            <div className="flex items-center mb-2">
            <span>Iron Deficiency :</span>
              <input type="checkbox" className="mr-2 m-2 border-2 rounded-md" />
              
            </div>
          </div>
        )}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Prescription</label>
          <textarea className="w-full border p-2 h-24 rounded"></textarea>
        </div>
        <button className="bg-green-500 text-white py-2 px-4 rounded">Submit</button>
      </div>
    </div>
  );
}

export default DoctorConsultancy;
