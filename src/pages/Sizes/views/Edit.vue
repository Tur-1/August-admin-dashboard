<template>
  <section class="main-section">
    <BaseForm
      @onSubmit="updateSize(route.params.id)"
      submitTitle="update"
      title="update Size"
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
        </div>
      </div>
    </BaseForm>
  </section>
</template>

<script setup>
import { FormStore, BaseForm, FormInput } from "@/components/BaseForm";

import { onMounted } from "vue";
import useSizesService from "@/pages/Sizes/services/useSizesService";
import { useRoute } from "vue-router";

const route = useRoute();
const { updateSize, showSize } = useSizesService();

onMounted(showSize);
</script>
