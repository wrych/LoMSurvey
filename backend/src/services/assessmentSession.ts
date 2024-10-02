import AssessmentSession, {
  AssessmentSessionAttributes,
} from "@/models/AssessmentSession.js";

export const findAll = async (): Promise<AssessmentSession[]> => {
  const sessions: AssessmentSession[] = await AssessmentSession.findAll();
  return sessions;
};

export const findById = async (
  id: number
): Promise<AssessmentSession | null> => {
  const session: AssessmentSession | null =
    await AssessmentSession.findByPk(id);
  return session;
};

const create = async (
  session: AssessmentSessionAttributes
): Promise<AssessmentSession> => {
  const newAssessment = await AssessmentSession.create(session);
  return newAssessment;
};

export { create };
