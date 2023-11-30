<template>
  <Transition name="bounce" mode="out-in">
    <div class="full-screen-image" v-if="showfullScreenImage">
      <img :src="fullScreenImage" />

      <button type="button" @click="showfullScreenImage = false">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  </Transition>
</template>

<script setup>
import { ref, reactive } from "vue";
import defultImage from "@/assets/img/defult-image.png";

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
  maxWidth: {
    type: String,
    default: "250px",
  },
  images: {
    default: reactive([]),
    type: Array,
  },
  errors: Array,
});
</script>
<style scoped>
.image-preview {
  max-height: v-bind(maxWidth);
  max-width: v-bind(maxWidth);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.bounce-enter-active {
  animation: bounce-in 0.2s;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>
