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
        :multiple="props.multiple"
        class="d-none"
        @change="props.multiple ? onFilesChange($event) : onFileChange($event)"
      />
      <div v-show="error" v-for="err in error" class="d-flex flex-column">
        <span class="text-danger mt-1 ms-2" style="font-size: 12px">
          {{ err }}
        </span>
      </div>
    </div>

    <transition-group name="list">
      <div
        class="image-container"
        v-for="(image, index) in props.images"
        :key="index"
      >
        <div class="image-card">
          <img :src="image.image_url ?? defultImage" />
          <button
            v-if="canDeleteImage"
            type="button"
            class="image-card-delete-btn"
            @click="removeImage(index, image.image_id)"
          >
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
        </div>
        <div class="image-card-footer">
          <!-- <div class="form-check">
            <input
              name="is_main_image"
              class="form-check-input me-1"
              type="radio"
              :id="'is-main-image-' + index"
            />
            <label class="form-check-label m-1" :for="'is-main-image-' + index">
              main image
            </label>
          </div> -->
          <button
            type="button"
            class="image-card-full-btn"
            @click="showFullScreenImage(image.image_url ?? defultImage)"
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
import { ref, reactive } from "vue";
import defultImage from "@/assets/img/defult-image.png";

const props = defineProps({
  multiple: Boolean,
  maxWidth: {
    type: String,
    default: "250px",
  },
  images: {
    default: reactive([]),
    type: Array,
  },
  error: Array,
  canDeleteImage: Boolean,
});
const emits = defineEmits(["onUpload", "onDelete"]);

let fullScreenImage = ref("");
let showImage = ref(false);
let imagesFiles = [];

const onFileChange = (e) => {
  const file = e.target.files[0];
  props.images.splice(0, 1);
  props.images.push({
    file: file,
    image_url: URL.createObjectURL(file),
  });

  props.images.forEach((element) => {
    imagesFiles.push(element.file);
  });

  emits("onUpload", imagesFiles[0]);
};

const onFilesChange = (e) => {
  const files = e.target.files;
  let file;

  for (file of files) {
    props.images.push({
      file: file,
      image_url: URL.createObjectURL(file),
    });
  }

  props.images.forEach((element) => {
    imagesFiles.push(element.file);
  });

  emits("onUpload", imagesFiles);
};

const removeImage = (index, image_id) => {
  props.images.splice(index, 1);
  if (image_id) {
    emits("onDelete", image_id);
  }

  props.images.forEach((element) => {
    imagesFiles.push(element.file);
  });

  emits("onUpload", imagesFiles);
};

const showFullScreenImage = (image) => {
  fullScreenImage.value = image;
  showImage.value = true;
};
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
