import express from "express";

import authRouter from "./auth.js";
import assessmentRouter from "./assessment.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the LoM Survery API!" });
});

router.use("/auth", authRouter);
router.use("/assessment", assessmentRouter);

export default router;
