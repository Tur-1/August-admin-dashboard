<script setup>
import useSectionService from "@/modules/Categories/services/useSectionService";
import { onMounted, reactive } from "vue";
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
            @onUpload="(image) => formData.append('image', image)"
            :images="reactive([{ image_url: FormStore.fields.image_url }])"
            :error="FormStore.errors.image"
          />
        </div>
      </div>
    </BaseForm>
  </section>
</template>
