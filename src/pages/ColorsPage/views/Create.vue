<script setup>
import {
  FormStore,
  BaseForm,
  FormInput,
  FormFileUpload,
} from "@/components/BaseForm";
import useColorsService from "@/pages/ColorsPage/services/useColorsService";

import { onMounted } from "vue";

const { storeNewColor } = useColorsService();

onMounted(() => {
  FormStore.setFields({
    name: "",
    image: "",
  });
});
</script>
<template>
  <section class="main-section">
    <BaseForm @onSubmit="storeNewColor" submitTitle="create" title="new color">
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
          />
        </div>
      </div>
    </BaseForm>
  </section>
</template>
