import { ref } from "vue";

const capex = [
  {
    value: 4,
    capabilities: ["...execute tasks according to step-by-step instructions"],
    examples: ["some example", "some other example"],
  },
  {
    value: 5,
    capabilities: ["blabla", "lalalala", "sususus"],
    examples: ["some example", "some other example"],
  },
  {
    value: 6,
    capabilities: ["blabla", "lalalala", "sususus"],
    examples: ["some example", "some other example"],
  },
  {
    value: 7,
    capabilities: ["blabla", "lalalala", "sususus"],
    examples: ["some example", "some other example"],
  },
  {
    value: 8,
    capabilities: ["blabla", "lalalala", "sususus"],
    examples: ["some example", "some other example"],
  },
  {
    value: 9,
    capabilities: ["blabla", "lalalala", "sususus"],
    examples: ["some example", "some other example"],
  },
  {
    value: 10,
    capabilities: ["blabla", "lalalala", "sususus"],
    examples: ["some example", "some other example"],
  },
  {
    value: 11,
    capabilities: ["blabla", "lalalala", "sususus"],
    examples: ["some example", "some other example"],
  },
  {
    value: 12,
    capabilities: ["blabla", "lalalala", "sususus"],
    examples: ["some example", "some other example"],
  },
];

export default [
  {
    name: "Subject Matter Expertise",
    id: "subject_matter_expertise",
    levels: capex,
  },
  { name: "Leadership", id: "leadership", levels: capex },
  { name: "Ownership", id: "ownership", levels: capex },
  { name: "Collaboration", id: "collaboration", levels: capex },
  { name: "Communication", id: "communication", levels: capex },
];

export const values = ref<{
  subject_matter_expertise: number | undefined;
  leadership: number | undefined;
  ownership: number | undefined;
  collaboration: number | undefined;
  communication: number | undefined;
}>({
  subject_matter_expertise: 4.0,
  leadership: 8.0,
  ownership: 6.0,
  collaboration: 7.0,
  communication: 6.6,
});

export const weights = ref<{
  subject_matter_expertise: number | undefined;
  leadership: number | undefined;
  ownership: number | undefined;
  collaboration: number | undefined;
  communication: number | undefined;
}>({
  subject_matter_expertise: undefined,
  leadership: undefined,
  ownership: undefined,
  collaboration: undefined,
  communication: undefined,
});
