<script setup>
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import useBannersService from "@/pages/BannersPage/services/useBannersService";
import BannerCardSkeleton from "@/pages/BannersPage/components/BannerCardSkeleton.vue";
import { ConfirmModal } from "@/components/ConfirmModal";
import defultImage from "@/assets/img/defult-image.png";
import useBannersStore from "@/pages/BannersPage/stores/BannersStore";
import { skeletonLoading } from "@/helpers";

const { deleteBanner, publishBanner, openConfirmModal } = useBannersService();

const BannersStore = useBannersStore();
</script>

<template>
  <transition-group
    name="list"
    tag="div"
    class="row"
    v-if="!skeletonLoading.isLoading"
  >
    <div
      class="col-xl-3 col-lg-3 col-md-4 col-6"
      v-for="(banner, index) in BannersStore.banners"
      :key="banner.id"
    >
      <figure class="card border-1 m-3">
        <div
          class="card-header bg-white text-center p-0 overflow-hidden d-flex justify-content-center align-items-center h-100 w-100"
        >
          <img
            :src="banner.image_url ?? defultImage"
            class="w-100"
            style="height: 100px"
          />
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
              @click="openConfirmModal({ id: banner.id, index: index })"
              role="button"
              class="dropdown-item d-flex align-items-center text-danger"
            >
              <i class="fa-solid fa-trash-can"></i>
              Delete
            </a>
          </DropdownMenu>
        </figcaption>

        <div class="p-2">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              :value="banner.is_active ?? ''"
              :checked="banner.is_active ?? ''"
              role="switch"
              @change="publishBanner(banner.id)"
              id="flexSwitchCheckChecked"
            />
          </div>
        </div>
      </figure>
    </div>
  </transition-group>

  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-center align-items-center">
        <div v-show="BannersStore.banners.length == 0">
          <h5 class="text-center">No Banners Found</h5>
        </div>
      </div>
    </div>
  </div>

  <BannerCardSkeleton v-if="skeletonLoading.isLoading" />
  <ConfirmModal @onConfirm="deleteBanner" />
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
