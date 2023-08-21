<script setup>
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import ReviewCardSkeleton from "@/pages/ReviewsPage/components/ReviewCardSkeleton.vue";
import { ConfirmModal, useConfirmModal } from "@/components/ConfirmModal";
import { onMounted, onUnmounted } from "vue";
import useReviewsService from "@/pages/ReviewsPage/services/useReviewsService";
import { useRoute } from "vue-router";
import useReviewsStore from "@/pages/ReviewsPage/stores/ReviewsStore";
import ReviewReplyCard from "@/pages/ReviewsPage/components/ReviewReplyCard.vue";
import ReviewReplyForm from "@/pages/ReviewsPage/components/ReviewReplyForm.vue";

const route = useRoute();
const { showReview, openConfirmModal, deleteReview } = useReviewsService();

onMounted(async () => {
  await showReview(route.params.id);
});
onUnmounted(() => {
  reviewsStore.reviews = [];
});
const reviewsStore = useReviewsStore();
</script>
<template>
  <section class="main-section">
    <div class="container">
      <ReviewCardSkeleton v-if="reviewsStore.isLoading" />
      <div class="position-relative" v-if="!reviewsStore.isLoading">
        <div class="review-card mb-5">
          <a role="button">
            <div class="review-card-id">
              <span>{{ reviewsStore.reviews[0]?.id }}</span>
            </div>
            <div class="review-card-image">
              <img
                :src="reviewsStore.reviews[0]?.product_image"
                class="img-fluid"
                alt="..."
              />
            </div>
            <div class="review-card-content">
              <h6>{{ reviewsStore.reviews[0]?.user?.name }}</h6>
              <p>
                {{ reviewsStore.reviews[0]?.comment }}
              </p>
            </div>
          </a>
          <div class="review-card-actions">
            <p class="card-text">
              <small class="text-muted">{{
                reviewsStore.reviews[0]?.date
              }}</small>
            </p>
            <DropdownMenu>
              <a
                @click="
                  openConfirmModal({
                    id: reviewsStore.reviews[0]?.id,
                    index: 0,
                  })
                "
                role="button"
                class="dropdown-item d-flex align-items-center text-danger w-100"
              >
                <i class="fa-solid fa-trash-can"></i>
                Delete
              </a>
              <a
                role="button"
                class="dropdown-item d-flex align-items-center w-100"
                data-bs-toggle="collapse"
                data-bs-target="#review-reply-form"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <i class="fa-solid fa-share"></i>
                {{ reviewsStore.reviews[1]?.id ? "edit reply" : "reply" }}
              </a>
            </DropdownMenu>
          </div>
        </div>
        <div style="margin-left: 120px" class="review-reply">
          <ReviewReplyCard />
          <ReviewReplyForm />
        </div>
        <span class="border-card" v-if="reviewsStore.reviews[1]" />
      </div>
    </div>
  </section>
  <ConfirmModal @onConfirm="deleteReview" @onClose="useConfirmModal.close()" />
</template>

<style scoped>
span.border-card {
  border-right: 3px solid #3d5466;
  height: 80%;
  left: 183px;
  position: absolute;
  top: 13px;
  width: 1px;
  z-index: -1;
}
.image-container-review {
  z-index: 999999;
}
</style>
