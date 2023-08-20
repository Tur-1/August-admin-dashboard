<script setup>
import {
  FormStore,
  BaseForm,
  FormInput,
  FormFileUpload,
} from "@/components/BaseForm";
import useColorsService from "@/pages/ColorsPage/services/useColorsService";
const route = useRoute();
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const { updateColor, showColor } = useColorsService();

onMounted(async () => {
  await showColor(route.params.id);
});
</script>
<template>
  <section class="main-section">
    <BaseForm
      @onSubmit="updateColor(route.params.id)"
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
