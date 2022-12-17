<template>
  <section class="main-section">
    <BaseForm @onSubmit="storeNewSize" submitTitle="create" title="new Size">
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-lg-6">
          <FormInput
            label="name *"
            v-model="FormStore.fields.name"
            id="name1"
            type="text"
            :error="FormStore.errors.name?.[0]"
          />
        </div>
      </div>
    </BaseForm>
  </section>
</template>

<script setup>
import { FormStore, BaseForm, FormInput } from "@/components/BaseForm";
import useSizesService from "@/modules/Sizes/services/useSizesService";

import { onMounted } from "vue";

const { storeNewSize } = useSizesService();

onMounted(() => {
  FormStore.setFields({
    name: "",
  });
});
</script>
