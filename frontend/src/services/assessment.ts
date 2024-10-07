import { Assessment, Assessments } from "@/models/Assessment";
import { State, type States } from "@/models/State";
import {
  useAssessmentRepository,
  type AssessmentRepository,
} from "@/repositories/assessment";
import { ref, watch, type Ref } from "vue";
import { useAuthService, type AuthService } from "./auth";
import type { AuthUser } from "@/models/AuthUser";
import type { AssessmentSession } from "@/models/AssessmentSession";

class AssessmentService {
  private repository: AssessmentRepository;
  private authService: AuthService;
  private user: Ref<AuthUser | undefined | null>;

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
    if (!this.user.value) {
      const unwatch = watch(this.user, () => {
        if (this.user.value) {
          this.repository.updateAssessments();
          unwatch();
        }
      });
    }
    return this.repository.getAllAssessments(this.user.value ? false : true);
  };

  getAllStates = (): Ref<States | undefined> => {
    if (!this.user.value) {
      const unwatch = watch(this.user, () => {
        if (this.user.value) {
          this.repository.updateStates();
          unwatch();
        }
      });
    }
    return this.repository.getAllStates(this.user.value ? false : true);
  };

  constructor(
    repository: AssessmentRepository = useAssessmentRepository(),
    authService: AuthService = useAuthService()
  ) {
    this.repository = repository;
    this.authService = authService;
    this.user = this.authService.getUser();
  }
}

export const useAssessmentService = (): AssessmentService => {
  return new AssessmentService();
};
