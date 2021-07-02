<template>
  <div v-if="props.obj">
    <template v-for="(val, name) in props.obj"> {{ name }} {{ val }} </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const emit = defineEmits({});
const props = defineProps<{
  obj: Record<string, number>;
}>();
</script>
