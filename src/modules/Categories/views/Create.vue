<script setup>
import FormInput from "@/components/FormInput/index.vue";
import FormSelect from "@/components/FormSelect/index.vue";
import FormCard from "@/components/FormCard/index.vue";
import { onMounted, ref } from "vue";
import useCategoryService from "@/modules/Categories/services/useCategoryService";
import CategoryTree from "@/modules/Categories/components/CategoryTree.vue";
import CategoryForm from "@/modules/Categories/stores/CategoryForm";
import ImageUpload from "@/components/ImageUpload/index.vue";
import CategoryStore from "@/modules/Categories/stores/CategoryStore";
import { useLoadingSpinner } from "@/components/LoadingSpinner";

const { getCategoriesBySection, storeNewCategory, getAllSections } =
  useCategoryService();

let categories = ref([]);

onMounted(getAllSections);

const getSectionCategories = async (section_id) => {
  useLoadingSpinner.show();
  if (section_id) {
    categories.value = await getCategoriesBySection(section_id);
  } else {
    categories.value = [];
  }

  useLoadingSpinner.hide();
};

const formData = new FormData();
</script>
<template>
  <section class="main-section">
    <FormCard
      submitTitle="create"
      title="new category"
      @onSubmit="storeNewCategory(formData)"
      :onProgress="CategoryForm.onProgress"
    >
      <div class="row">
        <div class="col-lg-6 col-12">
          <FormSelect
            label="section *"
            v-model="CategoryForm.fields.section_id"
            :error="CategoryForm.errors.section_id?.[0]"
            id="section"
            defaultOption="-- select section --"
            @change="getSectionCategories(CategoryForm.fields.section_id)"
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
            v-model="CategoryForm.fields.parent_id"
            :error="CategoryForm.errors.parent_id?.[0]"
            id="category"
            defaultOption="-- select category --"
          >
            <CategoryTree
              v-for="category in categories"
              :category="category"
              :key="category.id"
            />
          </FormSelect>

          <FormInput
            label="Name *"
            v-model="CategoryForm.fields.name"
            id="categoryName"
            :error="CategoryForm.errors.name?.[0]"
          />
        </div>
        <div class="col-lg-6 col-12">
          <ImageUpload
            :error="CategoryForm.errors.image?.[0]"
            @onUploadImage="(image) => formData.append('image', image)"
          />
        </div>
      </div>
    </FormCard>
  </section>
</template>
