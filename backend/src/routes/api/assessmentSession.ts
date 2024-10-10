import express, { NextFunction, Request, Response } from "express";
import * as dimensionService from "@/services/dimension.js";
import * as assessmentSessionService from "@/services/assessmentSession.js";
import { ensureAuthenticated } from "./auth.js";
import { Value } from "@/models/Value.js";
import { Weight } from "@/models/Weight.js";

const fetchAssessmentSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const assessmentSessionId = parseInt(req.params.assessmentSessionId);
  const assessmentSession =
    await assessmentSessionService.findById(assessmentSessionId);
  if (!assessmentSession) {
    return res.status(404).json({ message: "assessment not found" });
  }
  req.assessmentSession = assessmentSession;
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
  const assessments = await assessmentSessionService.findAll();
  res.status(200).json(assessments);
});

router.get(
  "/:assessmentSessionId/",
  ensureAuthenticated,
  fetchAssessmentSession,
  async (req: Request, res: Response) => {
    res.status(200).json(req.assessmentSession!);
  }
);

router.get(
  "/:assessmentSessionId/dimension/:dimensionId/level",
  ensureAuthenticated,
  fetchAssessmentSession,
  fetchDimension,
  async (req: Request, res: Response) => {
    res.status(200).json(
      await Value.findOne({
        where: {
          assessmentSessionId: req.assessmentSession!.id,
          dimensionId: req.dimension!.id,
        },
      })
    );
  }
);

router.get(
  "/:assessmentSessionId/dimension/:dimensionId/weight",
  ensureAuthenticated,
  fetchAssessmentSession,
  fetchDimension,
  async (req: Request, res: Response) => {
    await Weight.findOne({
      where: {
        assessmentSessionId: req.assessmentSession!.id,
        dimensionId: req.dimension!.id,
      },
    });
  }
);

export default router;
