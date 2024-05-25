<script setup>
import useReviewsService from "@/pages/ReviewsPage/services/useReviewsService";
import maleAvatar from "@/assets/img/avatars/avatar_male.png";
import femaleAvatar from "@/assets/img/avatars/avatar_female.png";
import { useRoute } from "vue-router";
import { FormStore } from "@/components/BaseForm";
import useAuthStore from "@/Auth/store/AuthStore";

const { replyReview } = useReviewsService();
const route = useRoute();

const authUser = useAuthStore();
</script>

<template>
  <div class="collapse" id="review-reply-form">
    <div class="card card-body">
      <form
        class="form-contact comment_form"
        id="commentForm"
        @submit.prevent="replyReview(route.params.id)"
      >
        <div class="d-flex flex-column">
          <div class="d-flex align-items-center">
            <img
              :src="maleAvatar"
              alt=""
              width="40"
              class="rounded-circle me-2 mb-2"
            />
            <small style="font-size: 12px">{{ authUser.user?.name }} </small>
          </div>

          <textarea
            v-model="FormStore.fields.comment"
            class="form-control textarea"
            name="comment"
            placeholder="write comment"
            :class="{ 'is-invalid': FormStore.errors.comment }"
          >
          </textarea>
        </div>
        <div class="mt-2 float-end">
          <button class="btn btn-primary p-2" type="submit">submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
.review-card:hover {
  scale: 1.01;
}
</style>
