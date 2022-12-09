<script setup>
import FormInput from "@/components/FormInput/index.vue";
import FormCard from "@/components/FormCard/index.vue";
import useSectionService from "@/modules/Categories/services/useSectionService";
import CategoryForm from "@/modules/Categories/stores/CategoryForm";
import ImageUpload from "@/components/ImageUpload/index.vue";

import { onMounted } from "vue";

const { updateSection, getSection } = useSectionService();
onMounted(getSection);

const formData = new FormData();
</script>
<template>
  <section class="main-section">
    <FormCard
      submitTitle="update"
      title="update section"
      @onSubmit="updateSection(formData)"
      :onProgress="CategoryForm.onProgress"
    >
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 col-12">
          <FormInput
            label="Name *"
            v-model="CategoryForm.fields.name"
            id="categoryName"
          />
          <ImageUpload
            @onUploadImage="(image) => formData.append('image', image)"
            :imageUrl="CategoryForm.fields.image_url"
            :error="CategoryForm.errors.image?.[0]"
          />
        </div>
      </div>
    </FormCard>
  </section>
</template>
