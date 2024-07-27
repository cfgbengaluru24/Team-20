import mongoose, { Schema } from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

// Define the schema
const doctorprescriptionSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    symptoms: {
      type: String,
      required: true,
    },
    oralPh: {
      type: mongoose.Schema.Types.Decimal128,
      required: true,
    },
    plagueIndex: {
      type: Number,
      required: true,
    },
    gungivalIndex: {
      type: Number,
      required: true,
    },
    thalassemia: {
      type: Boolean,
      required: true,
    },
    vitaminDeficiency: {
      type: Boolean,
      required: true,
    },
    IronDeficiency: {
      type: String,
      required: true,
    },
    prescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create the model
const DoctorPrescription = mongoose.model(
  "DoctorPrescription",
  doctorprescriptionSchema
);



// Create a new doctor prescription
const createDoctorPrescription = asyncHandler(async (req, res) => {
  const prescription = await DoctorPrescription.create(req.body);
  res
    .status(201)
    .json(
      new ApiResponse(201, prescription, "Prescription created successfully")
    );
});

// Get all doctor prescriptions
const getAllDoctorPrescriptions = asyncHandler(async (req, res) => {
  const prescriptions = await DoctorPrescription.find();
  res
    .status(200)
    .json(
      new ApiResponse(200, prescriptions, "Prescriptions fetched successfully")
    );
});

// Get a single doctor prescription by ID
const getDoctorPrescriptionById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid prescription ID");
  }
  const prescription = await DoctorPrescription.findById(id);
  if (!prescription) {
    throw new ApiError(404, "Prescription not found");
  }
  res
    .status(200)
    .json(
      new ApiResponse(200, prescription, "Prescription fetched successfully")
    );
});

// Update a doctor prescription by ID
const updateDoctorPrescription = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid prescription ID");
  }
  const prescription = await DoctorPrescription.findByIdAndUpdate(
    id,
    req.body,
    { new: true, runValidators: true }
  );
  if (!prescription) {
    throw new ApiError(404, "Prescription not found");
  }
  res
    .status(200)
    .json(
      new ApiResponse(200, prescription, "Prescription updated successfully")
    );
});

// Delete a doctor prescription by ID
const deleteDoctorPrescription = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid prescription ID");
  }
  const prescription = await DoctorPrescription.findByIdAndDelete(id);
  if (!prescription) {
    throw new ApiError(404, "Prescription not found");
  }
  res
    .status(200)
    .json(
      new ApiResponse(200, prescription, "Prescription deleted successfully")
    );
});

export {
  createDoctorPrescription,
  getAllDoctorPrescriptions,
  getDoctorPrescriptionById,
  updateDoctorPrescription,
  deleteDoctorPrescription,
};
