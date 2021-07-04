<template>
  <div class="internal">
    <template v-for="(val, name) in props.obj">{{ name }} {{ val }}</template>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits({});
const props = defineProps<{
  obj: Record<string, any>;
}>();
</script>
