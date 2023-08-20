<template>
  <section class="main-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10 position-relative">
          <div class="card mb-5 d-flex flex-row" style="height: fit-content">
            <div class="me-4">
              <img
                :src="ReviewsStore.review.product_image"
                class="img-fluid rounded-start"
                style="
                  max-width: 120px !important;
                  height: 100%;
                  z-index: 9999999;
                "
                alt="..."
              />
            </div>
            <div class="d-flex p-2 w-100">
              <div class="image-container-review">
                <img
                  :src="
                    ReviewsStore.review?.user?.gender == 'Male'
                      ? maleAvatar
                      : femaleAvatar
                  "
                  class="img-fluid rounded-circle me-3"
                  width="40"
                  alt="..."
                />
              </div>
              <div
                class="d-flex flex-column w-100 p-2 justify-content-between h-100"
              >
                <div class="d-flex justify-content-between">
                  <span class="card-title">
                    {{ ReviewsStore.review?.user?.name }}
                  </span>
                  <small class="text-muted">{{
                    ReviewsStore.review.date
                  }}</small>
                </div>

                <p class="card-text">
                  {{ ReviewsStore.review.comment }}
                </p>
                <div class="text-end">
                  <button
                    role="button"
                    class="btn btn-sm btn-primary"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#reply-${ReviewsStore.review.id}`"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <i class="fa-solid fa-share"></i>
                    reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="card mb-4"
            style="margin-left: 120px"
            v-if="ReviewsStore.review.reply"
          >
            <div class="d-flex p-2 ms-4">
              <div class="image-container-review">
                <img
                  :src="
                    ReviewsStore.review.reply?.user?.gender == 'Male'
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
                    {{ ReviewsStore.review?.reply?.user?.name }}
                  </span>
                  <small class="text-muted">{{
                    ReviewsStore.review.reply?.date
                  }}</small>
                </div>

                <p class="card-text">
                  {{ ReviewsStore.review.reply?.comment }}
                </p>
                <div class="text-end">
                  <button
                    role="button"
                    class="btn btn-sm btn-primary"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#reply-${ReviewsStore.review.reply?.id}`"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <i class="fa-solid fa-share"></i>
                    edit reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          <span class="border-card" v-if="ReviewsStore.review.reply" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="collapse" :id="`reply-${ReviewsStore.review.reply?.id}`">
            <div class="card card-body">
              <form
                class="form-contact comment_form"
                id="commentForm"
                @submit.prevent="updateReview(ReviewsStore.review.reply?.id)"
              >
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center">
                    <img
                      :src="
                        AuthUser.user.gender == 'Male'
                          ? maleAvatar
                          : femaleAvatar
                      "
                      alt=""
                      width="40"
                      class="rounded-circle me-2 mb-2"
                    />
                    <small style="font-size: 12px"
                      >{{ AuthUser.user.name }}
                    </small>
                  </div>

                  <textarea
                    v-model="FormStore.fields.comment"
                    class="form-control textarea"
                    name="comment"
                    placeholder="write comment"
                  >
                  </textarea>
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
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="collapse" :id="`reply-${ReviewsStore.review.id}`">
            <div class="card card-body">
              <form
                class="form-contact comment_form"
                id="commentForm"
                @submit.prevent="replyReview(route.params.id)"
              >
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center">
                    <img
                      :src="
                        AuthUser.user.gender == 'Male'
                          ? maleAvatar
                          : femaleAvatar
                      "
                      alt=""
                      width="40"
                      class="rounded-circle me-2 mb-2"
                    />
                    <small style="font-size: 12px"
                      >{{ AuthUser.user.name }}
                    </small>
                  </div>

                  <textarea
                    v-model="FormStore.fields.comment"
                    class="form-control textarea"
                    name="comment"
                    placeholder="write comment"
                  >
                  </textarea>
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
      </div>
    </div>
  </section>
</template>

<script setup>
import { FormStore } from "@/components/BaseForm";

import maleAvatar from "@/assets/img/avatars/avatar_male.png";
import femaleAvatar from "@/assets/img/avatars/avatar_female.png";
import { onMounted } from "vue";
import useReviewsService from "@/pages/ReviewsPage/services/useReviewsService";
import { useRoute } from "vue-router";
import ReviewsStore from "@/pages/ReviewsPage/stores/ReviewsStore";
import useUserStore from "@/Auth/store/userStore";

const route = useRoute();
const { replyReview, showReview, updateReview } = useReviewsService();
const AuthUser = useUserStore();
onMounted(async () => showReview(route.params.id));
</script>
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
