<template>
  <div class="card border-0 shadow mb-4">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="card-header">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            Discount
          </button>
        </h2>
      </div>

      <div class="accordion-item">
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div class="accordion-body row">
            <div class="col-12 col-lg-6">
              <FormSelect
                label="discount Type "
                v-model="FormStore.fields.discount_type"
                :error="FormStore.errors.discount_type"
                id="type"
                :options="['Percentage', 'Fixed']"
                defaultOption="-- select discount type --"
              />

              <FormInput
                label="discount amount"
                v-model="FormStore.fields.discount_amount"
                id="discount_amount1"
                type="number"
                step="any"
                :error="FormStore.errors.discount_amount"
              />
            </div>
            <div class="col-12 col-lg-6">
              <FormInput
                label="discount starts at "
                v-model="FormStore.fields.discount_start_at"
                id="discount_starts_at"
                type="date"
                step="'any'"
                :error="FormStore.errors.discount_start_at"
              />
              <FormInput
                label="discount expires at "
                v-model="FormStore.fields.discount_expires_at"
                id="discount_expires_at"
                type="date"
                step="'any'"
                :error="FormStore.errors.discount_expires_at"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FormStore, FormInput, FormSelect } from "@/components/BaseForm";
</script>
<style scoped>
.accordion-item {
  padding: 0 !important;
  border: none !important;
}
.accordion-button:not(.collapsed) {
  border: none !important;
  color: #000000 !important;
  background-color: #ffffff00 !important;
}
.card-header {
  padding: 7px 14px !important;
}
</style>
