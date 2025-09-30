import { ref, version } from "vue";
import dimensions3p0p0, { type Dimension, type Level } from "lom-levels-3p0p0";
import lomLevelsPackage3p0p0 from "lom-levels-3p0p0/package.json";
import dimensions2p0p1 from "lom-levels-2p0p1";
import lomLevelsPackage2p0p1 from "lom-levels-2p0p1/package.json";
import dimensions2p0p0 from "lom-levels-2p0p0";
import lomLevelsPackage2p0p0 from "lom-levels-2p0p0/package.json";
import dimensions1p0p0 from "lom-levels-1p0p0";
import lomLevelsPackage1p0p0 from "lom-levels-1p0p0/package.json";

export const values = ref<{
  subject_matter_expertise: number | undefined;
  leadership: number | undefined;
  ownership: number | undefined;
  collaboration: number | undefined;
  collaboration_and_communication: number | undefined;
  communication: number | undefined;
}>({
  subject_matter_expertise: 8.0,
  leadership: 8.0,
  ownership: 8.0,
  collaboration: 8.0,
  collaboration_and_communication: 8.0,
  communication: 8.0,
});

export type dimensionId =
  | "subject_matter_expertise"
  | "leadership"
  | "ownership"
  | "collaboration"
  | "communication";

export const versionedDimensions: Record<
  string,
  { value: Dimension[]; version: string }
> = {
  latest: { value: dimensions3p0p0, version: lomLevelsPackage3p0p0.version },
};

versionedDimensions[lomLevelsPackage1p0p0.version] = {
  value: dimensions1p0p0,
  version: lomLevelsPackage1p0p0.version,
};
versionedDimensions[lomLevelsPackage2p0p0.version] = {
  value: dimensions2p0p0,
  version: lomLevelsPackage2p0p0.version,
};
versionedDimensions[lomLevelsPackage2p0p1.version] = {
  value: dimensions2p0p1,
  version: lomLevelsPackage2p0p1.version,
};
versionedDimensions[lomLevelsPackage3p0p0.version] = {
  value: dimensions3p0p0,
  version: lomLevelsPackage3p0p0.version,
};

export const versions = Object.keys(versionedDimensions);
export const defaultDimensionVersion = "latest";
export type VersionedDimension = { version: string; value: Dimension };
export { type Level, type Dimension };
