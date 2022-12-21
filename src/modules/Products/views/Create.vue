<script setup>
import {
  FormStore,
  BaseForm,
  FormInput,
  FormSelect,
} from "@/components/BaseForm";
import CategoryTree from "@/modules/Categories/components/CategoryTree.vue";
import ProductImages from "@/modules/Products/components/ProductImages.vue";
import SizeOptions from "@/modules/Products/components/SizeOptions.vue";
import useProductsService from "@/modules/Products/services/useProductsService";
import ProductAttributesStore from "@/modules/Products/stores/ProductAttributesStore";
import SubmitButton from "@/components/SubmitButton/index.vue";
import { LightEditor } from "@hannanmiah/light-editor";
// import "@hannanmiah/light-editor/dist/style.css";
import { onMounted } from "vue";

const { storeNewProduct } = useProductsService();

onMounted(() => {
  FormStore.clearErrors();
  FormStore.setFields({
    name: "",
    details: "",
    info_and_care: "",
    images: [
      {
        id: null,
        product_id: null,
        image_url: null,
        is_main_image: null,
      },
    ],
    sizeOptions: [
      {
        id: null,
        size_id: null,
        stock: null,
      },
    ],
  });
});

const formData = new FormData();
</script>
<template>
  <section class="main-section">
    <form
      @submit.prevent="storeNewProduct(formData)"
      enctype="multipart/form-data"
    >
      <div class="card border-0 shadow p-2 pb-4 mb-4">
        <div
          class="card-header mx-lg-4 p-0 py-3 py-lg-3 mb-4 mb-md-0 d-flex justify-content-between"
        >
          <h3 class="h5 mb-0">new product</h3>

          <SubmitButton title="create" />
        </div>
        <div class="card-body p-0 p-md-4">
          <div class="row">
            <div class="col-12 col-lg-6">
              <FormInput
                label="name *"
                v-model="FormStore.fields.name"
                id="name1"
                type="text"
                :error="FormStore.errors.name?.[0]"
              />

              <FormSelect
                label="brands *"
                v-model="FormStore.fields.brand_id"
                @change="getbrandPermissions(FormStore.fields.brand_id)"
                :error="FormStore.errors.brand_id?.[0]"
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
                v-model="FormStore.fields.brand_id"
                @change="getbrandPermissions(FormStore.fields.brand_id)"
                :error="FormStore.errors.brand_id?.[0]"
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
                :error="FormStore.errors.section_id?.[0]"
                id="section"
                defaultOption="-- select section --"
                @change="getCategoriesBySection(FormStore.fields.section_id)"
              >
                <option
                  v-for="(section, index) in ProductAttributesStore.sections"
                  :key="index"
                  :value="section.id"
                >
                  {{ section.name }}
                </option>
              </FormSelect>

              <FormSelect
                label="category *"
                v-model="FormStore.fields.category_id"
                :error="FormStore.errors.category_id?.[0]"
                id="category"
                defaultOption="-- select category --"
              >
                <CategoryTree
                  v-for="category in ProductAttributesStore.categories"
                  :category="category"
                  :key="category.id"
                />
              </FormSelect>
              <FormInput
                label="shipping cost *"
                v-model="FormStore.fields.shipping_cost"
                id="shipping_cost1"
                type="number"
                step="any"
                :error="FormStore.errors.shipping_cost?.[0]"
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
                :error="FormStore.errors.price?.[0]"
              />
              <FormSelect
                label="discount Type "
                v-model="FormStore.fields.discount_type"
                :error="FormStore.errors.discount_type?.[0]"
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
                :error="FormStore.errors.discount_amount?.[0]"
              />
              <FormInput
                label="discount starts at "
                v-model="FormStore.fields.discount_starts_at"
                id="discount_starts_at"
                type="date"
                step="'any'"
                :error="FormStore.errors.discount_starts_at?.[0]"
              />
              <FormInput
                label="discount expires at "
                v-model="FormStore.fields.discount_expires_at"
                id="discount_expires_at"
                type="date"
                step="'any'"
                :error="FormStore.errors.discount_expires_at?.[0]"
              />
            </div>
            <div class="col-lg-6">
              <div class="mb-4">
                <label for="details">details</label>
                <light-editor v-model="FormStore.fields.details" />
              </div>
              <div class="mb-2">
                <label for="info_and_care">info and care</label>
                <light-editor v-model="FormStore.fields.info_and_care" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <SizeOptions />

        <ProductImages />
      </div>
    </form>
  </section>
</template>
<style>
.editor-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.375rem;
  border-width: 1px;
}
button.editor-btn {
  background-color: #ccc;
  border-radius: 0.375rem;
  padding: 0.5rem;
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / 1);
  transition-duration: 0.3s;
  border: none;
  margin: 0 5px;
}
.editor-btn .icon {
  height: 1rem;
  width: 1rem;
}
.editor-toolbox {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-bottom-width: 1px;
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / 1);
  padding: 0.5rem;
}
.header-div {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
