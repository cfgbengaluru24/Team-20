import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const prescrptionSchema = new Schema(
  {
    patientId: {
        type: String,
        required: true,
      },
    docterId: {
      type: String,
      required: true,
    },
    visitingDate: {
      type: Date,
      required: true,
    },
    refreshToken: {
      type: String,
    },

  },
  { timestamps: true }
);

export const Prescrption = mongoose.model("Prescrption",prescrptionSchema);
