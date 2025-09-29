import { ref } from "vue";
export const values = ref<{
  subject_matter_expertise: number | undefined;
  ownership: number | undefined;
  collaboration_and_communication: number | undefined;
}>({
  subject_matter_expertise: 8.0,
  ownership: 8.0,
  collaboration_and_communication: 8.0,
});