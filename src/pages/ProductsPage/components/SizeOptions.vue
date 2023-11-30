<template>
  <div class="col-xl-6">
    <div class="card border-0 shadow p-0 mb-4">
      <div class="card-body p-0 p-md-1">
        <div class="table-responsive">
          <table class="table table-centered table-nowrap mb-0 rounded">
            <thead>
              <tr>
                <th class="w-5">#</th>
                <th class="w-40">Size</th>
                <th class="w-40">Stock</th>
                <th class="w-15 text-center">
                  <button
                    type="button"
                    @click="addField"
                    class="btn btn-primary btn-sm float-end d-flex align-items-center"
                  >
                    <i class="fas fa-plus me-2" />
                    <span>new size</span>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <transition-group name="list">
                <tr
                  v-for="(attr, index) in FormStore.fields.sizes"
                  :key="index"
                >
                  <td >{{ index + 1 }}</td>
                  <td class="w-40">
                    <FormSelect
                      v-model="attr.size_id"
                      id="section"
                      defaultOption="-- select size --"
                      :error="FormStore.errors[`sizes.${index}.size_id`]"
                    >
                      <option
                        v-for="(size, index) in ProductAttributesStore.sizes"
                        :key="index"
                        :value="size.id"
                        :selected="attr.size_id == size.id"
                      >
                        {{ size.name }}
                      </option>
                    </FormSelect>
                  </td>
                  <td class="w-40">
                    <FormInput
                      v-model="attr.stock"
                      id="name1"
                      type="number"
                      placeholder="in stock"
                      :error="FormStore.errors[`sizes.${index}.stock`]"
                    />
                  </td>
                  <td class="w-15 text-center">
                    <button
                      v-if="index != 0"
                      type="button"
                      class="bg-transparent border-0 text-danger p-0"
                      @click="removeField(index)"
                    >
                      <small>Delete</small>
                    </button>
                  </td>
                </tr>
              </transition-group>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FormStore, FormInput, FormSelect } from "@/components/BaseForm";
import ProductAttributesStore from "@/pages/ProductsPage/stores/ProductAttributesStore";

const addField = () => {
  FormStore.fields.sizes.push({
    id: null,
    size_id: null,
    stock: null,
  });
};
const removeField = (index) => {
  if (index != 0) {
    FormStore.fields.sizes.splice(index, 1);
  }
};
</script>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
