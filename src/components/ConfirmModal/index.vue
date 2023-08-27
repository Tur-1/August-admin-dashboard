<template>
  <Transition name="slide">
    <div
      class="confirm-modal-bg"
      :id="props.id ?? 'confirm-modal'"
      v-if="useConfirmModal.isOpen"
    >
      <div class="confirm-modal">
        <div class="confirm-modal-content">
          <div class="confirm-modal-body">
            <h6 v-if="!slots.body">are you sure ?</h6>
            <slot name="body" />
          </div>
          <div class="confirm-modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">
              <span>Close</span>
            </button>

            <button
              type="button"
              class="btn btn-primary d-flex justify-content-center"
              @click="$emit('onConfirm')"
              :disabled="useConfirmModal.isLoading"
            >
              <span>Confirm</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useConfirmModal } from "@/components/ConfirmModal";
import { useSlots } from "vue";
const props = defineProps(["id"]);
const emits = defineEmits(["onClose", "onConfirm"]);

const slots = useSlots();

const closeModal = () => {
  useConfirmModal.close();

  emits("onClose");
};
</script>
<style scoped>
.slide-enter-active {
  transition: all 0.3s ease;
}

.slide-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-150px);
  opacity: 0;
}
</style>
