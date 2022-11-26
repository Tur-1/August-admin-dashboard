<template>
  <section class="main-section">
    <FormCard
      submitTitle="create"
      title="new category"
      @onSubmit="storeNewCategory"
      :onProgress="CategoryForm.onProgress"
    >
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

import CategoryStore from "@/modules/Categories/stores/CategoryStore";

const { getCategoriesBySection, storeNewCategory, getAllCategories } =
  useCategoryService();

let categories = ref([]);

onMounted(getAllCategories);

const getSectionCategories = async (section_id) => {
  categories.value = await getCategoriesBySection(section_id);
};
</script>
