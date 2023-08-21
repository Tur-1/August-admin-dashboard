<script setup>
import useReviewsService from "@/pages/ReviewsPage/services/useReviewsService";
import DropdownMenu from "@/components/DropdownMenu/index.vue";

import { ConfirmModal, useConfirmModal } from "@/components/ConfirmModal";
const { openConfirmModal, deleteReview } = useReviewsService();

const props = defineProps(["review", "index"]);
</script>

<template>
  <div class="review-card" :key="review.id">
    <RouterLink
      :to="{
        name: 'reviewsEdit',
        params: { id: review.id },
      }"
    >
      <div class="review-card-id">
        <span>{{ review.id }}</span>
      </div>
      <div class="review-card-image">
        <img :src="review.product_image" class="img-fluid" alt="..." />
      </div>
      <div class="review-card-content">
        <h6>{{ review.user.name }}</h6>
        <p>
          {{ review.comment }}
        </p>
      </div>
    </RouterLink>
    <div class="review-card-actions">
      <DropdownMenu>
        <a
          @click="openConfirmModal({ id: review.id, index: index })"
          role="button"
          class="dropdown-item d-flex align-items-center text-danger"
        >
          <i class="fa-solid fa-trash-can"></i>
          Delete
        </a>
        <RouterLink
          class="dropdown-item d-flex align-items-center"
          :to="{
            name: 'reviewsEdit',
            params: { id: review.id },
          }"
        >
          <i class="fa-solid fa-pen-to-square"></i>
          View
        </RouterLink>
      </DropdownMenu>
      <p class="card-text">
        <small class="text-muted">{{ review.date }}</small>
      </p>
    </div>
  </div>
  <ConfirmModal @onConfirm="deleteReview" @onClose="useConfirmModal.close()" />
</template>
<style scoped>
.review-card:hover {
  scale: 1.01;
}
</style>
