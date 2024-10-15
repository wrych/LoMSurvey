import express, { NextFunction, Request, Response } from "express";
import * as dimensionService from "../../services/dimension.js";
import * as assessmentService from "../../services/assessment.js";
import * as levelService from "../../services/level.js";
import { ensureAuthenticated } from "./auth.js";

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
  "/:assessmentId/",
  ensureAuthenticated,
  fetchAssessment,
  async (req: Request, res: Response) => {
    res.status(200).json(req.assessment!);
  }
);

router.get(
  "/:assessmentId/dimensions/",
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
  "/dimension/:dimensionId/",
  ensureAuthenticated,
  fetchDimension,
  async (req: Request, res: Response) => {
    res.status(200).json(req.dimension!);
  }
);

router.get(
  "/dimension/:dimensionId/levels/",
  ensureAuthenticated,
  fetchDimension,
  async (req: Request, res: Response) => {
    res.status(200).json(await levelService.findByDimension(req.dimension!));
  }
);

router.get(
  "/level/:levelId/",
  ensureAuthenticated,
  async (req: Request, res: Response) => {
    res
      .status(200)
      .json(await levelService.findById(parseInt(req.params.levelId)));
  }
);

export default router;
