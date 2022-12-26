<script setup>
import {
  FormStore,
  BaseForm,
  FormInput,
  FormFileUpload,
} from "@/components/BaseForm";
import useBrandsService from "@/modules/Brands/services/useBrandsService";

import { onMounted, reactive } from "vue";

const { updateBrand, showBrand } = useBrandsService();

onMounted(showBrand);
const formData = new FormData();
</script>
<template>
  <section class="main-section">
    <BaseForm
      @onSubmit="updateBrand(formData)"
      submitTitle="update"
      title="update Brand"
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
            @onUpload="(image) => formData.append('image', image)"
            :images="reactive([{ image_url: FormStore.fields.image_url }])"
          />
        </div>
      </div>
    </BaseForm>
  </section>
</template>
