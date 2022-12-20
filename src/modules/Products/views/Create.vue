<script setup>
import {
  FormStore,
  BaseForm,
  FormInput,
  FormFileUpload,
} from "@/components/BaseForm";
import useProductsService from "@/modules/Products/services/useProductsService";

import { onMounted } from "vue";

const { storeNewProduct } = useProductsService();

onMounted(() => {
  FormStore.clearErrors();
  FormStore.setFields({
    name: "",
  });
});

const formData = new FormData();
</script>
<template>
  <section class="main-section">
    <BaseForm
      @onSubmit="storeNewProduct(formData)"
      submitTitle="create"
      title="new color"
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
          />
        </div>
      </div>
    </BaseForm>
  </section>
</template>
