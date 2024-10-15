import { computed, ref, watch, type Ref } from "vue";
import { useAssessmentService } from "./assessment";
import type { Assessment } from "@/models/Assessment";
import type { Dimension, Dimensions } from "@/models/Dimension";
import type { AssessmentSession } from "@/models/AssessmentSession";
import type { Levels } from "@/models/Level";
import {
  AssessmentSessionRepository,
  useAssessmentSessionRepository,
} from "@/repositories/assessmentSession";
import type { LevelValue } from "@/models/LevelValue";
import * as assessmentSessionApi from "@/apis/assessmentSession";
import type { ValueReasoning } from "@/models/ValueReasoning";
import type { LevelWeight } from "@/models/LevelWeight";
import type { WeightReasoning } from "@/models/WeightReasoning";
import { useAuthService, type AuthService } from "./auth";
import type { AssessmentSessionAuth } from "@/models/AssessmentSessionAuth";

const assessmentService = useAssessmentService();

export class AssessmentSessionService {
  id!: Ref<number>;
  basePath!: Ref<string>;
  auth!: AuthService;
  repository!: AssessmentSessionRepository;
  assessmentSession = ref<AssessmentSession | undefined>(undefined);
  permissions = ref<AssessmentSessionAuth | undefined>(undefined);
  assessment = ref<Assessment | undefined>(undefined);
  dimensions = ref<Dimensions | undefined>(undefined);
  navEntries = computed<{ title: string; path: string; isTopLevel: boolean }[]>(
    () => {
      return this.updateNavEntries(this.basePath.value);
    }
  );
  levelValues: Record<number, Ref<LevelValue>> = {};
  levelReasonings: Record<number, Ref<ValueReasoning>> = {};
  levelWeights: Record<number, Ref<LevelWeight>> = {};
  weightReasoning = ref<WeightReasoning | undefined>(undefined);

  constructor(
    id: Ref<number>,
    basePath: Ref<string>,
    auth: AuthService = useAuthService(),
    repository: AssessmentSessionRepository = useAssessmentSessionRepository()
  ) {
    this.id = id;
    this.basePath = basePath;
    this.auth = auth;
    this.repository = repository;
    watch(
      this.id,
      () => {
        this.load();
      },
      { immediate: true }
    );
  }

  load = () => {
    this.assessmentSession = assessmentService.getAssessmentSessionById(
      this.id.value
    );
    this.getAuthorisation();
    watch(this.assessmentSession, () => {
      if (this.assessmentSession.value) {
        const a = assessmentService.getAssessmentById(
          this.assessmentSession.value.assessmentId
        );
        this.bindWeightReasoning(this.assessmentSession.value.id);
        watch(a, () => {
          this.assessment.value = a.value;
        });
      }
    });

    watch(this.assessment, () => {
      if (this.assessment.value) {
        const ds = assessmentService.getDimensionsByAssessmentId(
          this.assessment.value.id
        );
        watch(ds, () => {
          if (!ds.value) {
            return;
          }
          this.dimensions.value = ds.value;
          Object.values(ds.value!.dimensions).forEach((d) => {
            this.bindLevel(d);
            this.bindReasoning(d);
            this.bindWeights(d);
          });
        });
      }
    });
  };

  updateNavEntries = (
    basePath: string
  ): { title: string; path: string; isTopLevel: boolean }[] => {
    const navEntries = [];
    navEntries.push({
      title: "Overview",
      isTopLevel: true,
      path: `${basePath}/`,
    });
    if (this.permissions.value?.canEdit || true) {
      console.warn("workaround, fix it!");
      if (this.dimensions.value) {
        Object.values(this.dimensions.value!.dimensions).forEach((d) => {
          navEntries.push({
            title: `${d.title}`,
            isTopLevel: true,
            path: `${basePath}/dimension/${d.id}`,
          });
          navEntries.push({
            title: `${d.title} Level`,
            path: `${basePath}/dimension/${d.id}/level`,
          });
          navEntries.push({
            title: `${d.title} Reasoning`,
            path: `${basePath}/dimension/${d.id}/reasoning`,
          });
        });
      }
      navEntries.push({
        title: "Weights",
        isTopLevel: true,
        path: `${basePath}/weights`,
      });
    }
    navEntries.push({
      title: "Summary",
      isTopLevel: true,
      path: `${basePath}/summary`,
    });
    return navEntries;
  };

  getAuthorisation = (): void => {
    const getPermissions = async () => {
      this.permissions.value = await assessmentSessionApi.getPermissions(
        this.id.value
      );
    };
    getPermissions();
  };

  getLevels = (
    dimension: Ref<Dimension | undefined>
  ): Ref<Levels | undefined> => {
    const levels = ref<Levels | undefined>(undefined);
    watch(
      () => dimension.value,
      () => {
        if (dimension.value) {
          const lvl = assessmentService.getLevelsByDimensionId(
            dimension.value.id
          );
          watch(lvl, () => {
            levels.value = lvl.value;
          });
        }
      },
      { immediate: true }
    );
    return levels;
  };

  bindLevel = (dimension: Dimension) => {
    if (!this.levelValues[dimension.id]) {
      this.levelValues[dimension.id] = this.repository.getLevelValue(
        this.assessmentSession.value!.id,
        dimension.id
      );
      watch(
        () => this.levelValues[dimension.id].value.value,
        async () => {
          assessmentSessionApi.setLevel(this.levelValues[dimension.id].value);
        }
      );
    }
    return this.levelValues[dimension.id];
  };

  bindReasoning = (dimension: Dimension) => {
    if (!this.levelReasonings[dimension.id]) {
      this.levelReasonings[dimension.id] = this.repository.getValueReasoning(
        this.assessmentSession.value!.id,
        dimension.id
      );
      watch(
        () => this.levelReasonings[dimension.id].value.text,
        async () => {
          assessmentSessionApi.setValueReasoning(
            this.levelReasonings[dimension.id].value
          );
        }
      );
    }
    return this.levelReasonings[dimension.id];
  };

  bindWeights = (dimension: Dimension) => {
    if (!this.levelWeights[dimension.id]) {
      this.levelWeights[dimension.id] = this.repository.getLevelWeight(
        this.assessmentSession.value!.id,
        dimension.id
      );
      watch(
        () => this.levelWeights[dimension.id].value.value,
        async () => {
          assessmentSessionApi.setWeight(this.levelWeights[dimension.id].value);
        }
      );
    }
    return this.levelWeights[dimension.id];
  };

  bindWeightReasoning = (assessmentSessionId: number) => {
    const wr = this.repository.getWeightReasoning(assessmentSessionId);
    watch(
      () => wr.value.text,
      async () => {
        console.log(wr.value);
        assessmentSessionApi.setWeightReasoning(wr.value);
      }
    );
    this.weightReasoning = wr;
  };
}

let assessmentSessionService: AssessmentSessionService | null = null;

export const useAssessmentSessionService = (
  id: Ref<number>,
  basePath: Ref<string>
) => {
  if (!assessmentSessionService) {
    assessmentSessionService = new AssessmentSessionService(id, basePath);
  }
  return assessmentSessionService;
};
