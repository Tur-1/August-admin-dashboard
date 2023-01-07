<script setup>
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import BrandsStore from "@/modules/Brands/stores/BrandsStore";
import useBrandsService from "@/modules/Brands/services/useBrandsService";
import { ref } from "vue";
import { ConfirmModal, useConfirmModal } from "@/components/ConfirmModal";
import AuthUser from "@/Auth/store/AuthUser";

const { getAllBrands, deleteBrand } = useBrandsService();

await getAllBrands();

let Brand = ref({ id: "", index: "" });

const openModal = ({ id, index }) => {
  useConfirmModal.open();
  Brand.value.id = id;
  Brand.value.index = index;
};

const defultImage = "./src/assets/img/defult-image.png";
</script>

<template>
  <transition-group name="list">
    <figure
      class="card border-1 m-3"
      style="width: 180px; min-height: 150px"
      v-for="(Brand, index) in BrandsStore.filtered"
      :key="Brand.id"
    >
      <div
        style="min-height: 130px"
        class="card-header bg-white text-center p-0 overflow-hidden d-flex justify-content-center align-items-center h-100 w-100"
      >
        <img
          height="76"
          :src="Brand.image_url ?? defultImage"
          class="img-fluid"
          alt="Logo"
        />
      </div>

      <figcaption class="p-2 d-flex justify-content-between align-items-center">
        <div class="Brandname">
          <h6 class="card-title m-0">{{ Brand.name }}</h6>
          <small style="font-size: 12px">5 items</small>
        </div>
        <DropdownMenu>
          <RouterLink
            v-if="AuthUser.userCanAccess('view-brands')"
            class="dropdown-item d-flex align-items-center"
            :to="{
              name: 'brandsEdit',
              params: { id: Brand.id },
            }"
          >
            <i class="fa-solid fa-pen-to-square"></i>
            Edit
          </RouterLink>

          <a
            v-if="AuthUser.userCanAccess('delete-brands')"
            @click="openModal({ id: Brand.id, index: index })"
            role="button"
            class="dropdown-item d-flex align-items-center text-danger"
          >
            <i class="fa-solid fa-trash-can"></i>
            Delete
          </a>
        </DropdownMenu>
      </figcaption>
    </figure>
  </transition-group>

  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-center align-items-center">
        <div v-show="BrandsStore.filtered.length == 0">
          <h5 class="text-center">No Brands Found</h5>
        </div>
      </div>
    </div>
  </div>
  <ConfirmModal
    @onConfirm="deleteBrand(Brand)"
    @onClose="useConfirmModal.close()"
  />
</template>
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
