<script setup>
import { onMounted, onUnmounted } from "vue";
import PageHeader from "@/components/PageHeader/index.vue";
import useReviewsStore from "@/pages/ReviewsPage/stores/ReviewsStore";
import ReviewCardSkeleton from "@/pages/ReviewsPage/components/ReviewCardSkeleton.vue";
import ReviewCard from "@/pages/ReviewsPage/components/ReviewCard.vue";
import useReviewsService from "@/pages/ReviewsPage/services/useReviewsService";
import { skeletonLoading } from "@/helpers";

const { getAllReviews } = useReviewsService();
onMounted(async () => {
  reviewsStore.reviews = [];
  await getAllReviews();
});

onUnmounted(() => {
  reviewsStore.reviews = [];
});
const reviewsStore = useReviewsStore();
reviewsStore.reviews = [];
</script>
<template>
  <section class="main-section">
    <PageHeader title="Reviews List"> </PageHeader>

    <div class="container-fluid">
      <div class="reviews-list">
        <template v-if="!skeletonLoading.isLoading">
          <ReviewCard
            v-for="(review, index) in reviewsStore.reviews"
            :review="review"
            :index="index"
          />
        </template>
        <template v-if="skeletonLoading.isLoading">
          <ReviewCardSkeleton v-for="inds in 6" />
        </template>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <div
          v-show="
            reviewsStore.reviews.length == 0 && !skeletonLoading.isLoading
          "
        >
          <h5 class="text-center">No Reviews Found</h5>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
