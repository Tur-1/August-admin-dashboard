<script setup>
import {
  FormStore,
  BaseForm,
  FormInput,
  FormFileUpload,
} from "@/components/BaseForm";
import useBrandsService from "@/pages/Brands/services/useBrandsService";

import { onMounted } from "vue";

const { storeNewBrand } = useBrandsService();

onMounted(() => {
  FormStore.clearErrors();
  FormStore.setFields({
    name: "",
    image: "",
  });
});
</script>
<template>
  <section class="main-section">
    <BaseForm @onSubmit="storeNewBrand" submitTitle="create" title="new Brand">
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
