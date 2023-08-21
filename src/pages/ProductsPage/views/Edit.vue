<script setup>
import { FormStore, FormInput, FormSelect } from "@/components/BaseForm";
import { useRoute } from "vue-router";
import {
  ProductImages,
  SizeOptions,
  ProductDiscount,
  ProductDetails,
} from "@/pages/ProductsPage/components";
import useProductsService from "@/pages/ProductsPage/services/useProductsService";
import ProductAttributesStore from "@/pages/ProductsPage/stores/ProductAttributesStore";
import SubmitButton from "@/components/SubmitButton/index.vue";

import { onMounted } from "vue";
import useProductAttributesService from "@/pages/ProductsPage/services/useProductAttributesService";

const { updateProduct, showProduct, deleteProductImage } = useProductsService();
const {
  getColors,
  getBrands,
  getSections,
  getAllCategoriesBySection,
  getSizeOptions,
} = useProductAttributesService();
const route = useRoute();
onMounted(async () => {
  FormStore.clearErrors();

  await showProduct(route.params.id);
  Promise.all([getColors(), getBrands(), getSections(), getSizeOptions()]);
});
</script>
<template>
  <section class="main-section">
    <form @submit.prevent="updateProduct" enctype="multipart/form-data">
      <div class="card border-0 shadow p-2 pb-4 mb-4">
        <div
          class="card-header mx-lg-4 p-0 py-3 py-lg-3 mb-4 mb-md-0 d-flex justify-content-between"
        >
          <h3 class="h5 mb-0">update product</h3>

          <SubmitButton title="update" />
        </div>
        <div class="card-body p-0 p-md-4">
          <div class="row">
            <div class="col-12 col-lg-6">
              <FormInput
                label="name *"
                v-model="FormStore.fields.name"
                id="name1"
                type="text"
                :error="FormStore.errors.name"
              />

              <FormSelect
                label="brands *"
                v-model="FormStore.fields.brand_id"
                :error="FormStore.errors.brand_id"
                id="brands"
                defaultOption="-- select brand --"
              >
                <option
                  v-for="brand in ProductAttributesStore.brands"
                  :value="brand.id"
                  :selected="FormStore.fields.brand_id == brand.id"
                >
                  {{ brand.name }}
                </option>
              </FormSelect>
              <FormSelect
                label="colors *"
                v-model="FormStore.fields.color_id"
                :error="FormStore.errors.color_id"
                id="colors"
                defaultOption="-- select color --"
              >
                <option
                  v-for="color in ProductAttributesStore.colors"
                  :value="color.id"
                  :selected="FormStore.fields.color_id == color.id"
                >
                  {{ color.name }}
                </option>
              </FormSelect>
            </div>
            <div class="col-12 col-lg-6">
              <FormSelect
                label="section *"
                v-model="FormStore.fields.section_id"
                :error="FormStore.errors.section_id"
                id="section"
                defaultOption="-- select section --"
                @change="getAllCategoriesBySection(FormStore.fields.section_id)"
              >
                <option
                  v-for="(section, index) in ProductAttributesStore.sections"
                  :key="index"
                  :value="section.id"
                  :selected="FormStore.fields.section_id == section.id"
                >
                  {{ section.name }}
                </option>
              </FormSelect>

              <FormSelect
                label="category *"
                v-model="FormStore.fields.category_id"
                :error="FormStore.errors.category_id"
                id="category"
                defaultOption="-- select category --"
              >
                <option
                  v-for="category in ProductAttributesStore.categories"
                  :value="category.id"
                  :key="category.id"
                  :selected="FormStore.fields.parent_id == category.id"
                >
                  <span>{{ category.name }}</span>
                </option>
              </FormSelect>
              <FormInput
                label="shipping cost *"
                v-model="FormStore.fields.shipping_cost"
                id="shipping_cost1"
                type="number"
                step="any"
                :error="FormStore.errors.shipping_cost"
              />
            </div>
            <div class="col-12 col-lg-6">
              <FormInput
                label="price *"
                v-model="FormStore.fields.price"
                id="price1"
                type="number"
                placeholder="385"
                step="any"
                :error="FormStore.errors.price"
              />
            </div>
          </div>
        </div>
      </div>

      <ProductDiscount />

      <ProductDetails />

      <div class="row">
        <SizeOptions />
        <ProductImages
          @onDelete="async (image_id) => await deleteProductImage(image_id)"
          :images="FormStore.fields.images"
        />
      </div>
    </form>
  </section>
</template>
