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
</script>
<template>
  <section class="main-section">
    <BaseForm @onSubmit="updateColor" submitTitle="update" title="update color">
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-lg-6">
          <FormInput
            label="name *"
            v-model="FormStore.fields.name"
            id="name1"
            type="text"
            :error="FormStore.errors.name"
          />

          <FormFileUpload
            :error="FormStore.errors.image"
            @onUpload="(image) => (FormStore.fields.image = image)"
            :image_url="FormStore.fields.image_url"
          />
        </div>
      </div>
    </BaseForm>
  </section>
</template>
