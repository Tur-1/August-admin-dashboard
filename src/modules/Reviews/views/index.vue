<script setup>
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import ReviewsStore from "@/modules/Reviews/stores/ReviewsStore";
import useReviewsService from "@/modules/Reviews/services/useReviewsService";
import { onMounted, ref } from "vue";

import { ConfirmModal, useConfirmModal } from "@/components/ConfirmModal";

const { getAllReviews, deleteReview } = useReviewsService();

onMounted(getAllReviews);

let Review = ref({ id: "", index: "" });

const openModal = ({ id, index }) => {
  useConfirmModal.open();
  Review.value.id = id;
  Review.value.index = index;
};
</script>
<template>
  <section class="main-section">
    <PageHeader title="Reviews "> </PageHeader>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <transition-group name="list">
            <div
              v-for="(review, index) in ReviewsStore.filtered"
              :key="review.id"
              class="card mb-5"
            >
              <div class="d-flex pb-0">
                <div class="mb-0">
                  <img
                    src="@/assets/img/defult-image.png"
                    class="img-fluid rounded-start"
                    style="max-width: 150px !important; height: 100%"
                    alt="..."
                  />
                </div>
                <div class="w-100">
                  <div class="card-body">
                    <div class="d-flex align-items-center mb-3">
                      <img
                        src="@/assets/img/team/profile-picture-1.jpg"
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
                        <button
                          role="button"
                          class="dropdown-item d-flex align-items-center"
                          data-bs-toggle="collapse"
                          :data-bs-target="`#reply-${review.id}`"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          <i class="fa-solid fa-share"></i>
                          {{ review.reply ? "edit " : "" }}reply
                        </button>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </div>
              <div class="collapse" :id="`reply-${review.id}`">
                <div class="card card-body">
                  <form class="form-contact comment_form" id="commentForm">
                    <div class="d-flex flex-row align-items-start">
                      <div class="d-flex flex-column">
                        <img
                          src="@/assets/img/team/profile-picture-1.jpg"
                          alt=""
                          width="40"
                          class="rounded-circle me-2 mb-2"
                        />
                        <small style="font-size: 12px">{{
                          review.reply?.user.name
                        }}</small>
                      </div>

                      <textarea
                        class="form-control ml-4 shadow-none textarea"
                        name="comment"
                        placeholder="write comment"
                      >
                {{ review.reply?.comment ?? "" }}
                </textarea
                      >
                    </div>
                    <div class="mt-2 float-end">
                      <button class="btn btn-primary p-2" type="submit">
                        submit
                      </button>
                    </div>
                  </form>
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
