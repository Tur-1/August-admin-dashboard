<template>
  <div class="upload-image-box shadow">
    <label for="image" class="upload-image-label">
      <img
        v-if="imagePreviewUrl"
        :src="imagePreviewUrl"
        class="image-preview"
        alt=""
      />
      <div v-if="!imagePreviewUrl" class="upload-image-warrapr">
        <img src="@/assets/img/upload.png" alt="" />
        <p>Drag your Photes to start uploading .</p>
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
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  maxWidth: {
    type: String,
    default: "250px",
  },
});

let imagePreviewUrl = ref("");

const onFileChange = (e) => {
  const file = e.target.files[0];
  imagePreviewUrl.value = URL.createObjectURL(file);
};
</script>
<style scoped>
.image-preview {
  max-height: v-bind(maxWidth);
  max-width: v-bind(maxWidth);
}
</style>
