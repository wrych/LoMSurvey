import { ref } from "vue";

export interface Level {
  value: number;
  capabilities: string[];
  examples: string[];
}

const sme = [
  {
    value: 4,
    capabilities: ["have completed basic education."],
    examples: ["some example", "some other example"],
  },
  {
    value: 5,
    capabilities: [
      "have completed an apprenticeship.",
      "have multiple years of expereince on the job without completed apprenticeship.",
    ],
    examples: ["some example", "some other example"],
  },
  {
    value: 6,
    capabilities: ["are experienced professionals"],
    examples: ["some example", "some other example"],
  },
  {
    value: 7,
    capabilities: [
      "rely on practical experience in some are of their domain",
      "have in-depth knowledge on specialized topics",
      "have extended experience or advanced vocational training",
    ],
    examples: ["some example", "some other example"],
  },
  {
    value: 8,
    capabilities: [
      "are recongnized for their deep knowledge for a specific subject.",
      "serve as key contacts for spefific subjects within the organization.",
      "have in-depth experience in the relevant field.",
    ],
    examples: ["some example", "some other example"],
  },
  {
    value: 9,
    capabilities: [
      "are acknowledged as technical experts for their domain.",
      "represent their domain expertise in projects.",
      "share knowledge with peers.",
      "mentor more junior peers.",
    ],
    examples: ["some example", "some other example"],
  },
  {
    value: 10,
    capabilities: [
      "serve as authoritative voices in their domain.",
      "influence decision-making and set standards within the organization.",
      "demonstrate depp knowledge within their domain and its interfaces.",
      "consult on critical decisions.",
    ],
    examples: ["some example", "some other example"],
  },
  {
    value: 11,
    capabilities: [
      "are recognized as exceptional experts in their field and its peripherals.",
      "contribute key inputs, ideas or solutions in their field.",
      "monitor trends in their field and analyse the applicability thereof at DECTRIS.",
    ],
    examples: ["some example", "some other example"],
  },
  {
    value: 12,
    capabilities: [
      "are recoginzed as thought leaders in their industry.",
      "shape trends and set benchmarks for excellence.",
      "show visionary technical leadership.",
    ],
    examples: ["some example", "some other example"],
  },
];

export interface Dimension {
  name: string;
  id: string;
  levels: Level[];
}

export default [
  {
    name: "Subject Matter Expertise",
    id: "subject_matter_expertise",
    levels: sme,
  },
  { name: "Leadership", id: "leadership", levels: sme },
  { name: "Ownership", id: "ownership", levels: sme },
  { name: "Collaboration", id: "collaboration", levels: sme },
  { name: "Communication", id: "communication", levels: sme },
];

export const values = ref<{
  subject_matter_expertise: number | undefined;
  leadership: number | undefined;
  ownership: number | undefined;
  collaboration: number | undefined;
  communication: number | undefined;
}>({
  subject_matter_expertise: 9.2,
  leadership: 8.0,
  ownership: 8.6,
  collaboration: 9.2,
  communication: 8.2,
});

export const weights = ref<{
  subject_matter_expertise: number | undefined;
  leadership: number | undefined;
  ownership: number | undefined;
  collaboration: number | undefined;
  communication: number | undefined;
}>({
  subject_matter_expertise: 32,
  leadership: 14,
  ownership: 20,
  collaboration: 25,
  communication: 9,
});

export const reasonings = ref<{
  subject_matter_expertise: string | undefined;
  leadership: string | undefined;
  ownership: string | undefined;
  collaboration: string | undefined;
  communication: string | undefined;
  weights: string | undefined;
}>({
  subject_matter_expertise: undefined,
  leadership: undefined,
  ownership: undefined,
  collaboration: undefined,
  communication: undefined,
  weights: undefined,
});

export type dimensionId =
  | "subject_matter_expertise"
  | "leadership"
  | "ownership"
  | "collaboration"
  | "communication";

export type dimensionWeightId = dimensionId | "weights";
