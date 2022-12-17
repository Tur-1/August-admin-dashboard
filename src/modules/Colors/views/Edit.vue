<script setup>
import {
  FormStore,
  BaseForm,
  FormInput,
  FormFileUpload,
} from "@/components/BaseForm";
import useColorsService from "@/modules/Colors/services/useColorsService";

import { onMounted } from "vue";

const { updateColor, showColor } = useColorsService();

onMounted(showColor);
const formData = new FormData();
</script>
<template>
  <section class="main-section">
    <BaseForm
      @onSubmit="updateColor(formData)"
      submitTitle="update"
      title="update color"
    >
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-lg-6">
          <FormInput
            label="name *"
            v-model="FormStore.fields.name"
            id="name1"
            type="text"
            :error="FormStore.errors.name?.[0]"
          />

          <FormFileUpload
            :error="FormStore.errors.image?.[0]"
            @onUploadImage="(image) => formData.append('image', image)"
            :imageUrl="FormStore.fields.image_url"
          />
        </div>
      </div>
    </BaseForm>
  </section>
</template>
