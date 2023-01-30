<script setup>
import { ref } from "vue";
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import OrderRow from "@/modules/Orders/components/OrderRow.vue";
import OrderRowSkeleton from "@/modules/Orders/components/OrderRowSkeleton.vue";
import useOrdersService from "@/modules/Orders/services/useOrdersService";
import OrdersStore from "@/modules/Orders/stores/OrdersStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";

import useUserStore from "@/Auth/store/userStore";

const { getAllOrders } = useOrdersService();

let fields = ["Code", "amount", "START DATE", "END DATE", "STATUS", "Action"];

const AuthUser = useUserStore();
</script>
<template>
  <section class="main-section">
    <PageHeader title="Orders List"> </PageHeader>

    <div
      class="card border-0 shadow mb-4"
      v-if="AuthUser.userCanAccess('access-orders')"
    >
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-centered table-nowrap mb-0 rounded">
            <thead class="thead-light">
              <tr>
                <th class="border-0 rounded-start">#</th>
                <th class="border-0">Name</th>
                <th class="border-0">Date</th>
                <th class="border-0">Total</th>
                <th class="border-0">Status</th>
                <th class="border-0">Actions</th>
              </tr>
            </thead>
            <tbody>
              <Suspense>
                <OrderRow />

                <template #callback>
                  <OrderRowSkeleton />
                </template>
              </Suspense>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
