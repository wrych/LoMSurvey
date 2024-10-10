<template>
    <span v-if="props.service.assessment.value">some description to be replaced about {{
        props.service.assessment.value.title }}</span>
</template>

<script setup lang="ts">
import type { AssessmentSessionService } from '@/services/assessmentSession';

const props = defineProps<{
    service: AssessmentSessionService;
}>();
</script>
