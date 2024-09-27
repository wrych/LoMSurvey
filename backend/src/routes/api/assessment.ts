import express, { Request, Response } from "express";
import * as assessmentService from "../../services/assessment.js";
import { ensureAuthenticated } from "./auth.js";

const router = express.Router();

router.get("/", ensureAuthenticated, async (req: Request, res: Response) => {
  const assessments = await assessmentService.findAll();
  res.status(200).json(assessments);
});

export default router;
