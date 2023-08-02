<script setup>
import { ref } from "vue";
import ButtonLink from "@/components/ButtonLink/index.vue";
import PageHeader from "@/components/PageHeader/index.vue";
import RoleRow from "@/pages/Roles/components/RoleRow.vue";
import RoleRowSkeleton from "@/pages/Roles/components/RoleRowSkeleton.vue";
import useRolesService from "@/pages/Roles/services/useRolesService";
import RolesStore from "@/pages/Roles/stores/RolesStore";
import useConfirmModal from "@/components/ConfirmModal/useConfirmModal";
import { MainTable } from "@/components/MainTable";
import useUserStore from "@/Auth/store/userStore";
const { deleteRole, getRoles } = useRolesService();

let fields = ["Name", "Action"];

let Role = ref({ id: "", index: "" });

const openModal = ({ id, index }) => {
  useConfirmModal.open();
  Role.value.id = id;
  Role.value.index = index;
};
const AuthUser = useUserStore();
</script>
<template>
  <section class="main-section">
    <PageHeader title="Roles List">
      <ButtonLink
        title="New Role"
        routeName="rolesCreate"
        v-if="AuthUser.userCanAccess('create-roles')"
      />
    </PageHeader>

    <MainTable
      v-if="AuthUser.userCanAccess('access-roles')"
      :fields="fields"
      @onChangePage="getRoles"
      @onDelete="deleteRole(Role)"
      :pagination-links="RolesStore.pagination.links"
      :results="RolesStore.pagination.per_page"
      :total-results="RolesStore.pagination.total"
      no-records-found-title="No Roles Found"
      :showNoRecordsFound="RolesStore.filtered.length == 0"
    >
      <Suspense>
        <RoleRow @onDelete="openModal" />

        <template #fallback>
          <RoleRowSkeleton />
        </template>
      </Suspense>
    </MainTable>
  </section>
</template>
