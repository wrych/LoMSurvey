import { Assessments, type Assessment } from "@/models/Assessment";
import { State, type States } from "@/models/State";
import {
  useAssessmentRepository,
  type AssessmentRepository,
} from "@/repositories/assessment";
import { ref, watch, type Ref } from "vue";
import { useAuthService, type AuthService } from "./auth";
import type { AuthUser } from "@/models/AuthUser";

class AssessmentService {
  private repository: AssessmentRepository;
  private authService: AuthService;
  private user: Ref<AuthUser | null>;

  private orderStates = (
    assessmentsByStates: Ref<Record<number, Assessments> | undefined>,
    states: Ref<States | undefined>,
    assessments: Ref<Assessments | undefined>
  ): void => {
    if (assessments.value) {
      assessments.value = {} as Assessments;
      if (!states.value) {
        states.value.states.forEach((state) => {
          assessments.value[state.id] = new Assessments(
            assessments.value.assessments.filter(
              (assessment: Assessment) => assessment.stateId === state.id
            )
          );
        });
      }
    }
  };

  getAssessmentsByStates = (): Ref<Assessments | undefined> => {
    const assessmentsByStates = ref<Record<string, Assessments> | undefined>(
      undefined
    );
    const assessments = this.getAllAssessments();
    watch(assessments, () => {
      const states = this.getAllStates();
      if (!states.value) {
        const unwatch = watch(states, () => {
          this.orderStates(assessmentsByStates, states, assessments);
          unwatch();
        });
      }
      this.orderStates(assessmentsByStates, states, assessments);
    });
    return assessments;
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
