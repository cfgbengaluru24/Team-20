import mongoose, { Schema } from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

import { DoctorPrescription } from "../models/doctorprescription.model.js";

const createDoctorPrescription = asyncHandler(async (req, res) => {
  const {
    symptoms,
    oralPh,
    plagueIndex,
    gungivalIndex,
    thalassemia,
    vitaminDeficiency,
    IronDeficiency,
    prescription,
    image,
  } = req.body;
  console.log(req.body);
  if (
    !symptoms ||
    oralPh === undefined ||
    plagueIndex === undefined ||
    gungivalIndex === undefined ||
    thalassemia === undefined ||
    vitaminDeficiency === undefined ||
    !IronDeficiency ||
    !prescription
  ) {
    throw new ApiError(400, "All required fields must be provided");
  }

  const newPrescription = await DoctorPrescription.create({
    symptoms,
    oralPh,
    plagueIndex,
    gungivalIndex,
    thalassemia,
    vitaminDeficiency,
    IronDeficiency,
    prescription,
  });
  // const newPrescription = await DoctorPrescription.create({
  //   image: image,
  //   symptoms: "hi",
  //   oralPh: "hi",
  //   plagueIndex: "hi",
  //   gungivalIndex: "hi",
  //   thalassemia: true,
  //   vitaminDeficiency: true,
  //   IronDeficiency: false,
  //   prescription: "demo",
  // });

  res
    .status(201)
    .json(
      new ApiResponse(201, newPrescription, "Prescription created successfully")
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
