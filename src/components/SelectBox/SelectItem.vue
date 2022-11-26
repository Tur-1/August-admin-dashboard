<template>
  <li
    class="select-item"
    :class="{ active: active }"
    @click="closeOnClick ? useSelectBox.toggle() : ''"
  >
    <span v-if="label">{{ label }}</span>
    <slot v-if="!label" />
    <i v-show="active" class="fa-solid fa-check" />
  </li>
</template>

<script setup>
import useSelectBox from "@/components/SelectBox/useSelectBox";

const props = defineProps({
  label: String,
  active: Boolean,
  closeOnClick: Boolean,
});
</script>
