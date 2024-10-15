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
import * as assessmentService from "./assessment.js";

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

export const getState = async (id: number) => {
  const session = await findById(id);
  if (!session) {
    return null;
  }
  return session.stateId;
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
  const findOrCreate = async () => {
    await WeightReasoning.findOrCreate({
      where: {
        assessmentSessionId: value.assessmentSessionId,
      },
    });
  };
  for (let i = 0; i < 5; i++) {
    try {
      await findOrCreate();
    } catch (error) {
      console.warn(
        `Error creating weight reasoning, retrying (${i}/5), error: ${error}`
      );
    }
  }
};
