<script setup>
import useSectionService from "@/modules/Categories/services/useSectionService";

import { onMounted } from "vue";
import {
  FormFileUpload,
  BaseForm,
  FormInput,
  FormStore,
} from "@/components/BaseForm";

const { updateSection, showSection } = useSectionService();
onMounted(showSection);

const formData = new FormData();
</script>
<template>
  <section class="main-section">
    <BaseForm
      submitTitle="update"
      title="update section"
      @onSubmit="updateSection(formData)"
    >
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 col-12">
          <FormInput
            label="Name *"
            v-model="FormStore.fields.name"
            id="categoryName"
          />
          <FormFileUpload
            @onUploadImage="(image) => formData.append('image', image)"
            :imageUrl="FormStore.fields.image_url"
            :error="FormStore.errors.image?.[0]"
          />
        </div>
      </div>
    </BaseForm>
  </section>
</template>
