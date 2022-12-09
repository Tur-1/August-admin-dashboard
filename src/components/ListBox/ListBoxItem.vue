<template>
  <li
    class="list-item"
    :class="{ active: active }"
    @click="useListBox.toggle()"
  >
    <span v-if="label">{{ label }}</span>
    <slot v-if="!label" />
    <i v-show="active" class="fa-solid fa-check" />
  </li>
</template>

<script setup>
import useListBox from "@/components/ListBox/useListBox";
const props = defineProps({
  label: String,
  active: Boolean,
  closeOnClick: Boolean,
});
</script>
