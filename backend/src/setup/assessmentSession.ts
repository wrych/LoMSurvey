import Assessment from "@/models/Assessment.js";
import AssessmentSession from "@/models/AssessmentSession.js";
import Dimension from "@/models/Dimension";
import {
  create,
  createLevelandWeightValue,
} from "@/services/assessmentSession.js";

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
  return session;
};
