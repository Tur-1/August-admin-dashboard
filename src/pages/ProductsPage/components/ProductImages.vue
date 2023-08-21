<template>
  <div class="col-12 col-lg-6">
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
          multiple
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
    </div>

    <transition-group name="list" v-if="props.images" tag="div" class="row">
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

        <div
          v-show="FormStore.errors[`productImages.${index}`]"
          v-for="err in FormStore.errors[`productImages.${index}`]"
          class="d-flex flex-column"
        >
          <span class="text-danger mt-1 ms-2" style="font-size: 12px">
            {{ err }}
          </span>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import defultImage from "@/assets/img/defult-image.png";
import useProductsService from "@/pages/ProductsPage/services/useProductsService";
import { FormStore } from "@/components/BaseForm";

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
});

const emits = defineEmits(["onUpload", "onDelete"]);
const { changeProductMainImage } = useProductsService();

let fullScreenImage = ref("");
let showfullScreenImage = ref(false);

let productImages = [];

const onFilesChange = (e) => {
  const files = e.target.files;
  let file;
  if (files) {
    for (file of files) {
      props.images.push({
        file: file,
        image_url: URL.createObjectURL(file),
      });
    }

    FormStore.fields.productImages = getImages();
  }
};

const removeImage = (index, image_id) => {
  props.images.splice(index, 1);

  if (image_id) {
    emits("onDelete", image_id);
  }

  FormStore.fields.productImages = props.images
    .filter(
      (element, elementIndex) =>
        element.file && element.file.is_main_image == false
    )
    .map((element) => {
      return element.file;
    });
};

const showFullScreenImage = (image) => {
  fullScreenImage.value = image;
  showfullScreenImage.value = true;
};
const getImages = (index) => {
  return props.images
    .filter((element, elementIndex) => element.file)
    .map((eleme) => {
      eleme.file.is_main_image = false;
      return eleme.file;
    });
};

const changeMainImage = async ({ imageId, index }) => {
  if (imageId) {
    await changeProductMainImage(imageId);
    return;
  }

  props.images.forEach((element, elementIndex) => {
    if (elementIndex == index) {
      element.file.is_main_image = true;
    }
  });

  let mainImage = props.images.at(index).file;

  FormStore.fields.mainImage = mainImage;

  FormStore.fields.productImages = props.images
    .filter(
      (element, elementIndex) =>
        element.file && element.file.is_main_image == false
    )
    .map((element) => {
      return element.file;
    });

  console.log(FormStore.fields.productImages, mainImage);
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
