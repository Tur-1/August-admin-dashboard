<script setup>
import { ref } from "vue";
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import CouponRow from "@/modules/Coupons/components/CouponRow.vue";
import CouponRowSkeleton from "@/modules/Coupons/components/CouponRowSkeleton.vue";
import useCouponsService from "@/modules/Coupons/services/useCouponsService";
import CouponsStore from "@/modules/Coupons/stores/CouponsStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { MainTable } from "@/components/MainTable";
import useUserStore from "@/Auth/store/userStore";
const { deleteCoupon, getAllCoupons } = useCouponsService();

let fields = ["Code", "amount", "START DATE", "END DATE", "STATUS", "Action"];

let Coupon = ref({ id: "", index: "" });

const openModal = ({ id, index }) => {
  useConfirmModal.open();
  Coupon.value.id = id;
  Coupon.value.index = index;
};
const AuthUser = useUserStore();
</script>
<template>
  <section class="main-section">
    <PageHeader title="Coupons List">
      <ButtonLink
        title="New Coupon"
        routeName="couponsCreate"
        v-if="AuthUser.userCanAccess('create-coupons')"
      />
    </PageHeader>

    <MainTable
      v-if="AuthUser.userCanAccess('access-coupons')"
      :fields="fields"
      @onChangePage="getAllCoupons"
      @onDelete="deleteCoupon(Coupon)"
      :pagination-links="CouponsStore.pagination.links"
      :results="CouponsStore.pagination.per_page"
      :total-results="CouponsStore.pagination.total"
      no-records-found-title="No Coupons Found"
      :showNoRecordsFound="CouponsStore.filtered.length == 0"
    >
      <Suspense>
        <CouponRow @onDelete="openModal" />

        <template #fallback>
          <CouponRowSkeleton />
        </template>
      </Suspense>
    </MainTable>
  </section>
</template>
