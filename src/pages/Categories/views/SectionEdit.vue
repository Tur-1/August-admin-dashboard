<script setup>
import useSectionService from "@/pages/Categories/services/useSectionService";
import { onMounted } from "vue";
import {
  FormFileUpload,
  BaseForm,
  FormInput,
  FormStore,
} from "@/components/BaseForm";

const { updateSection, showSection } = useSectionService();
onMounted(showSection);
</script>
<template>
  <section class="main-section">
    <BaseForm
      submitTitle="update"
      title="update section"
      @onSubmit="updateSection"
    >
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 col-12">
          <FormInput
            label="Name *"
            v-model="FormStore.fields.name"
            id="categoryName"
          />
          <FormFileUpload
            @onUpload="(image) => (FormStore.fields.image = image)"
            :image_url="FormStore.fields.image_url"
          />
        </div>
      </div>
    </BaseForm>
  </section>
</template>
