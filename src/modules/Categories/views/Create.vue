<template>
  <section class="main-section">
    <FormCard
      submitTitle="create"
      title="new category"
      @onSubmit="storeNewCategory(formdata)"
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
              :selected="
                section.id == CategoryForm.fields.section_id ? true : false
              "
            >
              {{ section.name }}
            </option>
          </FormSelect>

          <div class="mb-3">
            <label>category</label>

            <select
              v-model="CategoryForm.fields.category_id"
              class="form-select d-none d-md-inline"
              aria-label="Message select example 2"
            >
              <option value="">-- select category --</option>
              <CategoryTree
                v-for="category in categories"
                :category="category"
                :key="category.id"
              />
            </select>
          </div>
          <FormInput
            label="Name *"
            v-model="CategoryForm.fields.name"
            id="categoryName"
          />
        </div>
        <div class="col-lg-6 col-12">
          <ImageUpload @change="selectImage" />
        </div>
      </div>
    </FormCard>
  </section>
</template>

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

const { getCategoriesBySection, storeNewCategory, getAllCategories } =
  useCategoryService();

let categories = ref([]);

onMounted(getAllCategories);

const getSectionCategories = async (section_id) => {
  useLoadingSpinner.show();
  if (section_id) {
    categories.value = await getCategoriesBySection(section_id);
  } else {
    categories.value = [];
  }

  useLoadingSpinner.hide();
};

const formdata = new FormData();

const selectImage = (e) => {
  CategoryForm.fields.image = e.target.files[0];

  formdata.append("image", CategoryForm.fields.image);
};
</script>
