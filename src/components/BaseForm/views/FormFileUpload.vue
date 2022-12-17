<template>
  <div class="row">
    <div class="upload-image-box shadow">
      <label
        for="image"
        class="upload-image-label"
        :class="{ 'is-invalid': error }"
      >
        <img
          v-if="imagePreviewUrl || props.imageUrl"
          :src="imagePreviewUrl || props.imageUrl"
          class="image-preview"
          alt=""
        />
        <div class="upload-image-warrapr">
          <img
            src="@/assets/img/upload.png"
            alt=""
            v-show="!props.imageUrl && !imagePreviewUrl"
          />
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
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  maxWidth: {
    type: String,
    default: "250px",
  },
  imageUrl: {
    type: String,
  },
  error: String,
});
const emits = defineEmits(["onUploadImage"]);

let imagePreviewUrl = ref("");

const formData = new FormData();

const onFileChange = (e) => {
  const file = e.target.files[0];
  imagePreviewUrl.value = URL.createObjectURL(file);
  emits("onUploadImage", file);
};
</script>
<style scoped>
.image-preview {
  max-height: v-bind(maxWidth);
  max-width: v-bind(maxWidth);
}
</style>
