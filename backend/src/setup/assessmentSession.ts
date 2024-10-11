import Assessment from "../models/Assessment.js";
import AssessmentSession from "../models/AssessmentSession.js";
import Dimension from "../models/Dimension";
import {
  create,
  createLevelandWeightValue,
  createWeightReasoning,
} from "../services/assessmentSession.js";

export const setupAssessmentSessions = async (
  assessment: Assessment,
  dimensions: Dimension[]
): Promise<AssessmentSession> => {
  const session = await create({
    assessmentId: assessment.id,
  });
  dimensions.forEach(async (dimension: Dimension) => {
    await createLevelandWeightValue({
      assessmentSessionId: session.id,
      dimensionId: dimension.id,
    });
  });
  await createWeightReasoning({ assessmentSessionId: session.id });
  return session;
};
