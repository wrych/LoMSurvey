import express, { NextFunction, Request, Response } from "express";

declare module "express-serve-static-core" {
  interface Request {
    assessment?: Assessment;
    dimension?: Dimension;
  }
}
import * as dimensionService from "@/services/dimension.js";
import * as assessmentService from "@/services/assessment.js";
import * as levelService from "@/services/level.js";
import * as stateService from "@/services/state.js";
import { ensureAuthenticated } from "./auth.js";
import Assessment from "@/models/Assessment.js";
import Dimension from "@/models/Dimension.js";

const fetchAssessment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const assessmentId = parseInt(req.params.assessmentId);
  const assessment = await assessmentService.findById(assessmentId);
  if (!assessment) {
    return res.status(404).json({ message: "assessment not found" });
  }
  req.assessment = assessment;
  next();
};

const fetchDimension = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dimensionId = parseInt(req.params.dimensionId);
  const dimension = await dimensionService.findById(dimensionId);
  if (!dimension) {
    return res.status(404).json({ message: "dimension not found" });
  }
  req.dimension = dimension;
  next();
};

const router = express.Router();

router.get("/", ensureAuthenticated, async (req: Request, res: Response) => {
  const assessments = await assessmentService.findAll();
  res.status(200).json(assessments);
});

router.get(
  "/states/",
  ensureAuthenticated,
  async (req: Request, res: Response) => {
    const states = await stateService.findAllStates();
    res.status(200).json(states);
  }
);

router.get(
  "/:assessmentId/",
  ensureAuthenticated,
  fetchAssessment,
  async (req: Request, res: Response) => {
    res.status(200).json(req.assessment!);
  }
);

router.get(
  "/:assessmentId/dimension/",
  ensureAuthenticated,
  fetchAssessment,
  async (req: Request, res: Response) => {
    const dimensions = await dimensionService.findAssessmentDimensions(
      req.assessment!
    );
    res.status(200).json(dimensions);
  }
);

router.get(
  "/:assessmentId/dimension/:dimensionId/",
  ensureAuthenticated,
  fetchAssessment,
  fetchDimension,
  async (req: Request, res: Response) => {
    res.status(200).json(req.dimension!);
  }
);

router.get(
  "/:assessmentId/dimension/:dimensionId/level/",
  ensureAuthenticated,
  fetchAssessment,
  fetchDimension,
  async (req: Request, res: Response) => {
    res.status(200).json(await levelService.findByDimension(req.dimension!));
  }
);

router.get(
  "/:assessmentId/dimension/:dimensionId/level/:levelId/",
  ensureAuthenticated,
  fetchAssessment,
  fetchDimension,
  async (req: Request, res: Response) => {
    res
      .status(200)
      .json(await levelService.findById(parseInt(req.params.levelId)));
  }
);

export default router;
