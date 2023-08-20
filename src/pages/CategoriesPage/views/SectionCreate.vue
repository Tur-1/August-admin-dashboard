<script setup>
import {
  FormFileUpload,
  BaseForm,
  FormInput,
  FormStore,
} from "@/components/BaseForm";
import useSectionService from "@/pages/CategoriesPage/services/useSectionService";
import { onMounted } from "vue";

const { storeNewSection } = useSectionService();

onMounted(() => {
  FormStore.setFields({
    name: "",
    image: "",
  });
});
</script>
<template>
  <section class="main-section">
    <BaseForm
      submitTitle="create"
      title="new section"
      @onSubmit="storeNewSection"
    >
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 col-12">
          <FormInput
            label="Name *"
            v-model="FormStore.fields.name"
            id="sectionName"
            :error="FormStore.errors.name"
          />
          <FormFileUpload
            :error="FormStore.errors.image"
            @onUpload="(image) => (FormStore.fields.image = image)"
          />
        </div>
      </div>
    </BaseForm>
  </section>
</template>
