<template>
  <div class="row">
    <div class="upload-image-box shadow">
      <label for="image" class="upload-image-label form-control">
        <div class="upload-image-warrapr">
          <img src="@/assets/img/upload.png" alt="" />
          <p class="mt-3">Drag your Photes to start uploading .</p>
          <h6><span>OR</span></h6>
          <label for="image"
            ><span class="btn btn-primary">Browes Files</span>
          </label>
        </div>
      </label>
      <input
        type="file"
        name="image"
        id="image"
        :multiple="props.multiple"
        class="d-none"
        @change="onFilesChange"
      />
    </div>

    <Transition name="bounce" mode="out-in">
      <div class="full-screen-image" v-if="showfullScreenImage">
        <img :src="fullScreenImage" />

        <button type="button" @click="showfullScreenImage = false">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </Transition>

    <transition-group name="list" v-if="props.images" tag="div" class="row">
      <div class="card-image">
      <div
        class="image-container col-3"
        v-for="(image, index) in props.images"
        :key="image"
      >
        <div class="image-card">
          <img :src="image.image_url ?? defultImage" />
          <button
            type="button"
            class="image-card-delete-btn"
            @click="removeImage(index, image.image_id)"
          >
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
        </div>
        <div class="image-card-footer">
          <div class="form-check">
            <input
              name="is_main_image"
              :checked="image.is_main_image"
              @change="
                changeMainImage({ imageId: image.image_id, index: index })
              "
              class="form-check-input me-1"
              type="radio"
              :id="'is-main-image-' + index"
            />
            <label class="form-check-label m-1" :for="'is-main-image-' + index">
              main image
            </label>
          </div>
          <button
            type="button"
            class="image-card-full-btn"
            @click="showFullScreenImage(image.image_url ?? defultImage)"
          >
            <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
          </button>
        </div>

       
      </div>

    </div>
    </transition-group>
  </div>
</template>

<script setup>
const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
  maxWidth: {
    type: String,
    default: "250px",
  },
  image_url: String,

  error: Array,
});
</script>

<style lang="scss" scoped>
.image-preview {
  max-height: v-bind(maxWidth);
  max-width: v-bind(maxWidth);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.bounce-enter-active {
  animation: bounce-in 0.2s;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>
