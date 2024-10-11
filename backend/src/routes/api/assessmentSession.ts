import express, { NextFunction, Request, Response } from "express";
import * as dimensionService from "../../services/dimension.js";
import * as assessmentSessionService from "../../services/assessmentSession.js";
import { ensureAuthenticated } from "./auth.js";
import { Value } from "../../models/Value.js";
import { Weight } from "../../models/Weight.js";
import { ValueReasoning } from "../../models/ValueReasoning.js";
import { WeightReasoning } from "../../models/WeightReasoning.js";

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
  "/:assessmentSessionId/weight-reasoning",
  ensureAuthenticated,
  fetchAssessmentSession,
  async (req: Request, res: Response) => {
    res.status(200).json(
      await WeightReasoning.findOne({
        where: { assessmentSessionId: req.assessmentSession!.id },
      })
    );
  }
);

router.post(
  "/:assessmentSessionId/weight-reasoning",
  ensureAuthenticated,
  fetchAssessmentSession,
  async (req: Request, res: Response) => {
    const wr = await WeightReasoning.findOne({
      where: { assessmentSessionId: req.assessmentSession!.id },
    });
    if (!wr) {
      return res.status(404).json({ message: "weight reasoning not found" });
    }
    wr.text = req.body.value;
    wr.save();
    res.status(200).json(wr);
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

router.post(
  "/:assessmentSessionId/dimension/:dimensionId/level",
  ensureAuthenticated,
  fetchAssessmentSession,
  fetchDimension,
  async (req: Request, res: Response) => {
    const level = await Value.findOne({
      where: {
        assessmentSessionId: req.assessmentSession!.id,
        dimensionId: req.dimension!.id,
      },
    });
    if (!level) {
      return res.status(404).json({ message: "level not found" });
    }
    level.value = req.body.value;
    level.save();
    res.status(200).json(level);
  }
);

router.get(
  "/:assessmentSessionId/dimension/:dimensionId/weight",
  ensureAuthenticated,
  fetchAssessmentSession,
  fetchDimension,
  async (req: Request, res: Response) => {
    res.status(200).json(
      await Weight.findOne({
        where: {
          assessmentSessionId: req.assessmentSession!.id,
          dimensionId: req.dimension!.id,
        },
      })
    );
  }
);

router.post(
  "/:assessmentSessionId/dimension/:dimensionId/weight",
  ensureAuthenticated,
  fetchAssessmentSession,
  fetchDimension,
  async (req: Request, res: Response) => {
    const weight = await Weight.findOne({
      where: {
        assessmentSessionId: req.assessmentSession!.id,
        dimensionId: req.dimension!.id,
      },
    });
    if (!weight) {
      return res.status(404).json({ message: "weight not found" });
    }
    weight.value = req.body.value;
    weight.save();
    res.status(200).json(weight);
  }
);

router.get(
  "/:assessmentSessionId/dimension/:dimensionId/reasoning",
  ensureAuthenticated,
  fetchAssessmentSession,
  fetchDimension,
  async (req: Request, res: Response) => {
    res.status(200).json(
      await ValueReasoning.findOne({
        where: {
          assessmentSessionId: req.assessmentSession!.id,
          dimensionId: req.dimension!.id,
        },
      })
    );
  }
);

router.post(
  "/:assessmentSessionId/dimension/:dimensionId/reasoning",
  ensureAuthenticated,
  fetchAssessmentSession,
  fetchDimension,
  async (req: Request, res: Response) => {
    const reasoning = await ValueReasoning.findOne({
      where: {
        assessmentSessionId: req.assessmentSession!.id,
        dimensionId: req.dimension!.id,
      },
    });
    if (!reasoning) {
      return res.status(404).json({ message: "reaonsing not found" });
    }
    reasoning.text = req.body.value;
    reasoning.save();
    res.status(200).json(reasoning);
  }
);

export default router;
