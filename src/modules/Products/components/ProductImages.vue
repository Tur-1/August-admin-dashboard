<template>
  <div class="col-12 col-lg-6">
    <div class="card border-0 shadow p-2 pb-4 mb-4">
      <div class="card-header p-2">
        <button
          @click="addField"
          class="btn btn-gray-800 d-flex align-items-center justify-content-between btn-sm"
          type="button"
        >
          <i class="fas fa-plus me-2" />
          add image
        </button>
      </div>
      <div class="card-body p-0 p-md-4">
        <div class="row">
          <transition-group name="list">
            <div
              class="col-lg-4 mb-5"
              v-for="(image, index) in FormStore.fields.images"
              :key="index"
            >
              <div class="card">
                <div class="card-body p-0">
                  <label class="w-100 m-0" :for="'image-input-' + index">
                    <img
                      class="card-image"
                      :src="image.image_url ?? defultImage"
                      style="min-height: 350px !important"
                    />
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    :id="'image-input-' + index"
                    style="display: none"
                    @change="onFileChange($event, index)"
                  />
                </div>
                <div class="card-footer p-2">
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <div class="form-check d-flex flex-row align-items-center">
                      <input
                        wire:key="0"
                        wire:change="changeMainImage(0,)"
                        class="form-check-input me-1"
                        type="radio"
                        name="images[0][is_main_image]"
                        id="is-main-image-"
                        value=""
                      />
                      <label class="form-check-label m-1" for="is-main-image-">
                        <span> main image</span>
                      </label>
                    </div>
                    <button
                      @click="removeField(index)"
                      type="button"
                      class="btn border ps-1 pt-0 pb-0 pe-1"
                    >
                      <i class="fas fa-trash text-danger"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FormStore } from "@/components/BaseForm";
import { ref } from "vue";

import defultImage from "@/assets/img/defult-image.png";

const addField = () => {
  FormStore.fields.images.push({
    id: null,
    product_id: null,
    image_url: null,
    is_main_image: null,
  });
};
const removeField = (index) => {
  FormStore.fields.images.splice(index, 1);
};
let imagePreviewUrl = ref("");
const onFileChange = (e, index) => {
  const file = e.target.files[0];
  FormStore.fields.images[index].image_url = URL.createObjectURL(file);
};
</script>
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
