import Assessment from "@/models/Assessment.js";
import AssessmentSession from "@/models/AssessmentSession.js";
import { create } from "@/services/assessmentSession.js";

export const setupAssessmentSessions = async (
  assessment: Assessment
): Promise<AssessmentSession> => {
  return await create({
    assessmentId: assessment.id,
  });
};
