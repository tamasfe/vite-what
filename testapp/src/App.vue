<template>
  <Test :obj="obj"></Test>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";

import { Test } from "testlib";

const emit = defineEmits({});
const props = defineProps<{}>();

const obj = ref({
  one: 1,
  two: 2,
});
</script>
