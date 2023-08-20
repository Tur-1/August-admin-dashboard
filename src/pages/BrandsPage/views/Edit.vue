<script setup>
import {
  FormStore,
  BaseForm,
  FormInput,
  FormFileUpload,
} from "@/components/BaseForm";
import useBrandsService from "@/pages/BrandsPage/services/useBrandsService";

import { onMounted } from "vue";

const { updateBrand, showBrand } = useBrandsService();

onMounted(showBrand);
</script>
<template>
  <section class="main-section">
    <BaseForm @onSubmit="updateBrand" submitTitle="update" title="update Brand">
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
            @onUpload="(image) => (FormStore.fields.image = image)"
            :image_url="FormStore.fields.image_url"
          />
        </div>
      </div>
    </BaseForm>
  </section>
</template>
