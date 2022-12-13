<script setup>
import { onMounted } from "vue";
import useCategoryService from "@/modules/Categories/services/useCategoryService";
import CategoryTree from "@/modules/Categories/components/CategoryTree.vue";
import CategoryStore from "@/modules/Categories/stores/CategoryStore";
import {
  FormStore,
  BaseForm,
  FormInput,
  FormSelect,
  FormFileUpload,
} from "@/components/BaseForm";

const { getCategoriesBySection, storeNewCategory, getAllSections } =
  useCategoryService();

onMounted(async () => {
  await getAllSections();

  FormStore.setFields({
    parent_id: "",
    section_id: "",
    name: "",
  });
  CategoryStore.sectionCategories = [];
});

const formData = new FormData();
</script>
<template>
  <section class="main-section">
    <BaseForm
      submitTitle="create"
      title="new category"
      @onSubmit="storeNewCategory(formData)"
    >
      <div class="row">
        <div class="col-lg-6 col-12">
          <FormSelect
            label="section *"
            v-model="FormStore.fields.section_id"
            :error="FormStore.errors.section_id?.[0]"
            id="section"
            defaultOption="-- select section --"
            @change="getCategoriesBySection(FormStore.fields.section_id)"
          >
            <option
              v-for="(section, index) in CategoryStore.sections"
              :key="index"
              :value="section.id"
            >
              {{ section.name }}
            </option>
          </FormSelect>

          <FormSelect
            label="category *"
            v-model="FormStore.fields.parent_id"
            :error="FormStore.errors.parent_id?.[0]"
            id="category"
            defaultOption="-- main category --"
          >
            <CategoryTree
              v-for="category in CategoryStore.sectionCategories"
              :category="category"
              :key="category.id"
            />
          </FormSelect>

          <FormInput
            label="Name *"
            v-model="FormStore.fields.name"
            id="categoryName"
            :error="FormStore.errors.name?.[0]"
          />
        </div>
        <div class="col-lg-6 col-12">
          <FormFileUpload
            :error="FormStore.errors.image?.[0]"
            @onUploadImage="(image) => formData.append('image', image)"
          />
        </div>
      </div>
    </BaseForm>
  </section>
</template>
