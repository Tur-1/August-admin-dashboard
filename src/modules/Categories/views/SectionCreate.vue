<script setup>
import {
  FormFileUpload,
  BaseForm,
  FormInput,
  FormStore,
} from "@/components/BaseForm";
import useSectionService from "@/modules/Categories/services/useSectionService";
import { onMounted } from "vue";

const { storeNewSection } = useSectionService();
const formData = new FormData();

onMounted(() => {
  FormStore.setFields({
    name: "",
  });
});
</script>
<template>
  <section class="main-section">
    <BaseForm
      submitTitle="create"
      title="new section"
      @onSubmit="storeNewSection(formData)"
    >
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 col-12">
          <FormInput
            label="Name *"
            v-model="FormStore.fields.name"
            id="sectionName"
            :error="FormStore.errors.name?.[0]"
          />
          <FormFileUpload
            :error="FormStore.errors.image?.[0]"
            @onUploadImage="(image) => formData.append('image', image)"
          />
        </div>
      </div>
    </BaseForm>
  </section>
</template>
