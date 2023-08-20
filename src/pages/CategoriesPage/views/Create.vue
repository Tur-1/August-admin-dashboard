<script setup>
import { onMounted } from "vue";
import useCategoryService from "@/pages/CategoriesPage/services/useCategoryService";
import useSectionService from "@/pages/CategoriesPage/services/useSectionService";
import useCategoriesStore from "@/pages/CategoriesPage/stores/CategoriesStore";
import {
  FormStore,
  BaseForm,
  FormInput,
  FormSelect,
  FormFileUpload,
} from "@/components/BaseForm";

const categoriesStore = useCategoriesStore();
const { getAllCategoriesBySection, storeNewCategory } = useCategoryService();
const { getSections } = useSectionService();

onMounted(async () => {
  categoriesStore.sectionCategories = [];
  FormStore.setFields({
    parent_id: "",
    section_id: "",
    name: "",
    image: "",
  });

  await getSections();
});
</script>
<template>
  <section class="main-section">
    <BaseForm
      submitTitle="create"
      title="new category"
      @onSubmit="storeNewCategory"
    >
      <div class="row">
        <div class="col-lg-6 col-12">
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
            >
              {{ section.name }}
            </option>
          </FormSelect>

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
            >
              <span>{{ category.name }}</span>
            </option>
          </FormSelect>

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
          />
        </div>
      </div>
    </BaseForm>
  </section>
</template>
