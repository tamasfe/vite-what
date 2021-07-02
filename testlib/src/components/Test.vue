<template>
  <div class="test">
    <TestChild :obj="props.obj" ></TestChild>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

import TestChild from "./TestChild.vue";

const emit = defineEmits({});
const props = defineProps<{
  obj: Record<string, number>;
}>();
</script>
