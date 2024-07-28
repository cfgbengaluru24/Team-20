import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";

import { createVolunteer } from "../controllers/volunteer.controller.js";
const router = Router();

router.route("/").post(
  upload.fields([
    {
      name: "resume",
      maxCount: 1,
    },
  ]),

  createVolunteer
);

export default router;
