<template>
  <Transition name="slide-fade">
    <div
      v-if="useToastNotification.isOpen"
      id="toast-alert"
      :class="useToastNotification.background"
      class="toast show align-items-center border-0"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex align-items-center justify-content-between">
        <div class="toast-body">
          <span style="margin-right: 10px; font-size: 18px">
            <i class="fa-sharp fa-solid fa-circle-check" />
          </span>

          {{ useToastNotification.message }}
        </div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          @click="useToastNotification.close()"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import useToastNotification from "@/components/Toast/useToastNotification";
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(140px);
  opacity: 0;
}
</style>
