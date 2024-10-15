import { ref, toRef } from "vue";
import type { Ref } from "vue";

import { useAssessmentStore } from "@/stores/assessment";
import * as assessmentApi from "@/apis/assessment";
import * as assessmentSessionApi from "@/apis/assessmentSession";
import { Assessment, Assessments } from "@/models/Assessment";
import {
  AssessmentSessions,
  type AssessmentSession,
} from "@/models/AssessmentSession";
import { Dimension, Dimensions } from "@/models/Dimension";
import { Levels, type Level } from "@/models/Level";
import type { States } from "@/models/State";

export class AssessmentRepository {
  private store = useAssessmentStore();

  getLevelsByDimensionId = (id: number): Ref<Levels | undefined> => {
    const levels = ref<Levels | undefined>(undefined);
    if (this.store.levels?.levels) {
      const inStore = Object.values(this.store.levels.levels).filter(
        (level: Level) => level.dimensionId === id
      );
      if (inStore) {
        levels.value = new Levels(inStore);
      }
    }
    this.updateLevels(levels, id);
    return levels;
  };

  updateLevels = async (
    levels: Ref<Levels | undefined>,
    id: number
  ): Promise<void> => {
    if (!this.store.levels) {
      this.store.levels = new Levels([]);
    }
    this.store.levels = new Levels([
      ...Object.values(this.store.levels.levels),
      ...Object.values((await assessmentApi.getLevelsByDimensionId(id)).levels),
    ]);
    levels.value = new Levels(
      Object.values(this.store.levels.levels).filter(
        (level: Level) => level.dimensionId === id
      )
    );
  };

  getDimensionsByAssessmentId = (id: number): Ref<Dimensions | undefined> => {
    const dimensions = ref<Dimensions | undefined>(undefined);
    if (this.store.dimensions?.dimensions) {
      const inStore = Object.values(this.store.dimensions.dimensions).filter(
        (dimension: Dimension) => dimension.assessmentId === id
      );
      if (inStore) {
        dimensions.value = new Dimensions(inStore);
      }
    }
    this.updateDimensions(dimensions, id);
    return dimensions;
  };

  updateDimensions = async (
    dimensions: Ref<Dimensions | undefined>,
    id: number
  ): Promise<void> => {
    if (!this.store.dimensions) {
      this.store.dimensions = new Dimensions([]);
    }
    this.store.dimensions = new Dimensions([
      ...Object.values(this.store.dimensions.dimensions),
      ...Object.values(
        (await assessmentApi.getDimensionsByAssessmentId(id)).dimensions
      ),
    ]);
    dimensions.value = new Dimensions(
      Object.values(this.store.dimensions.dimensions).filter(
        (dimension: Dimension) => dimension.assessmentId === id
      )
    );
  };

  getAssessmentSessionById = (
    id: number
  ): Ref<AssessmentSession | undefined> => {
    if (this.store.assessmentSessions?.assessmentSessions[id] === undefined) {
      this.updateAssessmentSession(id);
    }
    return toRef(this.store.assessmentSessions!.assessmentSessions, id);
  };

  updateAssessmentSession = async (id: number): Promise<void> => {
    if (!this.store.assessmentSessions) {
      this.store.assessmentSessions = new AssessmentSessions([]);
    }
    this.store.assessmentSessions.assessmentSessions[id] =
      await assessmentSessionApi.getAssessmentSession(id);
  };

  getAssessmentById = (id: number): Ref<Assessment | undefined> => {
    if (this.store.assessments?.assessments[id] === undefined) {
      this.updateAssessment(id);
    }
    return toRef(this.store.assessments!.assessments, id);
  };

  updateAssessment = async (id: number): Promise<void> => {
    if (!this.store.assessments) {
      this.store.assessments = new Assessments([]);
    }
    this.store.assessments.assessments[id] =
      await assessmentApi.getAssessment(id);
  };

  getAllAssessmentSessions = (): Ref<AssessmentSessions | undefined> => {
    if (this.store.assessmentSessions === undefined) {
      this.updateAssessmentSessions();
    }
    return toRef(this.store, "assessmentSessions");
  };

  updateAssessmentSessions = async (): Promise<void> => {
    this.store.assessmentSessions =
      await assessmentSessionApi.getAssessmentSessions();
  };

  getAllAssessments = (): Ref<Assessments | undefined> => {
    if (this.store.assessments === undefined) {
      this.updateAssessments();
    }
    return toRef(this.store, "assessments");
  };

  updateAssessments = async (): Promise<void> => {
    this.store.assessments = await assessmentApi.getAllAssessments();
  };

  getAllStates = (): Ref<States | undefined> => {
    if (this.store.assessments === undefined) {
      this.updateStates();
    }
    return toRef(this.store, "states");
  };

  updateStates = async (): Promise<void> => {
    this.store.states = await assessmentSessionApi.getAllStates();
  };
}

let assessmentRepository: AssessmentRepository | null = null;

export const useAssessmentRepository = (): AssessmentRepository => {
  if (!assessmentRepository) {
    assessmentRepository = new AssessmentRepository();
  }
  return assessmentRepository;
};
