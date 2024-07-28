import mongoose, { Schema } from "mongoose";

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
      type: String,
      required: true,
    },

    plagueIndex: {
      type: String,
      required: true,
    },

    gungivalIndex: {
      type: String,
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
      type: Boolean,
      required: true,
    },
    prescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const DoctorPrescription = mongoose.model(
  "DoctorPrescription",
  doctorprescriptionSchema
);

export { DoctorPrescription };
