import { Assessment, Assessments } from "@/models/Assessment";
import { State, type States } from "@/models/State";
import {
  useAssessmentRepository,
  type AssessmentRepository,
} from "@/repositories/assessment";
import { ref, watch, type Ref } from "vue";
import type {
  AssessmentSession,
  AssessmentSessions,
} from "@/models/AssessmentSession";
import type { Dimensions } from "@/models/Dimension";
import type { Levels } from "@/models/Level";

class AssessmentService {
  private repository: AssessmentRepository;

  getDimensionsByAssessmentId = (id: number): Ref<Dimensions | undefined> => {
    return this.repository.getDimensionsByAssessmentId(id);
  };

  getLevelsByDimensionId = (id: number): Ref<Levels | undefined> => {
    return this.repository.getLevelsByDimensionId(id);
  };

  getAssessmentSessionById = (
    id: number
  ): Ref<AssessmentSession | undefined> => {
    return this.repository.getAssessmentSessionById(id);
  };

  private collectByState = (
    assessments: Ref<Assessments | undefined>,
    assessmentsByStates: Ref<Record<number, Assessments> | undefined>
  ) => {
    if (assessments.value) {
      const assessmentDict: Record<number, Assessment[]> = {};
      Object.values(assessments.value.assessments).forEach(
        (assessment: Assessment) => {
          if (!assessmentDict[assessment.stateId]) {
            assessmentDict[assessment.stateId] = [];
          }
          assessmentDict[assessment.stateId].push(assessment);
        }
      );
      assessmentsByStates.value = {};
      for (const [stateId, assessments] of Object.entries(assessmentDict)) {
        assessmentsByStates.value[parseInt(stateId)] = new Assessments(
          assessments
        );
      }
    }
  };

  getAssessmentById = (id: number): Ref<Assessment | undefined> => {
    return this.repository.getAssessmentById(id);
  };

  getAssessmentsByStates = (): Ref<Record<number, Assessments> | undefined> => {
    const assessments = this.getAllAssessments();
    const assessmentsByStates = ref<Record<number, Assessments> | undefined>(
      undefined
    );
    watch(
      () => assessments.value,
      () => {
        this.collectByState(assessments, assessmentsByStates);
      }
    );
    return assessmentsByStates;
  };

  getAllAssessments = (): Ref<Assessments | undefined> => {
    return this.repository.getAllAssessments();
  };

  getAllAssessmentSessions = (): Ref<AssessmentSessions | undefined> => {
    return this.repository.getAllAssessmentSessions();
  };

  getAllStates = (): Ref<States | undefined> => {
    return this.repository.getAllStates();
  };

  constructor(repository: AssessmentRepository = useAssessmentRepository()) {
    this.repository = repository;
  }
}

export const useAssessmentService = (): AssessmentService => {
  return new AssessmentService();
};
