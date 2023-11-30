<template>
  <div class="row">
    <div class="upload-image-box shadow">
      <label for="image" class="upload-image-label form-control" :class="{ 'is-invalid': error }">
        <div class="upload-image-warrapr">
          <img src="@/assets/img/upload.png" alt="" />
          <p class="mt-3">Drag your Photes to start uploading .</p>
          <h6><span>OR</span></h6>
          <label for="image"><span class="btn btn-primary">Browes Files</span>
          </label>
        </div>
      </label>
      <input type="file" name="image" id="image" class="d-none" @change="onFileChange" />
      <div v-show="error" v-for="err in error" class="d-flex flex-column">
        <span class="text-danger mt-1 ms-2" style="font-size: 12px">
          {{ err }}
        </span>
      </div>
    </div>
    <div class="card-file">
      <div class="image-container" v-if="imagePreview || props.image_url">
        <div class="image-card">
          <img :src="imagePreview ?? props.image_url" />
        </div>
        <div class="image-card-footer">
          <button type="button" class="image-card-full-btn" @click="showFullScreenImage(imagePreview ?? props.image_url)">
            <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
          </button>
        </div>
      </div>
    </div>


    <Transition name="bounce" mode="out-in">
      <div class="full-screen-image" v-if="showfullScreenImage">
        <img :src="fullScreenImage" />

        <button type="button" @click="showfullScreenImage = false">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import defultImage from "@/assets/img/defult-image.png";

const props = defineProps({
  multiple: Boolean,
  maxWidth: {
    type: String,
    default: "250px",
  },
  image_url: String,

  error: Array,
});
const emits = defineEmits(["onUpload", "onDelete"]);

let fullScreenImage = ref("");
let showfullScreenImage = ref(false);

let imagePreview = ref(null);

const onFileChange = (e) =>
{
  const file = e.target.files[0];
  if (file)
  {
    imagePreview.value = URL.createObjectURL(file);

    emits("onUpload", file);
  }
};

const showFullScreenImage = (image) =>
{
  fullScreenImage.value = image;
  showfullScreenImage.value = true;
};
</script>
<style scoped>
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
