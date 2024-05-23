<script setup>
import { onMounted } from "vue";
import useCategoryService from "@/pages/CategoriesPage/services/useCategoryService";

import {
  FormStore,
  BaseForm,
  FormSelect,
  FormInput,
  FormFileUpload,
} from "@/components/BaseForm";
import useCategoriesStore from "@/pages/CategoriesPage/stores/CategoriesStore";
import { useRoute } from "vue-router";

const { showCategory, updateCategory, getAllCategoriesBySection } =
  useCategoryService();
const categoriesStore = useCategoriesStore();
const route = useRoute();
onMounted(async () => {
  await showCategory(route.params.id);
});
</script>
<template>
  <section class="main-section">
    <BaseForm
      submitTitle="update"
      title="update category"
      @onSubmit="updateCategory"
    >
      <div class="row">
        <div class="col-lg-6 col-12">
          <!-- select section-->
          <FormSelect
            label="section *"
            v-model="FormStore.fields.section_id"
            :error="FormStore.errors.section_id"
            id="section"
            defaultOption="-- select section --"
            @change="getAllCategoriesBySection(FormStore.fields.section_id)"
          >
            <option
              v-for="(section, index) in categoriesStore.sections"
              :key="index"
              :value="section.id"
              :selected="FormStore.fields.section_id == section.id"
            >
              {{ section.name }}
            </option>
          </FormSelect>

          <!-- select category-->
          <FormSelect
            label="category *"
            v-model="FormStore.fields.parent_id"
            :error="FormStore.errors.parent_id"
            id="category"
            defaultOption="-- main category --"
          >
            <option
              v-for="category in categoriesStore.sectionCategories"
              :value="category.id"
              :key="category.id"
              :selected="FormStore.fields.parent_id == category.id"
            >
              <span>{{ category.name }}</span>
            </option>
          </FormSelect>
          <!-- category name input-->
          <FormInput
            label="Name *"
            v-model="FormStore.fields.name"
            id="categoryName"
            :error="FormStore.errors.name"
          />
        </div>
        <div class="col-lg-6 col-12">
          <FormFileUpload
            :error="FormStore.errors.image"
            @onUpload="(image) => (FormStore.fields.image = image)"
            :image_url="FormStore.fields.image_url"
          />
        </div>
      </div>
    </BaseForm>
  </section>
</template>

