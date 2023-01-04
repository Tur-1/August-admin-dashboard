<template>
  <section class="main-section">
    <BaseForm
      @onSubmit="updateCoupon(route.params.id)"
      submitTitle="update"
      title="update Coupon"
    >
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-lg-6">
          <FormInput
            label="coupon code *"
            v-model="FormStore.fields.code"
            id="code"
            type="text"
            :error="FormStore.errors.code"
          />
          <FormInput
            label="coupon amount *"
            v-model="FormStore.fields.amount"
            id="amount"
            type="number"
            :error="FormStore.errors.amount"
          />
          <FormInput
            label="coupon use times *"
            v-model="FormStore.fields.use_times"
            id="use_times"
            type="text"
            :error="FormStore.errors.use_times"
          />
          <FormSelect
            label="Status*"
            v-model="FormStore.fields.is_active"
            :error="FormStore.errors.is_active"
            id="is_active"
          >
            <option :value="1" :selected="FormStore.fields.is_active == true">
              Active
            </option>
            <option :value="0" :selected="FormStore.fields.is_active == false">
              inActive
            </option>
          </FormSelect>
        </div>
        <div class="col-12 col-lg-6">
          <FormInput
            label="minimum purchases *"
            v-model="FormStore.fields.minimum_purchases"
            id="minimum_purchases"
            type="number"
            step="'any'"
            :error="FormStore.errors.minimum_purchases"
          />

          <FormSelect
            label="Coupon Type *"
            v-model="FormStore.fields.type"
            :error="FormStore.errors.type"
            id="type"
            :options="['Percentage', 'Fixed']"
            defaultOption="-- select type --"
          />
          <FormInput
            label="starts at *"
            v-model="FormStore.fields.starts_at"
            id="starts_at"
            type="date"
            step="'any'"
            :error="FormStore.errors.starts_at"
          />
          <FormInput
            label="expires at *"
            v-model="FormStore.fields.expires_at"
            id="expires_at"
            type="date"
            step="'any'"
            :error="FormStore.errors.expires_at"
          />
        </div>
      </div>
    </BaseForm>
  </section>
</template>

<script setup>
import {
  FormStore,
  FormSelect,
  BaseForm,
  FormInput,
} from "@/components/BaseForm";

import { onMounted } from "vue";
import useCouponsService from "@/modules/Coupons/services/useCouponsService";
import { useRoute } from "vue-router";

const route = useRoute();
const { updateCoupon, showCoupon } = useCouponsService();

onMounted(showCoupon);
</script>
