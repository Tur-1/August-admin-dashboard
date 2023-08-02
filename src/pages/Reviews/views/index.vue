<script setup>
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import ReviewsStore from "@/pages/Reviews/stores/ReviewsStore";
import useReviewsService from "@/pages/Reviews/services/useReviewsService";
import { onMounted, ref } from "vue";

import maleAvatar from "@/assets/img/avatars/avatar_male.png";
import femaleAvatar from "@/assets/img/avatars/avatar_female.png";
import { ConfirmModal, useConfirmModal } from "@/components/ConfirmModal";
import useUserStore from "@/Auth/store/userStore";
const { getAllReviews, deleteReview } = useReviewsService();

onMounted(getAllReviews);

let Review = ref({ id: "", index: "" });

const openModal = ({ id, index }) => {
  useConfirmModal.open();
  Review.value.id = id;
  Review.value.index = index;
};

const AuthUser = useUserStore();
</script>
<template>
  <section class="main-section" v-if="AuthUser.userCanAccess('access-reviews')">
    <PageHeader title="Reviews "> </PageHeader>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <transition-group name="list">
            <div
              v-for="(review, index) in ReviewsStore.filtered"
              :key="review.id"
              class="card mb-5 card-review"
            >
              <div class="d-flex pb-0">
                <div class="mb-0">
                  <img
                    :src="review.product_image"
                    class="img-fluid rounded-start"
                    style="max-width: 150px !important; height: 100%"
                    alt="..."
                  />
                </div>
                <div class="w-100">
                  <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                      <img
                        :src="
                          review.user.gender == 'Male'
                            ? maleAvatar
                            : femaleAvatar
                        "
                        class="img-fluid rounded-circle me-3"
                        width="40"
                        alt="..."
                      />
                      <span class="card-title">{{ review.user.name }}</span>
                    </div>
                    <p class="card-text">
                      {{ review.comment }}
                    </p>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <p class="card-text">
                        <small class="text-muted">{{ review.date }}</small>
                      </p>
                      <DropdownMenu>
                        <a
                          @click="openModal({ id: review.id, index: index })"
                          role="button"
                          class="dropdown-item d-flex align-items-center text-danger"
                        >
                          <i class="fa-solid fa-trash-can"></i>
                          Delete
                        </a>
                        <RouterLink
                          v-if="AuthUser.userCanAccess('view-reviews')"
                          class="dropdown-item d-flex align-items-center"
                          :to="{
                            name: 'reviewsEdit',
                            params: { id: review.id },
                          }"
                        >
                          <i class="fa-solid fa-pen-to-square"></i>
                          Edit
                        </RouterLink>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition-group>

          <h5 class="text-center" v-show="ReviewsStore.filtered.length == 0">
            No Reviews Found
          </h5>
        </div>
      </div>
    </div>
  </section>
  <ConfirmModal
    @onConfirm="deleteReview(Review)"
    @onClose="useConfirmModal.close()"
  />
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
