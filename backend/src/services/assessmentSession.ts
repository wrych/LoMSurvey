import AssessmentSession, {
  AssessmentSessionAttributes,
} from "@/models/AssessmentSession.js";
import Dimension from "@/models/Dimension";
import { Value, ValueAttributes } from "@/models/Value";
import { Weight, WeightAttributes } from "@/models/Weight";

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

export const create = async (
  session: AssessmentSessionAttributes
): Promise<AssessmentSession> => {
  const newAssessment = await AssessmentSession.create(session);
  return newAssessment;
};

export const createLevelandWeightValue = async (sessionInfo: {
  assessmentSessionId: number;
  dimensionId: number;
}) => {
  await createLevelValue(sessionInfo);
  await createLevelWeight(sessionInfo);
};

const createLevelValue = async (value: ValueAttributes) => {
  Value.create(value);
};

const createLevelWeight = async (weight: WeightAttributes) => {
  Weight.create(weight);
};
