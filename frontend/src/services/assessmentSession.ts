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

const assessmentService = useAssessmentService();

export class AssessmentSessionService {
  id!: Ref<number>;
  basePath!: Ref<string>;
  repository!: AssessmentSessionRepository;
  assessmentSession = ref<AssessmentSession | undefined>(undefined);
  assessment = ref<Assessment | undefined>(undefined);
  dimensions = ref<Dimensions | undefined>(undefined);
  navEntries = computed<{ title: string; path: string }[]>(() => {
    return this.updateNavEntries(this.basePath.value);
  });
  boundLevels: Record<number, Ref<LevelValue>> = {};

  constructor(
    id: Ref<number>,
    basePath: Ref<string>,
    repository: AssessmentSessionRepository = useAssessmentSessionRepository()
  ) {
    this.id = id;
    this.basePath = basePath;
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
    watch(this.assessmentSession, () => {
      if (this.assessmentSession.value) {
        const a = assessmentService.getAssessmentById(
          this.assessmentSession.value.assessmentId
        );
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
          });
        });
      }
    });
  };

  updateNavEntries = (basePath: string) => {
    const navEntries = [];
    navEntries.push({
      title: "Overview",
      path: `${basePath}/`,
    });
    if (this.dimensions.value) {
      Object.values(this.dimensions.value!.dimensions).forEach((d) => {
        navEntries.push({
          title: `${d.title} Overview`,
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
      path: `${basePath}/weight`,
    });
    navEntries.push({
      title: "Summary",
      path: `${basePath}/summary`,
    });
    return navEntries;
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
    if (!this.boundLevels[dimension.id]) {
      this.boundLevels[dimension.id] = this.repository.getLevelValue(
        this.assessmentSession.value!.id,
        dimension.id
      );
      watch(
        () => this.boundLevels[dimension.id],
        async (newValue) => {
          //     const newLevel = assessmentSessionApi.setLevel(
          //     dimension.id,
          //     newValue
          //   );
          //   this.repository.updateLevelValue(newLevel);
        }
      );
    }
    return this.boundLevels[dimension.id];
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
