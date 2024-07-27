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
    prescription:{
        type: String,
        required:true,
    }
  },
  { timestamps: true }
);

const doctorprescription = mongoose.model("doctorprescription", doctorprescriptionSchema);

export { doctorprescription };
