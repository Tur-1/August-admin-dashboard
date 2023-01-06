<script setup>
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import BannersStore from "@/modules/AugustBanners/stores/BannersStore";
import useBannersService from "@/modules/AugustBanners/services/useBannersService";
import { ref } from "vue";
import { ConfirmModal, useConfirmModal } from "@/components/ConfirmModal";
import defultImage from "@/assets/img/defult-image.png";
const { getAllBanners, deleteBanner } = useBannersService();

await getAllBanners();

let banner = ref({ id: "", index: "" });

const openModal = ({ id, index }) => {
  useConfirmModal.open();
  banner.value.id = id;
  banner.value.index = index;
};
</script>

<template>
  <transition-group name="list" tag="div" class="row">
    <div
      class="col-xl-4 col-lg-4 col-md-4 col-6"
      v-for="(banner, index) in BannersStore.list"
      :key="banner.id"
    >
      <figure class="card border-1 m-3">
        <div
          class="card-header bg-white text-center p-0 overflow-hidden d-flex justify-content-center align-items-center h-100 w-100"
        >
          <img :src="banner.image_url ?? defultImage" class="w-100" />
        </div>

        <figcaption
          class="p-2 d-flex justify-content-between align-items-center"
        >
          <div class="Bannername">
            <small class="m-0">{{ banner.title }}</small>
          </div>
          <DropdownMenu>
            <RouterLink
              class="dropdown-item d-flex align-items-center"
              :to="{
                name: 'bannersEdit',
                params: { id: banner.id },
              }"
            >
              <i class="fa-solid fa-pen-to-square"></i>
              Edit
            </RouterLink>

            <a
              @click="openModal({ id: banner.id, index: index })"
              role="button"
              class="dropdown-item d-flex align-items-center text-danger"
            >
              <i class="fa-solid fa-trash-can"></i>
              Delete
            </a>
          </DropdownMenu>
        </figcaption>
      </figure>
    </div>
  </transition-group>

  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-center align-items-center">
        <div v-show="BannersStore.list.length == 0">
          <h5 class="text-center">No Banners Found</h5>
        </div>
      </div>
    </div>
  </div>
  <ConfirmModal
    @onConfirm="deleteBanner(banner)"
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
