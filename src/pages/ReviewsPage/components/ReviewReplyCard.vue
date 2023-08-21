<script setup>
import useReviewsService from "@/pages/ReviewsPage/services/useReviewsService";
import useReviewsStore from "@/pages/ReviewsPage/stores/ReviewsStore";
import maleAvatar from "@/assets/img/avatars/avatar_male.png";
import femaleAvatar from "@/assets/img/avatars/avatar_female.png";

const { openConfirmModal } = useReviewsService();

const reviewsStore = useReviewsStore();
</script>

<template>
  <div class="card mb-4" v-if="reviewsStore.reviews[1]">
    <div class="d-flex p-2 ms-4">
      <div class="image-container-review">
        <img
          :src="
            reviewsStore.reviews[1]?.user?.gender == 'Male'
              ? maleAvatar
              : femaleAvatar
          "
          class="img-fluid rounded-circle me-3"
          width="40"
          alt="..."
        />
      </div>
      <div style="width: 90%" class="d-flex flex-column p-2">
        <div class="d-flex justify-content-between">
          <span class="card-title">
            {{ reviewsStore.reviews[1]?.user?.name }}
          </span>
          <small class="text-muted">{{ reviewsStore.reviews[1]?.date }}</small>
        </div>

        <p class="card-text">
          {{ reviewsStore.reviews[1].comment }}
        </p>

        <a
          @click="
            openConfirmModal({
              id: reviewsStore.reviews[1].id,
              index: 1,
            })
          "
          role="button"
          class="align-self-end d-flex align-items-center text-danger"
        >
          <i class="fa-solid fa-trash-can me-2"></i>
          Delete
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.review-card:hover {
  scale: 1.01;
}
</style>
