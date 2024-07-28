import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export function DoctorConsultancy() {
  const [activeSection, setActiveSection] = useState(null);
  const [formData, setFormData] = useState({
    symptoms: "",
    oralPh: "",
    plagueIndex: "",
    gungivalIndex: "",
    thalassemia: false,
    vitaminDeficiency: false,
    ironDeficiency: false,
    prescription: "",
  });
  // const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.symptoms === "" ||
      (activeSection === "oral" &&
        (formData.oralPh === "" ||
          formData.plagueIndex === "" ||
          formData.gungivalIndex === "")) ||
      (activeSection === "Hb Level" &&
        formData.thalassemia === false &&
        formData.vitaminDeficiency === false &&
        formData.ironDeficiency === false) ||
      formData.prescription === ""
    ) {
      toast.error("All fields are required");
      return;
    }

    const data = new FormData();
    data.append("symptoms", formData.symptoms);
    data.append("oralPh", formData.oralPh);
    data.append("plagueIndex", formData.plagueIndex);
    data.append("gungivalIndex", formData.gungivalIndex);
    data.append("thalassemia", formData.thalassemia);
    data.append("vitaminDeficiency", formData.vitaminDeficiency);
    data.append("ironDeficiency", formData.ironDeficiency);
    data.append("prescription", formData.prescription);
    // if (image) {
    //   data.append("image", image);
    // }

    axios
      .post("http://localhost:8000/api/v1/doctorPrescriptions", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        toast.success(response.data.message);
        setFormData({
          symptoms: "",
          oralPh: "",
          plagueIndex: "",
          gungivalIndex: "",
          thalassemia: false,
          vitaminDeficiency: false,
          ironDeficiency: false,
          prescription: "",
        });
        // setImage(null);
        setImagePreview("");
      })
      .catch((error) => {
        toast.error("Error submitting prescription");
        console.error("There was an error submitting the form!", error);
      });
  };

  return (
    <div className="bg-slate-100 p-8 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label className="block mb-2 font-medium">Image</label>
              <div className="border p-4 h-32 flex justify-center items-center">
                <input type="file" name="image" onChange={handleImageChange} />
                {imagePreview && (
                  <img src={imagePreview} alt="Preview" className="h-32" />
                )}
              </div>
            </div>
            <div className="w-1/2 pl-2">
              <label className="block mb-2 font-medium">Symptoms</label>
              <textarea
                name="symptoms"
                value={formData.symptoms}
                onChange={handleChange}
                className="w-full border p-2 h-32 rounded"
              ></textarea>
            </div>
          </div>
          <div className="flex mb-4">
            <button
              type="button"
              className={`flex-1 py-2 mx-1 rounded ${
                activeSection === "oral"
                  ? "bg-blue-700 text-white"
                  : "bg-gray-400 text-white"
              }`}
              onClick={() => setActiveSection("oral")}
            >
              Oral
            </button>
            <button
              type="button"
              className={`flex-1 py-2 mx-1 rounded ${
                activeSection === "Hb Level"
                  ? "bg-blue-700 text-white"
                  : "bg-gray-400 text-white"
              }`}
              onClick={() => setActiveSection("Hb Level")}
            >
              Hb Level
            </button>
          </div>
          {activeSection === "oral" && (
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span>Oral pH Label :</span>
                <input
                  type="text"
                  name="oralPh"
                  value={formData.oralPh}
                  onChange={handleChange}
                  className="mr-2 m-2 border-2 rounded-md"
                />
              </div>
              <div className="flex items-center mb-2">
                <span>Plague Index :</span>
                <input
                  type="text"
                  name="plagueIndex"
                  value={formData.plagueIndex}
                  onChange={handleChange}
                  className="mr-2 m-2 border-2 rounded-md"
                />
              </div>
              <div className="flex items-center mb-2">
                <span>Gungival Index :</span>
                <input
                  type="text"
                  name="gungivalIndex"
                  value={formData.gungivalIndex}
                  onChange={handleChange}
                  className="mr-2 m-2 border-2 rounded-md"
                />
              </div>
            </div>
          )}
          {activeSection === "Hb Level" && (
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span>Thalassemia :</span>
                <input
                  type="checkbox"
                  name="thalassemia"
                  checked={formData.thalassemia}
                  onChange={handleChange}
                  className="mr-2 m-2 border-2 rounded-md"
                />
              </div>
              <div className="flex items-center mb-2">
                <span>Vitamin Deficiency :</span>
                <input
                  type="checkbox"
                  name="vitaminDeficiency"
                  checked={formData.vitaminDeficiency}
                  onChange={handleChange}
                  className="mr-2 m-2 border-2 rounded-md"
                />
              </div>
              <div className="flex items-center mb-2">
                <span>Iron Deficiency :</span>
                <input
                  type="checkbox"
                  name="ironDeficiency"
                  checked={formData.ironDeficiency}
                  onChange={handleChange}
                  className="mr-2 m-2 border-2 rounded-md"
                />
              </div>
            </div>
          )}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Prescription</label>
            <textarea
              name="prescription"
              value={formData.prescription}
              onChange={handleChange}
              className="w-full border p-2 h-24 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default DoctorConsultancy;
