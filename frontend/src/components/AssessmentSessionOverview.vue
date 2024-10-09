<template>
    <span v-if="props.assessment">some description to be replaced about {{ props.assessment.title }}</span>
</template>

<script setup lang="ts">
import type { Assessment } from '@/models/Assessment';
import type { AssessmentSession } from '@/models/AssessmentSession';
import type { Dimensions } from '@/models/Dimension';

const props = defineProps<{
    assessment: Assessment | undefined;
    assessmentSession: AssessmentSession | undefined;
    dimensions: Dimensions | undefined;
}>();
</script>
