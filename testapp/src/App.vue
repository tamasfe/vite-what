<template>
  <Test :obj="obj"></Test>
  <Asd :obj="obj"></Asd>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";

import { Test } from "testlib";
import Asd from "./components/Asd.vue";

const emit = defineEmits({});
const props = defineProps<{}>();

const obj = ref({
  one: 1,
  two: 2,
});
</script>
