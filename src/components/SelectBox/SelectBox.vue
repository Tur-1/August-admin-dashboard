<template>
  <div class="select-box">
    <div class="select-label" @click="useSelectBox.toggle()">
      <span>{{ activeItem }}</span>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
    <ul class="select-items" :class="{ show: useSelectBox.isOpen }">
      <slot />
    </ul>
  </div>
</template>

<script setup>
import useSelectBox from "@/components/SelectBox/useSelectBox";
const props = defineProps({
  activeItem: String,
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".select-box")) {
    useSelectBox.close();
  }
});
</script>
