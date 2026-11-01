<template>
  <component
    :is="iconComponent"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
  />
</template>

<script setup>
import { computed } from "vue";
import * as LucideIcons from "lucide-vue-next";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [Number, String],
    default: 24,
  },
  color: {
    type: String,
    default: "currentColor",
  },
  strokeWidth: {
    type: [Number, String],
    default: 2,
  },
});

const iconComponent = computed(() => {
  return LucideIcons[props.name] || LucideIcons.CircleHelp;
});
</script>
