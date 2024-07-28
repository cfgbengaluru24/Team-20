import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";

import {
  createDoctorPrescription,
  getAllDoctorPrescriptions,
  getDoctorPrescriptionById,
} from "../controllers/doctorprescription.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();
router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/").post(
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  createDoctorPrescription
);

router.route("/getDoctorPrescription").get(getAllDoctorPrescriptions);
router.route("/getDoctorPrescriptionById").get(getDoctorPrescriptionById);

export default router;
