<script setup>
import FormInput from "@/components/FormInput/index.vue";
import FormCard from "@/components/FormCard/index.vue";
import useSectionService from "@/modules/Categories/services/useSectionService";
import CategoryForm from "@/modules/Categories/stores/CategoryForm";
import ImageUpload from "@/components/ImageUpload/index.vue";

const { storeNewSection } = useSectionService();
const formData = new FormData();
</script>
<template>
  <section class="main-section">
    <FormCard
      submitTitle="create"
      title="new section"
      @onSubmit="storeNewSection(formData)"
      :onProgress="CategoryForm.onProgress"
    >
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 col-12">
          <FormInput
            label="Name *"
            v-model="CategoryForm.fields.name"
            id="sectionName"
            :error="CategoryForm.errors.name?.[0]"
          />
          <ImageUpload
            :error="CategoryForm.errors.image?.[0]"
            @onUploadImage="(image) => formData.append('image', image)"
          />
        </div>
      </div>
    </FormCard>
  </section>
</template>
