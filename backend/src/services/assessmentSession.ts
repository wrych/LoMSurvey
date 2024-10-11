import AssessmentSession, {
  AssessmentSessionAttributes,
} from "../models/AssessmentSession.js";
import { Value, ValueAttributes } from "../models/Value";
import { ValueReasoning } from "../models/ValueReasoning";
import { Weight, WeightAttributes } from "../models/Weight";
import {
  WeightReasoning,
  WeightReasoningAttributes,
} from "../models/WeightReasoning";

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
  await createLevelValueResioning(sessionInfo);
};

const createLevelValue = async (value: ValueAttributes) => {
  await Value.create(value);
};

const createLevelWeight = async (weight: WeightAttributes) => {
  await Weight.create(weight);
};

const createLevelValueResioning = async (value: ValueAttributes) => {
  await ValueReasoning.create(value);
};

export const createWeightReasoning = async (
  value: WeightReasoningAttributes
) => {
  await WeightReasoning.findOrCreate({
    where: {
      assessmentSessionId: value.assessmentSessionId,
    },
  });
};
