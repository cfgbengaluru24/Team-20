import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { Volunteer } from "../models/volunteer.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { isValidObjectId } from "mongoose";

// Create a new volunteer
const createVolunteer = asyncHandler(async (req, res) => {
  const { fullName, experience, email, phoneNumber, city, dob, resume } =
    req.body;
  console.log(req.body);
  if (!fullName || !email || !phoneNumber || !city || !dob) {
    throw new ApiError(400, "All fields are required");
  }

  const volunteer = await Volunteer.create({
    fullName,
    experience,
    email,
    phoneNumber,
    city,
    resume,
  });

  res
    .status(201)
    .json(new ApiResponse(201, volunteer, "Volunteer created successfully"));
});

// Get all volunteers
const getAllVolunteers = asyncHandler(async (req, res) => {
  const volunteers = await Volunteer.find().sort({ createdAt: -1 });
  res
    .status(200)
    .json(new ApiResponse(200, volunteers, "Volunteers fetched successfully"));
});

// Get volunteer by ID
const getVolunteerById = asyncHandler(async (req, res) => {
  const { volunteerId } = req.params;
  if (!isValidObjectId(volunteerId)) {
    throw new ApiError(400, "Invalid volunteer ID");
  }

  const volunteer = await Volunteer.findById(volunteerId);
  if (!volunteer) {
    throw new ApiError(404, "Volunteer not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, volunteer, "Volunteer fetched successfully"));
});

// Update volunteer by ID
const updateVolunteer = asyncHandler(async (req, res) => {
  const { volunteerId } = req.params;
  if (!isValidObjectId(volunteerId)) {
    throw new ApiError(400, "Invalid volunteer ID");
  }

  const volunteer = await Volunteer.findByIdAndUpdate(volunteerId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!volunteer) {
    throw new ApiError(404, "Volunteer not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, volunteer, "Volunteer updated successfully"));
});

// Delete volunteer by ID
const deleteVolunteer = asyncHandler(async (req, res) => {
  const { volunteerId } = req.params;
  if (!isValidObjectId(volunteerId)) {
    throw new ApiError(400, "Invalid volunteer ID");
  }

  const volunteer = await Volunteer.findByIdAndDelete(volunteerId);
  if (!volunteer) {
    throw new ApiError(404, "Volunteer not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, volunteer, "Volunteer deleted successfully"));
});

export {
  createVolunteer,
  getAllVolunteers,
  getVolunteerById,
  updateVolunteer,
  deleteVolunteer,
};
