<script setup>
import {
  FormStore,
  BaseForm,
  FormInput,
  FormFileUpload,
} from "@/components/BaseForm";
import useBannersService from "@/modules/AugustBanners/services/useBannersService";

import { onMounted } from "vue";

const { updateBanner, showBanner } = useBannersService();

onMounted(showBanner);
</script>
<template>
  <section class="main-section">
    <BaseForm
      @onSubmit="updateBanner"
      submitTitle="update"
      title="update Banner"
    >
      <FormInput
        label="title *"
        v-model="FormStore.fields.title"
        id="title"
        type="text"
        :error="FormStore.errors.title"
      />
      <FormInput
        label="link "
        v-model="FormStore.fields.link"
        id="link"
        type="text"
        :error="FormStore.errors.link"
      />
      <div class="d-flex mt-2 mb-2">
        <label class="me-4">Type :</label>
        <div class="form-check me-3">
          <input
            class="form-check-input"
            type="radio"
            name="small"
            v-model="FormStore.fields.type"
            value="small"
            id="small"
          />
          <label class="form-check-label" for="small"> small </label>
        </div>
        <div class="form-check me-3">
          <input
            class="form-check-input"
            type="radio"
            name="medium"
            v-model="FormStore.fields.type"
            id="medium"
            value="medium"
          />
          <label class="form-check-label" for="medium"> medium </label>
        </div>
        <div class="form-check me-3">
          <input
            class="form-check-input"
            type="radio"
            v-model="FormStore.fields.type"
            name="large"
            id="large"
            value="large"
          />
          <label class="form-check-label" for="large"> large </label>
        </div>
      </div>
      <FormFileUpload
        :error="FormStore.errors.image"
        @onUpload="(image) => (FormStore.fields.image = image)"
        :image_url="FormStore.fields.image_url"
      />
    </BaseForm>
  </section>
</template>
