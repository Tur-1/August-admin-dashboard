<template>
  <div class="list-box">
    <div class="list-label" @click="useListBox.toggle()">
      <span>{{ activeItem }}</span>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
    <ul class="list-items" :class="{ show: useListBox.isOpen }">
      <slot />
    </ul>
  </div>
</template>

<script setup>
import useListBox from "@/components/ListBox/useListBox";
const props = defineProps({
  activeItem: String,
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".list-box")) {
    useListBox.close();
  }
});
</script>
