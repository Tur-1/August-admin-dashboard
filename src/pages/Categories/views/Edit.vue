<script setup>
import { onMounted } from "vue";
import useCategoryService from "@/pages/Categories/services/useCategoryService";
import CategoryTree from "@/pages/Categories/components/CategoryTree.vue";
import CategoryStore from "@/pages/Categories/stores/CategoryStore";

import {
  FormStore,
  BaseForm,
  FormSelect,
  FormInput,
  FormFileUpload,
} from "@/components/BaseForm";

const { showCategory, updateCategory, getAllCategoriesBySection } =
  useCategoryService();

onMounted(showCategory);
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
              v-for="(section, index) in CategoryStore.sections"
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
            <CategoryTree
              v-for="category in CategoryStore.sectionCategories"
              :category="category"
              :key="category.id"
              :selected="FormStore.fields.parent_id == category.id"
            />
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
