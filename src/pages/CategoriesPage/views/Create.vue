<script setup>
import { onMounted } from "vue";
import useCategoryService from "@/pages/CategoriesPage/services/useCategoryService";
import CategoryTree from "@/pages/CategoriesPage/components/CategoryTree.vue";
import CategoryStore from "@/pages/CategoriesPage/stores/CategoryStore";
import {
  FormStore,
  BaseForm,
  FormInput,
  FormSelect,
  FormFileUpload,
} from "@/components/BaseForm";
import useSectionService from "@/pages/CategoriesPage/services/useSectionService";

const { getAllCategoriesBySection, storeNewCategory } = useCategoryService();
const { getSections } = useSectionService();

onMounted(async () => {
  FormStore.setFields({
    parent_id: "",
    section_id: "",
    name: "",
    image: "",
  });
  CategoryStore.sectionCategories = [];

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
            :error="FormStore.errors.parent_id"
            id="category"
            defaultOption="-- main category --"
          >
            <!-- <CategoryTree
              v-for="category in CategoryStore.sectionCategories"
              :category="category"
              :key="category.id"
            /> -->
            <option
              v-for="category in CategoryStore.sectionCategories"
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
