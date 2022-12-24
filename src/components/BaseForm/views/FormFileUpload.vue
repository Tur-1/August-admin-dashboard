<template>
  <div class="row">
    <div class="upload-image-box shadow">
      <label
        for="image"
        class="upload-image-label form-control"
        :class="{ 'is-invalid': error }"
      >
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
        multiple
        class="d-none"
        @change="onFileChange"
      />
      <span
        class="text-danger mt-1 ms-2"
        style="font-size: 12px"
        v-show="error"
      >
        {{ error }}
      </span>
    </div>

    <transition-group name="list">
      <div
        class="image-container"
        v-for="(image, index) in imagesPreview"
        :key="image"
      >
        <div class="image-card">
          <img :src="image" />
          <button
            type="button"
            class="image-card-delete-btn"
            @click="removeImage(index)"
          >
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
        </div>
        <div class="image-card-footer">
          <div class="form-check">
            <input
              name="is_main_image"
              :value="image"
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
            @click="showFullScreenImage(image)"
          >
            <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
          </button>
        </div>
      </div>
    </transition-group>
    <Transition name="bounce" mode="out-in">
      <div class="full-screen-image" v-if="showImage">
        <img :src="fullScreenImage" />

        <button type="button" @click="showImage = false">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import defaultImage from "@/assets/img/defult-image.png";

const props = defineProps({
  multiple: Boolean,
  maxWidth: {
    type: String,
    default: "250px",
  },
  imageUrl: {
    type: String,
  },
  error: String,
});
const emits = defineEmits(["onUpload"]);

let imagesPreview = reactive([]);
let images = reactive([]);

let fullScreenImage = ref("");
let showImage = ref(false);

const onFileChange = (e) => {
  const files = e.target.files;

  let file;

  for (file of files) {
    imagesPreview.push(URL.createObjectURL(file));
    images.push(file);
  }
};
const removeImage = (index) => {
  images.splice(index, 1);
  imagesPreview.splice(index, 1);
};

const showFullScreenImage = (image) => {
  fullScreenImage.value = image;
  showImage.value = true;
};

watch(images, (image) => {
  emits("onUpload", images);
});
</script>
<style scoped>
.image-preview {
  max-height: v-bind(maxWidth);
  max-width: v-bind(maxWidth);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-in-out;
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
